import React from "react";
import addToCartLogo from "../../public/assets/icons/bt_add_to_cart.svg";
import { MdAddShoppingCart } from "react-icons/Md";
import { AiOutlineCheck } from "react-icons/Ai";
import { useSelector } from "react-redux";

const ProductItem = ({ data, addToCart }) => {
  const state = useSelector((state) => state);
  const { cart } = state.cart;
  let { id, name, price, image } = data;
  return (
    <div className="border rounded-lg overflow-hidden">
      <img src={image}></img>
      <div className="p-2 flex justify-between items-center ">
        <div className="text-sm">
          <p>{name}</p>
          <strong >${price}.00</strong>
        </div>
        <span>
          {cart.find((item) => item.id === id) ? (
            <AiOutlineCheck className="text-xl border text-p2 h-10 w-10 rounded-full p-2" />
          ) : (
            <MdAddShoppingCart
              onClick={() => addToCart(id)}
              className="text-xl text-p2 border hover:border-none hover:cursor-pointer h-10 w-10 rounded-full p-2 hover:text-white hover:bg-p2"
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
