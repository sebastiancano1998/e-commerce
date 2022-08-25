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
    <div>
      <h1>ProductList</h1>
      <article>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              data={product}
              addToCart={()=> dispatch(addToCart(product.id))}
            ></ProductItem>
          );
        })}
      </article>
    </div>
  );
};

export default ProductList;
