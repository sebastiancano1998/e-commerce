import React from "react";
import TyProductItem from "../components/TyProductItem";

import useGetCategories from "../hooks/useGetCategories";

const API = "https://api.escuelajs.co/api/v1/categories";

const TypeProducts = () => {
  const categories = useGetCategories(API)[0];
  const loading = useGetCategories(API)[1];
  console.log(categories);
  console.log(loading);
  return (
    <div className="w-3/4 m-auto py-12">
      <p className=" text-center text-p1 font-bold text-3xl uppercase mb-4 ">
        Products
      </p>
      <div className="flex flex-col gap-8 w-4/5 m-auto sm:grid sm:grid-cols-2  py-12 xl:grid-cols-5 xl:w-full">
       {categories.map (({id, name, image})=>{
        return (
            <TyProductItem key={id} name={name} image={image}></TyProductItem>
        )
       })}
       </div>
    </div>
  );
};

export default TypeProducts;
