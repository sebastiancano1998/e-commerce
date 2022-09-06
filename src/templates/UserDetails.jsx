import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../containers/Navbar";
import { database, storage } from "../firebase.config";
import useGetAllCategories from "../hooks/useGetAllCategories";

const UserDetails = () => {
  const initialFormValue = {
    name: "",
    price: 0,
    category: {},
    description: "",
    images: [],
    stock: 0,
  };
  const [form, setForm] = useState(initialFormValue);
  const categories = useGetAllCategories()[0];
  const isLoading = useGetAllCategories()[1];
  const { currentUser } = useSelector((state) => state.auth);
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);


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
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      setImages((prevState) => [...prevState, newImage]);
    } /*
    setImage(
      e.target.files[0]
    )*/
  };

  function uploadImagesandData() {
    const promises = images.map((image) => {
      //encapsulamos nuestro map en la constante promises que guardara el valor del resolve
      return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `/images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setProgress(percent);
          },
          (error) => {
            console.log(error);
            reject(error);
          },
          () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              resolve(downloadURL);
            });
          }
        );
      }); d
    });
    Promise.all(promises).then(async (values) => {
      //imprimimos en consola el valor de las promesas con promise.all
      console.log(values);
      const docRef = await addDoc(collection(database, "products"), {
        //luego de obtener el array de resultados, lo usamos para crear un documento nuevo
        ...form,
        images: values,
        price: Number(form.price),
        stock: Number(form.stock)
      });
      const newDoc = doc(database, "products", docRef.id)
      setDoc(newDoc, {id: docRef.id}, {merge:true})
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImagesandData();
    setForm(initialFormValue)
    setImages([])
  };
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
                <option value="" defaultValue="" >---</option>
                {categories?.map((category) => {
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
              <progress value={progress}></progress>
              <input type="file" multiple onChange={handleFileUpload}></input>
              <button type="submit">Subir datos</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
