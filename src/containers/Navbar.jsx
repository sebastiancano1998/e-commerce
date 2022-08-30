import React from 'react';
import Logo from '../../public/assets/logos/logo_yard_sale.svg'; 
import SideMenu from "./SideMenu";
import { useState } from 'react';
import Cart from "../../public/assets/icons/icon_shopping_cart.svg"
import NavToggle from '../atoms/Toggles/NavToggle';
import LoginButton from '../atoms/Buttons/LoginButton';
import { Link } from 'react-router-dom';
import MyCart from './MyCart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const state = useSelector((state) => state);
  const {cart} = state.cart
 console.log(toggleCart)
 // pasamos la funcion en la prop toggle de cartlist y en navtoggle para que en cada componente se pueda llamar de nuevo a la funcion y cambiar el valor del estado de cada uno
 // de esta forma podemos controlar el estado de una variable tanto en el hijo como en el padre
  return (
    <div className="w-full flex fixed z-10 bg-white justify-between h-20 border-slate-300  text-lpink text-sm ">
      <NavToggle toggle={()=> setToggleMenu(!toggleMenu)}></NavToggle>
      <SideMenu toggle={toggleMenu}></SideMenu> 
      <MyCart toggle={()=> setToggleCart(false)} toggleValue={toggleCart}></MyCart>
      <div className="self-center hover:cursor-pointer md:ml-4">
        <img src={Logo} ></img>
      </div>
      <div className="hidden self-center gap-3 md:flex text-sm">
        <ul className="text-lpink flex gap-3 items-center text-p5 ">
          <li className=" text-p1 rounded border border-p1 p-1">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-p1">
            <Link to="/store">Store</Link>
          </li>
          <li className="hover:text-p1">
            <Link to="/">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className="flex max-w-150 items-center pl-4 gap-2">
        <div className='hidden md:block w-20'>
        <LoginButton ></LoginButton>
        </div>
        <div className="mr-4 hover:cursor-pointer">
          <img src={Cart} alt="cart-logo" className='w-full hover:cursor-pointer' onClick={()=> setToggleCart(!toggleCart)} ></img>
          {cart.length > 0? <div className='text-xs h-4 w-4 rounded-full bg-p2 text-center text-white absolute top-5 mr-2 right-0'>{cart.length}</div>:null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;