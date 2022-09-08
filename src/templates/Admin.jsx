import React from "react";
import AdminSideMenu from "../containers/AdminSideMenu";
import { Outlet } from "react-router-dom";

const Admin = () => {

  return (
    <>
    <div className="flex w-full relative top-0 bottom-0 left-0 bg-slate-50">
      <AdminSideMenu/>
      <Outlet/>
    </div>
    </>
  );
};

export default Admin;
