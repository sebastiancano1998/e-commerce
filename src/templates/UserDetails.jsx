import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../containers/Navbar";
import { database, storage } from "../firebase.config";

const UserDetails = () => {
  const initialFormValue = {
    name: "",
    price: 0,
    category: {},
    description: "",
    images: {},
    stock: 0,
  };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getAllCategories() {
      const snapshot = await getDocs(collection(database, "category"));
      snapshot.docs.forEach((doc) => {
        setCategories((prev) => {
          return [...prev, { id: doc.id, title: doc.data().title }]; //aca almacenamos todas los docs en el estado categorias
        });
      });
    }
    getAllCategories();
  }, []);
  console.log(categories);

  const [form, setForm] = useState(initialFormValue);
  const { currentUser } = useSelector((state) => state.auth);
  const [uploadValue, setUploadValue] = useState(0);
  const [picture, setPicture] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, //agarra el estado anterior del objeto form y aumentale la siguiente propiedad
    });
  };
  const handleSelect = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    setForm({
      ...form,
      category: {
        id: e.target.options[selectedIndex].getAttribute("data"),
        title: e.target.value,
      },
    });
  };

  const handleFileUpload = (e) => {
    setPicture(e.target.files[0]);
  };

  async function uploadImagesAndData() {
    const storageRef = ref(storage, `/images/${picture.name}`);
    const uploadTask = uploadBytesResumable(storageRef, picture);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setUploadValue(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          const newProduct = await addDoc(collection(database, "products"), {
            ...form,
            images: {url: url},
            price: Number(form.price),
            stock: Number(form.stock),
          });
          console.log(newProduct.id);
        });
      }
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadImagesAndData();
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
          <form onSubmit={handleSubmit}>
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
            <select name="category" onChange={handleSelect}>
              <option value="">---</option>
              {categories.map((category) => {
                return (
                  <option
                    key={category.id}
                    data={category.id}
                    value={category.title}
                  >
                    {category.title}
                  </option>
                );
              })}
            </select>
            <progress value={uploadValue}></progress>
            <input type="file" onChange={handleFileUpload}></input>
            <button type="submit">Subir datos</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
