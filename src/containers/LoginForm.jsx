import React from "react";
import { useState } from "react";
import LoginButton from "../atoms/Buttons/LoginButton";
import {Link} from "react-router-dom"
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
    <div className="flex flex-col bg-white items-center text-p5 w-11/12 m-auto max-w-sm p-4">
      <div className=" flex my-8 items-center">
        <p className=" text-p2 text-2xl font-semibold">Log in</p>
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
          className=" border-2  rounded-md h-12 p-2 w-full outline-p2"
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className=" border-2    rounded-md h-12 p-2 w-full  outline-p2"
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
