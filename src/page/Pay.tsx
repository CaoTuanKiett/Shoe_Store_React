import { useState, useEffect } from "react";
import ProductCart from "../component/ProductCart";
import DefaultLayout from "../layout/DefaultLayout";
import { IDetailProduct } from "../page/DetailProduct";
import { useToasts } from "react-toast-notifications";

import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../redux/cartSlice";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const Pay = () => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const cartItems = useSelector((state: RootState) => state.cart.items);

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

  const handleClearProduct = () => {
    addToast("Order Success", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 2000,
    });
    dispatch(clearCart());
  };

  return (
    <DefaultLayout>
      <div className="flex w-[1200px] mb-20 mt-[200px]">
        <div className="flex flex-col w-[606px] mr-[40px] mt-20">
          <h3 className=" text-xl font-semibold mb-8">Thông tin giao hàng</h3>
          <input
            type="text"
            placeholder="Tên người nhận"
            className="bg-[#F7F7F7] px-4 py-3 placeholder:text-[#757575] mb-3 rounded"
            required
          />
          <input
            type="text"
            placeholder="Địa chỉ nhận hàng"
            className="bg-[#F7F7F7] px-4 py-3 placeholder:text-[#757575] mb-3 rounded"
            required
          />
          <input
            type="text"
            placeholder="Địa chỉ nhận hàng"
            className="bg-[#F7F7F7] px-4 py-3 placeholder:text-[#757575] mb-3 rounded"
            required
          />
          <textarea
            placeholder="Chú thích thêm..."
            cols={50}
            rows={5}
            className="bg-[#F7F7F7] px-4 py-3 placeholder:text-[#757575] mb-3 rounded"
            required
          ></textarea>

          <div className="flex justify-end mt-10">
            <Link to="/">
              <button
                onClick={handleClearProduct}
                className="w-[300px] h-[48px] bg-[#444A59] rounded text-white text-base font-semibold hover:opacity-80 transition-transform transform hover:scale-105"
              >
                Đặt hàng
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-[#eee] w-[560px] mt-10 p-10 rounded ">
          <h3 className="text-xl font-semibold mb-8">Thông tin đơn hàng </h3>
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

          <div className="mt-8 h-12">
            <input
              type="text"
              placeholder="Nhập mã giảm giá"
              className="h-full w-[340px] px-5 py-3 placeholder:text-[#757575] rounded "
            />
            <button className="w-[122px] h-full bg-[#DDBA76] transition-transform transform hover:scale-105">
              Áp dụng
            </button>
          </div>
          <div className="flex justify-between my-8">
            <p>Giá trị sản phẩm:</p>
            <p>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(totalAmount)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className=" text-2xl font-medium">Tổng tiền:</p>
            <div className=" text-right">
              <p className=" text-2xl font-semibold">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(totalAmount)}
              </p>
              <p className=" text-sm font italic">Miễn phí vận chuyển</p>
              <p className=" text-lg mt-2 font-medium">
                Thanh toán tiền mặt khi nhận hàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Pay;
