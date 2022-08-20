import React from 'react';

const SideMenu = () => {
  return (
    <div className="fixed w-full h-full text-black bg-white text-center flex justify-center flex-col z-10">
      <ul className="flex flex-col gap-2 text-base ">
        <p className="text-hgreen font-medium uppercase underline underline-offset-8 mb-2">Servicios</p>
        <li>
          <a href="" className="hover:text-hgreen">
            Home
          </a>
        </li>
        <li>
          <a href="" className="hover:text-hgreen">
            Store
          </a>
        </li>
        <li>
          <a href="" className="hover:text-hgreen">
            Contacto
          </a>
        </li>
        <br></br>
        <li>
          <a href="" className="hover:text-hgreen">
            My orders
          </a>
        </li>
        <li>
          <a href="" className="hover:text-hgreen">
            My account
          </a>
        </li>
        <li>
          <p className="font-medium">sebscandota@gmail.com</p>
        </li>
        <li>
          <a href="" className="text-hgreen">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;