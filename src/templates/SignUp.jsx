import React from "react";
import SignupForm from "../containers/SignUpForm";
import logo from "../../public/assets/logos/favicon_yard_sale.svg";
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <div className="flex flex-col gap-8">
      <Link to="/">
      <img src={logo} className="w-14 ml-4 mt-4" alt="logo"></img>
      </Link>
      <SignupForm></SignupForm>
    </div>
  );
};

export default Signup;
