import React from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../firebase.config";
import { loginFail, loginStart, loginSuccess } from "../actions/authActions";
import { doc, getDoc } from "firebase/firestore";



const LoginForm = () => {
  const formInitialValue = {
    email: "",
    password: "",
  }
  const [form, setForm] = useState(formInitialValue);
  const [error, setError] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  



  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(()=> dispatch(loginStart())) 
    await signInWithEmailAndPassword(auth, form.email, form.password)
    .then(async ({ user }) => {
      const userRef = doc(database, "users", user.uid)
      const userSnap = await getDoc(userRef)
      if (userSnap.exists()) {
        console.log(userSnap.data().email)
        dispatch(loginSuccess({...user, ...userSnap.data()}));
      } else {
        console.log("User not found")
      }
    })
     
    .then (()=> navigate("/"))
    .catch((error) => dispatch(loginFail(error.message)));
    setForm(formInitialValue)
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
        <button type="submit" className="bg-p2 text-white text-lg p-2 rounded-md border-p2 border w-full font-semibold "  >Log in now</button>
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
