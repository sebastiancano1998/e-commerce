import React from "react";
import LoginForm from "../containers/LoginForm";
import {Link} from "react-router-dom"
import logo from "../../public/assets/logos/favicon_yard_sale.svg"
import Footer from "../containers/Footer";


const Login = () => {
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
