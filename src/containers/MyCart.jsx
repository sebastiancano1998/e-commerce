import React, { useEffect, useRef } from "react";
import CartList from "./CartList";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/Md";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../actions/cartActions";

const MyCart = ({ toggle, toggleValue }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart } = state.cart;
  const btnRef = useRef();

  const calcularTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.cantidad;
    const sum = cart.reduce(reducer, 0).toFixed(2);
    return sum;
  };
  useEffect(() => {
    let handler = (e) => {
      if (!btnRef.current?.contains(e.target)) {
        toggle();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <AnimatePresence>
      {toggleValue && (
        <>
          <motion.div
            className="bg-p5 w-full h-full fixed top-0 left-0 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          ></motion.div>
          <motion.div
            ref={btnRef}
            className="flex flex-col fixed top-0 right-0 bottom-0 z-20 w-72 bg-white py-4 overflow-y-scroll"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.4 }}
            exit={{ x: "100%" }}
          >
            <div className="flex items-center gap-2 ml-4">
              <MdOutlineKeyboardArrowRight
                className="text-2xl text-p5 hover:cursor-pointer"
                onClick={() => toggle()}
              />
              <p className="font-semibold">My Cart</p>
            </div>
            {cart.length > 0 ? (
              <>
                <p className="py-8 text-center text-sm">
                  <span>Subtotal: </span>
                  <strong className="text-p2">${calcularTotal()}</strong>
                </p>
                <button className="text-sm self-center mb-8 bg-p2 text-white py-2 px-4 rounded-md border-p2 font-semibold border">
                  Proceder al pago
                </button>
                <CartList></CartList>
                <button className="m-4 text-xs hover:text-p2 hover:underline self-end" onClick={() => dispatch(clearCart())}>
                  Limpiar Carro
                </button>
              </>
            ) : (
              <div className="p-8">
                <span className="text-base font-medium">Tu carrito esta vacio.</span>
                <p className= " text-xs p-2 mt-4 border border-p2 rounded-lg">
                  ¿Sabías que tu carrito te sigue en cualquier dispositivo?
                  Agrega artículos aquí y los verás donde sea que inicies
                  sesión.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MyCart;
