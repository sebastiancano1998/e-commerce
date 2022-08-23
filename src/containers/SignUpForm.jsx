import React from "react";
import { useState } from "react";
import CreateAccountButton from "../atoms/Buttons/CreateAccountButton";
import {Link} from "react-router-dom"

const SignupForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repassword: "",
    terminos: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
  };
  console.log(form);
  return (
    <div className="flex flex-col bg-white items-center text-p5 w-11/12 m-auto max-w-sm p-4">
      <div className=" flex my-8 items-center">
        <p className=" text-p2 text-2xl font-semibold">Sign up</p>
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
        <input
          type="password"
          id="repassword"
          name="repassword"
          value={form.repassword}
          onChange={handleChange}
          placeholder="Confirm password"
          className="border-2   rounded-md h-12 p-2 w-full outline-p2"
        ></input>
        <div className="flex flex-row-reverse gap-2 self-baseline">
          <label htmlFor="terminos"className="text-sm" >Acepto términos y condiciones.</label>
          <input
            type="checkbox"
            id="terminos"
            name="terminos"
            value="terminos"
            onChange={handleChecked}
          ></input>
        </div>
        <CreateAccountButton type="submit"></CreateAccountButton>
        <p className="text-center">
          Already have an account?
          <Link to="/login" className="text-p2 hover:underline ml-1">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
