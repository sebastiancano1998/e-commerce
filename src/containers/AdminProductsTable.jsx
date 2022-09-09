import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import AdminProductItem from "../components/AdminProductItem";
import { database } from "../firebase.config";
import useGetAllProducts from "../hooks/useGetAllProducts";

const AdminProductsTable = () => {
    
  const products = useGetAllProducts()[0]
  const isLoading = useGetAllProducts()[1]
  const [myProducts, setMyProducts] = useState([])

  useEffect(() => {
    function setProducts() {
        setMyProducts(products)
    }
    setProducts()
  }, [products]) //ahora que products cambio llama al useEffect de nuevo
  console.log(myProducts)

  const update = (id) =>{
    const updateProducts = products.filter((product)=> product.id !== id)
    setMyProducts(updateProducts)
  } 
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="bg-white rounded-md overflow-hidden text-sm">
            <thead className=" bg-adminside text-white">
              <tr className="text-sm">
                <th className="p-4 uppercase">#</th>
                <th className="p-4 uppercase">Nombre</th>
                <th className="p-4 uppercase">Precio</th>
                <th className="p-4 uppercase">Stock</th>
                <th className="p-4 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map((data, index) => {
                return (
                  <AdminProductItem
                    key={data.id}
                    data={data}
                    index={index}
                    update ={ ()=> update(data.id)} //la eliminacion en la parte del front se ejecutara en el productitem
                  ></AdminProductItem>  //ya que llamara a la funcion que ha sido establecida aqui
                );                      //y tambien hara la eliminacion por parte del back
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default AdminProductsTable;
