import React from "react";
import { MdAddShoppingCart } from "react-icons/Md";
import { AiOutlineCheck } from "react-icons/Ai";
import { useSelector } from "react-redux";

const ProductItem = ({ data, addToCart }) => {
  const state = useSelector((state) => state);
  const { cart } = state.cart;
  let { id, title, price, images } = data;
  return (
    <div className="border rounded-lg overflow-hidden">
      <img src={images[0]} alt={title} className="w-full"></img>
      <div className="p-2 flex flex-col">
        <p className="text-p5 h-16 text-sm">{title}</p>
        <div className="flex items-center justify-between">
        <strong className="text-sm text-p2" >${price.toFixed(2)}</strong>
        <span>
          
          {cart.find((item) => item.id === id) ? (
            <AiOutlineCheck className="text-xl border text-p2 h-10 w-10 rounded-full p-2" />
          ) : (
            <MdAddShoppingCart
              onClick={() => addToCart(data)}
              className="text-xl text-p2 border hover:border-none hover:cursor-pointer h-10 w-10 rounded-full p-2 hover:text-white hover:bg-p2"
            />
          )}
        </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
