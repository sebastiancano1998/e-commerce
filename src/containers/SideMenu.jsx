import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SideMenuItem from "../components/SideMenuItem";

const SideMenu = ({ toggle }) => {
  const Items = [
    { id: 1, name: "Home", path:"/" },
    { id: 2, name: "Store", path:"/Store"},
    { id: 3, name: "Contacto", path:"/Contacto" },
  ];

  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          exit={{ x: "-100%", transition: { duration: 0.2 } }}
          className="fixed w-full h-full text-black bg-white text-center flex justify-center flex-col z-10"
        >
          <ul className="flex flex-col gap-2 text-base ">
            <p className="text-p2 font-medium uppercase underline underline-offset-8 mb-2">
              Servicios
            </p>
            {Items.map(({ id, name, path }) => {
              return <SideMenuItem key={id} keyword={name} path={path}></SideMenuItem>;
            })}
            <br></br>
            <li>
              <a href="" className="hover:text-p2">
                My orders
              </a>
            </li>
            <li>
              <a href="" className="hover:text-p2">
                My account
              </a>
            </li>
            <li>
              <p className="font-medium">sebscandota@gmail.com</p>
            </li>
            <li>
              <a href="" className="text-p2">
                Sign out
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
