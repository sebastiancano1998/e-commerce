import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../containers/Navbar";
import { doc, setDoc } from "firebase/firestore";


const UserDetails = () => {
  const {currentUser} = useSelector((state)=> state.user)
  console.log(currentUser)

 

  return (
    <>
    <Navbar></Navbar>
    <div className="pt-20">
      <p>User DEtails</p>
      <p>
        <strong>Email</strong>
        <span>{currentUser.email}</span>
      </p>
      <p>
        <strong>Name</strong>
        <span>{currentUser.displayName}</span>
      </p>
    </div>
    </>
  );
};

export default UserDetails;
