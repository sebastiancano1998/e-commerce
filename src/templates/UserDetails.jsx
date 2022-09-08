import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../containers/Navbar";
import { database, storage } from "../firebase.config";
import useGetAllCategories from "../hooks/useGetAllCategories";

const UserDetails = () => {
  
  return (
    <>
      <Navbar></Navbar>
      {isLoading ? (
        <p className="pt-20">Loading...</p>
      ) : (
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
          <p>
            <strong>Favorites ship</strong>
          </p>
  
        </div>
      )}
    </>
  );
};

export default UserDetails;
