import React from "react";
import { useState } from "react";
import LoginButton from "../atoms/Buttons/LoginButton";
import {Link} from "react-router-dom";
const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <div className="flex flex-col bg-white sm:pt-24 items-center rounded-xl text-p5 w-11/12  max-w-sm p-2">
      <div className=" flex my-8  gap-2">
        <p className=" text-p5 text-4xl font-semibold after:content-['sesión.'] after:text-p2">Inicia </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full"
      >
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className=" border-2 border-p2  rounded-md h-12 p-2 w-full outline-p6"
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className=" border-2 border-p2  rounded-md h-12 p-2 w-full  outline-p6 "
        ></input>
        <p className="self-end text-p2 text-sm hover:underline">
            <Link to="">
            Forgot password?
            </Link>
        </p>
        <LoginButton type="submit"></LoginButton>
        <p className="text-center">
          No account? 
          <Link to="/signup" className="text-p2 hover:underline ml-1">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
