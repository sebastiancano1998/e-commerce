import React from "react";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import useGetAllProducts from "../hooks/useGetAllProducts";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {

  const products = useGetAllProducts(API)[0];
  const loading = useGetAllProducts(API)[1];
  console.log(products);
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
      <p className="text-p2 font-semibold text-3xl text-center my-4">
        Products
      </p>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                data={product}
                
              ></ProductItem>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default ProductList;
