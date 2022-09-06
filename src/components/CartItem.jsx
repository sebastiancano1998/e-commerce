import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/Ti";
import { BiTrash } from "react-icons/Bi";
import { useDispatch } from "react-redux";
import {
  decrementCant,
  incrementCant,
  removeFromCart,
} from "../actions/cartActions";

const CartItem = ({ data }) => {
  let { id, name, price, images, cantidad } = data;

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col text-xs border-b first:border-t">
      <div className="w-full flex gap-4 items-center pt-5">
      <div className="flex justify-center w-1/2 pl-4">
        <div className="h-32 w-32">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-contain"
          ></img>
        </div>
      </div>
        <div className="w-1/2">
          <p>{name}</p>
          <p className="font-semibold mt-2">Price: ${price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-around py-5 self-center">
        <div className="flex gap-2 pr-2">
          <span>Cant:</span>
          <button onClick={() => dispatch(incrementCant(1, id))}>
            <TiArrowSortedUp className="text-p2 text-base" />
          </button>
          <span>{cantidad}</span>
          <button onClick={() => dispatch(decrementCant(1, id))}>
            <TiArrowSortedDown className="text-p2 text-base" />
          </button>
        </div>
        <button
          className="border-l  border-p5 pl-2"
          onClick={() => dispatch(removeFromCart(id))}
        >
          <BiTrash className="text-p5 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
