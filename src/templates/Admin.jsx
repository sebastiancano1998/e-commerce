import React from "react";
import AdminSideMenu from "../containers/AdminSideMenu";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import { useState } from "react";
const Admin = () => {
  const [toggleSide, setToggleSide] = useState(false)
  return (
    <>
    <div className="flex w-full relative top-0 bottom-0 left-0 bg-slate-50 overflow-x-hidden">
      <AdminNav setToggle={()=> setToggleSide(!toggleSide)} ></AdminNav> 
      <div className={toggleSide? " fixed translate-x-0 duration-500 ": "fixed -translate-x-80  duration-700"}>
      <AdminSideMenu   />
      </div>
      <div className={toggleSide? "mt-20 translate-x-80 duration-500 ": "mt-20 -translate-x-0  duration-700"}>
        <Outlet/>
      </div>
    </div>
    </>
  );
};

export default Admin;


