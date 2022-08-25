import React from "react";
import SignupForm from "../containers/SignUpForm";
import {Link} from "react-router-dom";
import logo from "../../public/assets/logos/favicon_yard_sale.svg"

const Signup = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-white ">
      <Link to="/" className="self-baseline  ml-7 mt-5">
        <img src={logo} alt="logo" className="w-14"></img>
      </Link>
      <SignupForm></SignupForm>
    </div>
  );
};

export default Signup;
