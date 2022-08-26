import React from "react";
import ProductItem from "../components/ProductItem";
import {useDispatch, useSelector} from "react-redux"
import { addToCart } from "../actions/cartActions";



const ProductList = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const {products} = state.cart;
  /*const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const { products, cart } = state;
  const addToCart = (id) => {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const removeFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_FROM_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({type: TYPES.CLEAR_CART})
  };
  const incrementCant = (value,id) => {
    dispatch({type: TYPES.INCREMENT, payload: [value,id]})
  };
  const decrementCant = (value,id) => {
    dispatch({type: TYPES.DECREMENT, payload: [value,id]})
  };*/
  return (
    <div className=" w-11/12 m-auto ">
      <p className="text-p2 font-semibold text-3xl text-center my-4">Products</p>
      <section className="grid grid-cols-2 gap-2">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              data={product}
              addToCart={()=> dispatch(addToCart(product.id))}
            ></ProductItem>
          );
        })}
      </section>
    </div>
  );
};

export default ProductList;
