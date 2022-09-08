import React from "react";
import { useState } from "react";
import AdminProductItem from "../components/AdminProductItem";
import AdminProductsForm from "../components/AdminProductsForm";
import useGetAllProducts from "../hooks/useGetAllProducts";

const AdminProducts = () => {
  const products = useGetAllProducts()[0];
  const isLoading = useGetAllProducts()[1];
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
              <th className="p-4 uppercase">Nombre</th>
              <th className="p-4 uppercase">Precio</th>
              <th className="p-4 uppercase">Stock</th>
              <th className="p-4 uppercase">Acciones</th>
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
        <div>
          <p className="text-3xl my-6 font-semibold">Agregar un producto</p>
          <AdminProductsForm/>
        </div>
        
      </div>
    </div>
  );
};

export default AdminProducts;
