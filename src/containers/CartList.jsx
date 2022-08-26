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

  const calcularTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.cantidad;
    const sum = cart.reduce(reducer, 0).toFixed(2);
    return sum;
  };

  return (
    <div>
      <h2>CartList</h2>
      <p>Total:${calcularTotal()}</p>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            data={item}
            removeFromCart={() => dispatch(removeFromCart(item.id))}
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
