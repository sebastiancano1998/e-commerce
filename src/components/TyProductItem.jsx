import React from "react";
import { Link } from "react-router-dom";
import SeeMoreButton from "../atoms/Buttons/SeeMoreButton";

const TyProductItem = ({ name, image }) => {
  return (
    <div className="text-center flex flex-col gap-5 items-center shadow-sm shadow-slate-500  text-p2 rounded-lg  overflow-hidden sm:last:translate-x-3/5 xl:last:translate-x-0">
      <p className="pt-4 font-semibold tracking-wide">{name}</p>
      <SeeMoreButton></SeeMoreButton>
      <Link to="">
        <img src={image} alt={name} className="w-full"></img>
      </Link>
    </div>
  );
};

export default TyProductItem;
