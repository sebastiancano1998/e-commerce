import React from "react";
import {
  MdSpaceDashboard,
  MdProductionQuantityLimits,
  MdInventory,
} from "react-icons/Md";
import { FaUsers, FaTruck } from "react-icons/Fa";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const AdminSideMenu = () => {
  const AdminResources = [
    { id: 1, title: "Dashboard", path:"dashboard", icon: <MdSpaceDashboard /> },
    { id: 2, title: "Productos", path:"productos", icon: <MdProductionQuantityLimits /> },
    { id: 3, title: "+ Agregar productos", path:"addproducts", icon: <MdProductionQuantityLimits /> },
    { id: 4, title: "Usuarios", path:"dashboard", icon: <FaUsers /> },
    { id: 5, title: "Ventas", path:"dashboard", icon: <MdProductionQuantityLimits /> },
    { id: 6, title: "Inventario", path:"dashboard", icon: <MdInventory /> },
    { id: 7, title: "Abastecedores",  path:"dashboard",icon: <FaTruck /> },
  ];

  return (
    <div>
      <div className="fixed top w-80 h-screen top-20 bg-adminside text-white ">
        <div>
          <ul className="w-11/12 mr-0 m-auto flex flex-col gap-4 mt-6">
            {AdminResources.map(({ id, title, icon, path }) => {
              return (
                <li key={id} className="flex w-full self-end">
                  <Link
                    to={path}
                    className="w-full hover:rounded-l-xl  hover:bg-white hover:text-adminside p-2"
                  >
                    <p className="flex items-center gap-2">
                      <span>{icon}</span>
                      <span>{title}</span>
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSideMenu;
