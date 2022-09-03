import React from "react";
import { useSelector} from "react-redux";

import CartItem from "../components/CartItem";

const CartList = () => {
  const state = useSelector((state) => state);
  const { cart } = state.cart;

  return (
          <section className="flex flex-col">
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  data={item}
                ></CartItem>
              );
            })}
          </section>
  );
};

export default CartList;
