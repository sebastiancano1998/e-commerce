import React from "react";
import AdminSideMenu from "../containers/AdminSideMenu";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import { useState } from "react";
import {motion} from "framer-motion"

const Admin = () => {
  const [toggleSide, setToggleSide] = useState(false)
  return (
    <>
    <div className="flex w-full relative top-0 bottom-0 left-0 bg-slate-50">
      <AdminNav setToggle={()=> setToggleSide(!toggleSide)} ></AdminNav> 
      <AdminSideMenu toggle={toggleSide}  />
      <div className="mt-20">
        <Outlet/>
      </div>
    </div>
    </>
  );
};

export default Admin;
