import React  from "react";
import { useState } from "react";
import CreateAccountButton from "../atoms/Buttons/CreateAccountButton";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc, addDoc, collection, updateDoc } from "firebase/firestore";
import { auth, database } from "../firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch} from "react-redux";
import { registerFail, registerStart, registerSuccess } from "../actions/authActions";


const SignupForm = () => {
  const formInitialValue = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  }

  const dispatch = useDispatch()
  const [form, setForm] = useState(formInitialValue);
  const navigate = useNavigate()
  /*const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };*/


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerStart());
    await createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(async ({ user }) => {
        updateProfile(user, {
          displayName: form.name,
        });
        await setDoc(doc(database, "users", user.uid), form) //aca lo q hacemos es conectar mediante el uid los usuarios en auth y en firestore database
        dispatch(registerSuccess(user));
      })
      .then (()=> navigate("/"))
      .catch((error) => dispatch(registerFail(error.message)));
    setForm(formInitialValue)
  };

  return (
    <div className="flex flex-col rounded-xl sm:pt-24  items-center text-p5 w-11/12  max-w-sm p-2">
      <div className=" flex my-8  gap-2">
        <p className=" text-4xl font-semibold after:content-['cuenta.'] after:text-p2">Crea una </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full"
      > 
      <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className=" border-2 border-p2  rounded-md h-12 p-2 w-full  outline-p6"
        ></input>
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className=" border-2 border-p2  rounded-md h-12 p-2 w-full  outline-p6"
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className=" border-2 border-p2  rounded-md h-12 p-2 w-full   outline-p6"
        ></input>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={handleChange}
          placeholder="Confirm Password"
          className=" border-2 border-p2  rounded-md h-12 p-2 w-full   outline-p6"
        ></input>
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
