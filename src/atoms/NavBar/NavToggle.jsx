import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";



const NavToggle = ({ toggle }) => {
  const [open, setIsOpen] = useState(false)

  return (
    <div className=" self-center md:hidden ">
    <button onClick={()=>(toggle(), setIsOpen(!open))} className={open? "toggle active":"toggle"}>
      <span ></span>
      <span ></span>
      <span ></span>
    </button>
    </div>
  );
};

export default NavToggle;
