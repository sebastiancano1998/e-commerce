import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/Ti";
import { BiTrash } from "react-icons/Bi";

const CartItem = ({ data, removeFromCart, incrementCant, decrementCant }) => {
  let { id, title, price, images, cantidad } = data;
  return (
    <div className="flex flex-col text-xs border-b first:border-t">
      <div className="w-full flex gap-4 items-center pt-5">
        <div className="w-1/2 ml-4">
          <img src={images[0]} alt={title} className="rounded-xl"></img>
        </div>
        <div className="w-1/2">
          <p>{title}</p>
          <p className="font-semibold mt-2">Price: ${price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-around py-5 self-center">
        <div className="flex gap-2 pr-2">
          <span>Cant:</span>
          <button onClick={() => incrementCant(1, id)}>
            <TiArrowSortedUp className="text-p2 text-base" />
          </button>
          <span>{cantidad}</span>
          <button onClick={() => decrementCant(1, id)}>
            <TiArrowSortedDown className="text-p2 text-base" />
          </button>
        </div>
        <button
          className="border-l  border-p5 pl-2"
          onClick={() => removeFromCart(id)}
        >
          <BiTrash className="text-p5 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
