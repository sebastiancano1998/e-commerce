import React from "react";
import { useState } from "react";
import AdminProductItem from "../components/AdminProductItem";
import AdminProductsForm from "../components/AdminProductsForm";
import useGetAllProducts from "../hooks/useGetAllProducts";

const AdminProducts = () => {
  const products = useGetAllProducts()[0];
  const isLoading = useGetAllProducts()[1];
  const [toggleAddProduct, setToggleAddProduct] = useState(false)
  console.log(products);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="flex  flex-col ml-8">
      <div className=" self-center flex flex-col justify-center">
        <p className="text-3xl my-6 font-semibold">Productos</p>
        <table className="bg-white rounded-md overflow-hidden text-sm">
          <thead className=" bg-adminside text-white">
            <tr className="text-sm">
              <th className="py-4 px-8 uppercase">Nombre</th>
              <th className="py-4 px-8 uppercase">Precio</th>
              <th className="py-4 px-8 uppercase">Stock</th>
              <th className="py-4 px-8 uppercase">Categoria</th>
              <th className="py-4 px-8 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((data) => {
              return (
                <AdminProductItem key={data.id} data={data}></AdminProductItem>
              );
            })}
          </tbody>
        </table>
        <button className=" self-end rounded-md p-2 bg-green-600 text-sm text-white mt-4" onClick={()=> setToggleAddProduct(!toggleAddProduct)}>
          + Agregar producto
        </button>
        {toggleAddProduct&& <AdminProductsForm/>}
      </div>
    </div>
  );
};

export default AdminProducts;
