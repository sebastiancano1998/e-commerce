import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementCant,
  incrementCant,
  removeFromCart,
} from "../actions/cartActions";
import CartItem from "../components/CartItem";

const CartList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart } = state.cart;

  return (
    <div>
      <h2>CartList</h2>
      {cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            data={item}
            indexValue={index}
            removeFromCart={() => dispatch(removeFromCart(index))}
            incrementCant={() => dispatch(incrementCant(1, item.id))}
            decrementCant={() => dispatch(decrementCant(1, item.id))}
          ></CartItem>
        );
      })}
      <button onClick={() => dispatch(clearCart())}>Limpiar Carro</button>
    </div>
  );
};

export default CartList;
