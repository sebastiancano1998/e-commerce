import { collection, getDocs } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../containers/Navbar";
import { database, storage } from "../firebase.config";

const UserDetails = () => {
  const initialFormValue = {
    name: "",
    price:  undefined,
    category: undefined,
    description: "",
    images: [],
    stock: undefined,
  }
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function getAllCategories() {
      const snapshot = await getDocs(collection(database, "category"));
      snapshot.docs.forEach((doc)=>{
        setCategories((prev)=>{
          return [...prev,{id: doc.id, title: doc.data().title}]; //aca almacenamos todas los docs en el estado categorias
        })
      })
    }
    getAllCategories()
  }, [])
  console.log(categories)

  const [form, setForm] = useState(initialFormValue)
  const { currentUser } = useSelector((state) => state.auth);
  const [uploadValue, setUploadValue] = useState(0);
  const [picture, setPicture] = useState("");
  console.log(form)
  const handleChange = (e) => {
    const [id, title] = e.target.value.split("/")
    setForm({
      ...form,
      [e.target.name]: e.target.value, //agarra el estado anterior del objeto form y aumentale la siguiente propiedad 
      category: {id,title}
  })}


  const handleUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadValue(progress);
        console.log("Upload is" + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => [
          console.log("File at", downloadURL),
          setUploadValue(100),
          setPicture(downloadURL),
        ]);
      }
    );
  };
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
        <p>
          <strong>Favorites ship</strong>
        </p>
        <div>
          <h1>Agregar producto</h1>
          <form>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className=" border-2 border-p2  rounded-md h-12 p-2 w-full outline-p6"
            ></input>
            <input
              type="number"
              id="price"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className=""
            ></input>
            <input
              type="text"
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className=" border-2 border-p2  rounded-md h-12 p-2 w-full  outline-p6 "
            ></input>
            <input
              type="number"
              id="stock"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              placeholder="Stock"
            ></input>
            <select name="category" onChange={handleChange}>
              <option value="">---</option>
              {categories.map((category)=>{
                return (
                   <option key={category.id} value={`${category.id}/${category.title}`}>{category.title}</option>
                )
              })}
            </select>
            <progress value={uploadValue}></progress>
            <input type="file" onChange={handleUpload}></input>
            <img className="w-80" alt="image-test-upload" src={picture}></img>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
