import React from "react";

import { useState, useRef } from "react";



const NavToggle = ({ toggle }) => {
  let refMenuBtn = useRef()
  const [open, setIsOpen] = useState(false)
  const handleMenu = () =>{
    toggle()
    setIsOpen(!open)
  }

  return (
    <div ref={refMenuBtn} className=" self-center md:hidden ">
    <button onClick={()=> handleMenu()} className={open? "toggle active":"toggle"}>
      <span ></span>
      <span ></span>
      <span ></span>
    </button>
    </div>
  );
};

export default NavToggle;
