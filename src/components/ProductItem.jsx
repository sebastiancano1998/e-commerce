import React from "react";
import { MdAddShoppingCart } from "react-icons/Md";
import { AiOutlineCheck } from "react-icons/Ai";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { database } from "../firebase.config";

const ProductItem = ({ data }) => {
  const state = useSelector((state) => state);
  const { cart } = state.cart;
  const {currentUser} = state.auth
  const dispatch = useDispatch(); 
  let { id, title, price, images } = data;
  /*const handleSome = async (data) => {
    dispatch(addToCart(data))
    const userFavRef = doc(database, "users", currentUser.uid)
    setDoc(userFavRef, {favProducts: [{...data}]}, {merge:true})
  }*/
  const handleSome = async (data) => {
    dispatch(addToCart(data))
    const userFavRef = doc(database, "users", currentUser.uid)
    console.log(userFavRef)
    await setDoc(userFavRef, {favProducts: arrayUnion(data)}, {merge:true})
  }
  return (
    <div className="border rounded-lg overflow-hidden">
      <img src={images[0]} alt={title} className="w-full"></img>
      <div className="p-2 flex flex-col">
        <p className="text-p5 h-16 text-sm">{title}</p>
        <div className="flex items-center justify-between">
        <strong className="text-sm text-p2" >${price.toFixed(2)}</strong>
        <span>
          
          {cart.find((item) => item.id === id) ? (
            <AiOutlineCheck className="text-xl border text-p2 h-10 w-10 rounded-full p-2" />
          ) : (
            <MdAddShoppingCart
              onClick={() => handleSome(data)}
              className="text-xl text-p2 border hover:border-none hover:cursor-pointer h-10 w-10 rounded-full p-2 hover:text-white hover:bg-p2"
            />
          )}
        </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
