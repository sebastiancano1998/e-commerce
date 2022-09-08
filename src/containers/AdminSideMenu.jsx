import React from "react";
import Logo from "../../public/assets/logos/logo_yard_sale.svg";
import {
  MdSpaceDashboard,
  MdProductionQuantityLimits,
  MdInventory,
} from "react-icons/Md";
import { FaUsers, FaTruck } from "react-icons/Fa";
import { Link } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion"

const AdminSideMenu = ({ toggle }) => {
  const AdminResources = [
    { id: 1, title: "Dashboard", icon: <MdSpaceDashboard /> },
    { id: 2, title: "Productos", icon: <MdProductionQuantityLimits /> },
    { id: 3, title: "Usuarios", icon: <FaUsers /> },
    { id: 4, title: "Ventas", icon: <MdProductionQuantityLimits /> },
    { id: 5, title: "Inventario", icon: <MdInventory /> },
    { id: 6, title: "Abastecedores", icon: <FaTruck /> },
  ];

  return (
    <div>
      <AnimatePresence>
      {toggle && (
        <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4 }}
        exit={{ x: "-100%" }} className=" fixed top w-80 h-screen top-20 bg-adminside text-white ">

          <div>
            <ul className="w-11/12 mr-0 m-auto flex flex-col gap-4 mt-6">
              {AdminResources.map(({ id, title, icon }) => {
                return (
                  <li key={id} className="flex w-full self-end">
                    <Link to={title.toLocaleLowerCase()} className="w-full hover:rounded-l-xl  hover:bg-white hover:text-adminside p-2">
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
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default AdminSideMenu;
