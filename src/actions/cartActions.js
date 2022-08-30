import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "../types";

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });
export const incrementCant = (value, id) => ({
  type: INCREMENT,
  payload: [value, id],
});
export const decrementCant = (value, id) => ({
  type: DECREMENT,
  payload: [value, id],
});
export const clearCart = () => ({ type: CLEAR_CART });
