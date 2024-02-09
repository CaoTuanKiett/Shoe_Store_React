import { useState, useEffect } from "react";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

import Product from "../component/ProductHome";
import DefaultLayout from "../layout/DefaultLayout";
import IMGBanner from "/images/banner.png";
import IMGBannerfooter from "/images/banner-anh.jpg";
import { IDetailProduct } from "./DetailProduct";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ITEMS_PER_PAGE = 20;

const HomePage = () => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [data, setData] = useState<IDetailProduct[]>([]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setData(response.data);
        console.log("Fetch successful");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const HandleAddProduct = (product: IDetailProduct) => {
    dispatch(addItem(product));
    addToast("Product added to cart!", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 2000,
    });
  };

  return (
    <div className="w-full">
      <DefaultLayout>
        <div className=" mb-8 mt-[200px]">
          <img src={IMGBanner} alt="IMGBanner" />
        </div>
        <div className="w-[1200px] flex flex-wrap justify-center">
          {currentItems.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              images={product.images}
              title={product.title}
              price={product.price}
              code={product.code}
              brand={product.brand}
              color={product.color}
              design={product.design}
              material={product.material}
              quantity={product.quantity}
              size={product.size}
              style={product.style}
              HandleAddProduct={() => HandleAddProduct(product)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(data.length / ITEMS_PER_PAGE) }).map(
            (_, index) => (
              <button
                className=" text-base font-medium py-2 px-4 m-4 border-2 rounded-full hover:bg-slate-100"
                key={index}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
        <div className="mt-4 mb-8 w-full">
          <img
            src={IMGBannerfooter}
            alt={IMGBannerfooter}
            className="w-full h-[350px] object-cover"
          />
        </div>
      </DefaultLayout>
    </div>
  );
};

export default HomePage;
