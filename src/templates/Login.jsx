import React, {useEffect} from "react";
import LoginForm from "../containers/LoginForm";
import {Link} from "react-router-dom"
import logo from "../../public/assets/logos/favicon_yard_sale.svg"
import Footer from "../containers/Footer";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebase.config";



const Login = () => {
  const test = async () => {
    await setDoc(doc(database, "users", "LIMA"), {
      name: "LIMA",
      state: "CA",
      country: "USA"
    });
  }
  test() // de esta forma agregamos un doc a una coleccion en FBStore


  
  return (
    <div className="flex flex-col items-center h-screen bg-white ">
      <Link to ="/" className="self-baseline  ml-7 mt-5">
      <img src={logo} alt="logo" className="w-14"></img>
      </Link>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
  );
};

export default Login;
