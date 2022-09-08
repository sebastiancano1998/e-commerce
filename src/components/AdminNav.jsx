import React from "react";
import avatar from "../../public/assets/team/diego.jpg"
import toggle from "../../public/assets/icons/icon_menu.svg"

const AdminNav = ({setToggle}) => {
const handleToggle = () =>{
    setToggle()
}


  return (
    <div className="w-full h-20  items-center flex justify-between bg-white fixed top-0 left-0 right-0 shadow-md">
        <img   className="hover:cursor-pointer ml-5" onClick={()=> handleToggle()} src={toggle}></img>
      <div className="flex items-center gap-2 mr-5">
        <div>
          <img src={avatar} className=" w-12 rounded-full"></img>
        </div>
        <p className="flex flex-col">
          <strong>John Doe</strong>
          <span>Admin</span>
        </p>
      </div>
    </div>
  );
};

export default AdminNav;
