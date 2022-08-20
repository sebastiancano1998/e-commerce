import React from 'react';
import Logo from '../../public/assets/logos/logo_yard_sale.svg'; 
import Menu from '../../public/assets/icons/icon_menu.svg';
import SideMenu from "../components/SideMenu";
import { useState } from 'react';
import Cart from "../../public/assets/icons/icon_shopping_cart.svg"
import LoginButton from '../atoms/Buttons/LoginButton';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="w-full flex fixed z-10 bg-white justify-between h-20 border-slate-300  text-lpink text-sm ">
      <div className="md:hidden self-center ml-4">
        <img className="absolute z-50 hover:cursor-pointer translate-y-7 top-0" src={Menu} onClick={() => setToggleMenu(!toggleMenu)}></img>
      </div>
      {toggleMenu && <SideMenu></SideMenu>}
      <div className="self-center ml-12 hover:cursor-pointer">
        <img src={Logo} ></img>
      </div>
      <div className="hidden self-center gap-3 md:flex text-sm">
        <ul className="text-lpink flex gap-3 items-center ">
          <li className=" text-p1 rounded border border-p1 p-1">
            <a href="">Home</a>
          </li>
          <li className="hover:text-p1">
            <a href="">Store</a>
          </li>
          <li className="hover:text-p1">
            <a href="">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center pl-4 gap-2">
        <button className="hidden md:block hover:cursor-pointer text-white rounded border border-p2 p-1 bg-p2 w-20 hover:bg-white hover:text-p2">Log in</button>
        <div className="self-center mr-4 hover:cursor-pointer ">
          <img src={Cart}></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;