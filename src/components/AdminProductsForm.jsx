import React from "react";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { database, storage } from "../firebase.config";
import useGetAllCategories from "../hooks/useGetAllCategories";
import { IoIosCloseCircle } from "react-icons/Io";

const AdminProductsForm = () => {
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
      });
      d;
    });
    Promise.all(promises).then(async (values) => {
      //imprimimos en consola el valor de las promesas con promise.all
      console.log(values);
      const docRef = await addDoc(collection(database, "products"), {
        //luego de obtener el array de resultados, lo usamos para crear un documento nuevo
        ...form,
        images: values,
        price: Number(form.price),
        stock: Number(form.stock),
      });
      const newDoc = doc(database, "products", docRef.id);
      setDoc(newDoc, { id: docRef.id }, { merge: true });
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImagesandData();
    setForm(initialFormValue);
    setImages([]);
  };

  const removeImage = (name) => {
    const resta = images.filter((image) => image.name !== name);
    setImages(resta);
  };
  console.log(images);
  //<progress className="self-center" value={progress}></progress>
  return (
    <div className="p-4 mt-6 w-full self-center rounded-xl bg-white border  h-max  text-adminside">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="name" >Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product name"
            className=" focus:border-b-2 focus:border-b-adminside h-8   w-full  outline-none"
          ></input>
          <label htmlFor="description">Descripcion</label>
          <input
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border rounded-md h-20 p-2 w-full  "
          ></input>
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-28"
          ></input>
          
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-28"
          ></input>
           <label htmlFor="category">Categoria</label>
          <select name="category" id="category" onChange={handleSelect}>
            <option value="" defaultValue="">
              ---
            </option>
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
          <div className="flex justify-between">
          <p>Subir imagenes</p>
          <label
            htmlFor="file"
            id="file-label"
            className="bg-adminside text-sm self-center flex items-center justify-center text-center hover:cursor-pointer text-white rounded-lg w-36 h-8"
          >
            Cargar Imagenes
          </label>
          <input
            id="file"
            name="file"
            type="file"
            className="hidden"
            multiple
            onChange={handleFileUpload}
          ></input>
          </div>
          {images.length > 0 ? (
            <div className="my-8">
              <div className="flex justify-between mb-2">
                <strong>Nombre</strong>
                <strong>Size</strong>
                <strong>Accion</strong>
              </div>
              <div className="overflow-y-scroll max-h-100 mb-2 flex flex-col gap-1">
                {images.map((data, index) => {
                  return (
                    <div key={index} className="flex justify-between">
                      <p>{data.name}</p>
                      <p>{(data.size / 1048576).toFixed(2)}MB</p>
                      <span onClick={() => removeImage(data.name)}>
                        <IoIosCloseCircle className=" text-red-800 hover:cursor-pointer" />{" "}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between">
                <strong>Total</strong>
                <strong className="mr-5">{images.length}</strong>
              </div>
            </div>
          ) : (
            <p className="my-8 text-center">No hay imagenes seleccionadas aún.</p>
          )}

          <button
            type="submit"
            className="p-2 w-full bg-adminside text-sm text-white rounded-lg self-center"
          >
            Subir datos
          </button>
        </form>
      </div>
  );
};

export default AdminProductsForm;
