import React from "react";
import { useDispatch } from "react-redux";
import { getCartTotal, removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className=" !my-10 flex items-center justify-between shadow-lg rounded !p-2">
      <img
        className="w-[150px] !h-[150px] object-contain"
        src={cart?.image}
        alt="cart-img"
      />
      <div className="w-[476px] text-xl">{cart?.title}</div>
      <div className="font-bold text-2xl">
        {cart?.price} TL ({cart?.quantity})
      </div>
      <div
        onClick={() => {
          dispatch(removeFromCart(cart?.id));
          dispatch(getCartTotal());
        }}
        className="bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
