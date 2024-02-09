import { useState, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import { IoReturnUpBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import { RootState } from "../redux/store";
import { IDetailProduct } from "../page/DetailProduct";
import { Link } from "react-router-dom";
import ProductCart from "../component/ProductCart";
import DefaultLayout from "../layout/DefaultLayout";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const newTotalAmount = cartItems.reduce((total, item) => {
      const quantity = item.quantity || 1;
      return total + item.price * quantity;
    }, 0);

    setTotalAmount(newTotalAmount);
  }, [cartItems]);

  const handleRemoveProduct = (id: number) => {
    dispatch(removeItem(id));
  };

  console.log("cartItems", cartItems);

  return (
    <DefaultLayout>
      <div className="w-[1200px] mb-4 mt-[200px]">
        <div className="flex w-full justify-center items-center mb-8">
          <BsCart4 className=" text-5xl mr-3" />
          <h3 className=" text-3xl font-medium">Giỏ hàng của bạn</h3>
        </div>
        {cartItems.map((item: IDetailProduct) => (
          <ProductCart
            key={item.id}
            images={item.images}
            price={item.price}
            id={item.id}
            title={item.title}
            HandleAddProduct={() => handleRemoveProduct(item.id)}
            quantity={item.quantity}
          />
        ))}

        <div className="flex justify-between mt-6">
          <div>
            <textarea
              name=""
              id=""
              cols={60}
              rows={5}
              placeholder="Ghi chú.........."
              className=" bg-slate-100 p-4 rounded"
            ></textarea>
          </div>
          <div className="flex flex-col justify-between">
            <div className="w-full flex flex-col items-end mt-8  pr-4 ">
              <p className="font-normal pr-1 ">Tổng tiền:</p>
              <span className="text-xl font-semibold">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(totalAmount)}
              </span>
            </div>
            <div className="flex ">
              <Link to="/">
                <button className="flex items-center mr-4 text-lg  font-medium px-2 rounded hover:border-b-2 border-black hover:bg-slate-100">
                  <IoReturnUpBack className=" text-xl mr-2" />
                  Tiếp tục mua hàng
                </button>
              </Link>
              <Link to="/pay">
                <button className="text-lg mr-4 font-medium bg-blue-900 text-white px-6 py-2 rounded transition-transform transform hover:scale-105">
                  Thanh toán
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
