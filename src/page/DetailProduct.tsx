import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { MdShoppingCart } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useToasts } from "react-toast-notifications";
import { Link, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItem, updateQuantity } from "../redux/cartSlice";

import DefaultLayout from "../layout/DefaultLayout";

export interface IDetailProduct {
  images: string[];
  title: string;
  code?: string;
  material?: string;
  style?: string;
  design?: string;
  brand?: string;
  color?: string;
  price: number;
  quantity?: number;
  size?: string[];
  id: number;
  HandleAddProduct?: () => void;
}

const DetailProduct = () => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const location = useLocation();

  const HandleAddProduct = (item: IDetailProduct) => {
    const updatedItem = { ...item };

    updatedItem.quantity = quantity;

    dispatch(addItem(updatedItem));
    console.log(updatedItem);

    addToast("Product added to cart!", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 2000,
    });
  };

  const { item } = location.state;
  const [selectedImage, setSelectedImage] = useState<string>(item.images[0]);
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    console.log(newQuantity);

    dispatch(updateQuantity({ itemId: item.id, quantity: newQuantity }));
  };

  return (
    <>
      <DefaultLayout>
        <div className=" w-[1200px] text-left hover:opacity-75 cursor-pointer mt-[200px]">
          <Link to="/" className="flex items-center">
            <IoIosArrowBack className=" text-xl" />
            <p className=" font-semibold ">Back</p>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between w-[1200px] mb-[140px] mt-[30px]">
          <div className="">
            <img
              src={`/images/${selectedImage}.jpg`}
              alt="dd"
              loading="lazy"
              className="w-[570px] h-[712px] object-cover  transition-transform duration-300 transform hover:scale-105  "
            />
            <div className="flex mt-4 w-[570px] justify-around">
              <img
                src={`/images/${item.images[0]}.jpg`}
                alt="dd"
                loading="lazy"
                className="w-[123px] h-[123px] object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                onClick={() => handleThumbnailClick(item.images[0])}
              />
              <img
                src={`/images/${item.images[1]}.jpg`}
                alt="dd"
                loading="lazy"
                className="w-[123px] h-[123px] object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                onClick={() => handleThumbnailClick(item.images[1])}
              />
              <img
                src={`/images/${item.images[2]}.jpg`}
                alt="dd"
                loading="lazy"
                className="w-[123px] h-[123px] object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                onClick={() => handleThumbnailClick(item.images[2])}
              />
              <img
                src={`/images/${item.images[3]}.jpg`}
                alt="dd"
                loading="lazy"
                className="w-[123px] h-[123px] object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                onClick={() => handleThumbnailClick(item.images[3])}
              />
            </div>
          </div>
          <div className="w-[480px]">
            <h2 className=" text-xl font-semibold">
              {item.title} <br /> {item.code}
            </h2>
            <p className=" text-base text-[#575C68] py-2 mt-6 ">
              - {item.material}
            </p>
            <p className=" text-base text-[#575C68] py-2 ">
              - Kiểu dáng: Oxford
            </p>
            <p className=" text-base text-[#575C68] py-2 ">- {item.design}</p>
            <p className=" text-base text-[#575C68] py-2 ">- {item.brand}</p>
            <p className=" text-base text-[#575C68] py-2 ">- {item.color}</p>

            <p className=" text-xl text-[#DDBA76] font-semibold py-12 ">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(item.price)}
            </p>

            <div className="flex items-center mb-4 mt-9">
              <LuMinus
                className="w-[26px] text-xl p-1 h-7 border-2 cursor-pointer hover:bg-slate-100"
                onClick={() =>
                  handleQuantityChange(quantity > 0 ? quantity - 1 : 0)
                }
              />
              <p className="text-center text-xl w-[26px] font-semibold">
                {quantity}
              </p>
              <LuPlus
                className="w-[26px] text-xl h-7 p-1 border-2 cursor-pointer hover:bg-slate-100"
                onClick={() => handleQuantityChange(quantity + 1)}
              />
            </div>

            <div className="flex my-6">
              <p className="w-[46px] border-2 p-2  cursor-pointer text-center font-semibold mr-2 hover:bg-slate-100">
                {item.size[0]}
              </p>
              <p className="w-[46px] border-2 p-2  cursor-pointer text-center font-semibold mr-2 hover:bg-slate-100">
                {item.size[1]}
              </p>
              <p className="w-[46px] border-2 p-2  cursor-pointer text-center font-semibold mr-2 hover:bg-slate-100">
                {item.size[2]}
              </p>
            </div>

            <div className="flex">
              <button
                className="w-[370px] h-[55px] flex justify-center text-xl  text-white items-center ml-1 bg-yellow-600 p-3 hover:opacity-80"
                onClick={() => HandleAddProduct(item)}
              >
                <MdShoppingCart className=" text-3xl mr-4" />
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default DetailProduct;
