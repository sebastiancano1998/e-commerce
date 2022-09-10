import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import AdminProductItem from "../components/AdminProductItem";
import { database } from "../firebase.config";
import useGetAllProducts from "../hooks/useGetAllProducts";

const AdminProductsTable = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function getAllProducts() {
      const querySnapshot = await getDocs(collection(database, "products"));
      querySnapshot.forEach((doc) => {
        setProducts((prev) => {
          return [...prev, doc.data()];
        });
      });
      setIsLoading(false);
    }
    getAllProducts();
  }, []);

  console.log(products)
  const update = (id) =>{
    const updateProducts = products.filter((product)=> product.id !== id)
    setProducts(updateProducts)
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
              {products.map((data, index) => {
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
