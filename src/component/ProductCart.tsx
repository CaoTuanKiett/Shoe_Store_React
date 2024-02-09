import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { LuPlus, LuMinus } from "react-icons/lu";
import { updateQuantity } from "../redux/cartSlice";

interface ProductCartProps {
  images: string[];
  title: string;
  price: number;
  material?: string;
  HandleAddProduct: () => void;
  quantity?: number;
  id: number;
}

const ProductCart: React.FC<ProductCartProps> = (props) => {
  const dispatch = useDispatch();
  const [sum, setSum] = useState<number>(0);

  useEffect(() => {
    setSum(parseFloat((props.price * (props.quantity || 1)).toFixed(1)));
  }, [props.price, props.quantity]);

  const handleQuantityChange = (newQuantity: number) => {
    dispatch(updateQuantity({ itemId: props.id, quantity: newQuantity }));
  };

  return (
    <div className="flex w-full p-4 shadow-lg transition-transform transform hover:scale-105">
      <div>
        <img
          src={`/images/${props.images[0]}.jpg`}
          alt="sdsds"
          className="w-[152px] h-[136px] object-cover"
          loading="lazy"
        />
      </div>

      <div className="w-full ml-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">{props.title}</h2>

          <IoClose
            className=" text-xl cursor-pointer"
            onClick={props.HandleAddProduct}
          />
        </div>
        <p className="font-medium py-2">{props.price} VNĐ</p>
        <p className="font-medium pb-2">{props.material}</p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <LuMinus
              className="w-[26px]  text-xl p-1 h-7 border-2 cursor-pointer hover:bg-slate-100"
              onClick={() =>
                handleQuantityChange(props.quantity ? props.quantity - 1 : 0)
              }
            />
            <p className=" text-center text-xl w-[26px] font-semibold ">
              {props.quantity}
            </p>
            <LuPlus
              className="w-[26px]  text-xl h-7 p-1 border-2 cursor-pointer hover:bg-slate-100"
              onClick={() => handleQuantityChange((props.quantity || 0) + 1)}
            />
          </div>
          <p className="font-medium text-base">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(sum)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
