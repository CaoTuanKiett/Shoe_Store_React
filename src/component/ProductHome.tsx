import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { IDetailProduct } from "../page/DetailProduct";

const Product: React.FC<IDetailProduct> = (props) => {
  const { HandleAddProduct, ...productData } = props;
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="w-[240px] h-[400px] relative shadow-lg rounded m-4 transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link
        key={props.id}
        to={`/product/detailProduct/${props.id}`}
        state={{ item: productData }}
      >
        <img
          width={240}
          height={338}
          loading="lazy"
          className=" object-cover rounded "
          src={`/images/${props.images[0]}.jpg`}
          alt={props.images[0]}
        />
        <div className="flex flex-col items-center p-4">
          <p className="text-[#DDBA76] text-base font-medium ">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(props.price)}
          </p>
          <p className=" text-sm">{props.title}</p>
          <p className=" text-sm">{props.code}</p>
        </div>
      </Link>
      {isHover && (
        <MdShoppingCart
          className={` absolute top-2 right-2 text-4xl text-yellow-700 hover:text-yellow-600 cursor-pointer transition-transform duration-300 transform hover:scale-125`}
          onClick={HandleAddProduct}
        />
      )}
    </div>
  );
};

export default Product;
