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
  const { currentUser } = state.auth;
  const dispatch = useDispatch();
  let { id, name, price, images } = data;
  /*const handleSome = async (data) => {
    dispatch(addToCart(data))
    const userFavRef = doc(database, "users", currentUser.uid)
    setDoc(userFavRef, {favProducts: [{...data}]}, {merge:true})
  }*/
  const handleSome = async (data) => {
    dispatch(addToCart(data));
    const userFavRef = doc(database, "users", currentUser.uid);
    console.log(userFavRef);
    await setDoc(
      userFavRef,
      { favProducts: arrayUnion(data) },
      { merge: true }
    );
  };
  return (
    <div className="flex flex-col border rounded-lg overflow-hidden">
      <div className="flex justify-center py-8 px-2">
        <div className="w-32 h-32 sm:h-56 sm:w-56">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-contain"
          ></img>
        </div>
      </div>
      <div className="overflow-hidden p-2 flex flex-col w-full">
        <p className="h-16 text-sm">{name}</p>
        <div className="flex items-center justify-between">
          <strong className="text-sm text-p2">${price.toFixed(2)}</strong>
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
