import React from "react";
import { useDispatch, useSelector} from "react-redux";
import {
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
        
          <section className="flex flex-col">
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
          </section>
  );
};

export default CartList;
