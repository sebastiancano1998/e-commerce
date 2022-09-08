import React from 'react'
import Logo from "../../public/assets/logos/logo_yard_sale.svg";
import {MdSpaceDashboard, MdProductionQuantityLimits, MdInventory, MdArrowForwardIos} from "react-icons/Md"
import {FaUsers, FaTruck} from "react-icons/Fa"
import {Link} from "react-router-dom"


const AdminSideMenu = () => {

  const AdminResources = [
    {id:1, title: "Dashboard", icon:<MdSpaceDashboard/>},
    {id:2, title: "Productos", icon:<MdProductionQuantityLimits/>},
    {id:3, title: "Usuarios", icon:<FaUsers/>},
    {id:4, title: "Ventas", icon:<MdProductionQuantityLimits/> },
    {id:5, title: "Inventario", icon:<MdInventory/>},
    {id:6, title: "Abastecedores", icon:<FaTruck/>}
  ]


  return (
    <div className='w-80 h-screen bg-adminside text-white '>
        <div className='flex justify-center my-8'>
            <img src={Logo} alt="logo" className='w-52'></img>
        </div>
        <div>
            <ul className='w-11/12 m-auto flex flex-col gap-4'>
                {AdminResources.map((({id, title, icon})=>{
                    return (
                        <li key={id} className="flex justify-between items-center">
                           <p className='flex items-center gap-2'>
                             <span>{icon}</span>
                             <span>{title}</span>
                           </p>
                           <Link to={title.toLocaleLowerCase()}>
                           <MdArrowForwardIos className='w-3' />
                           </Link>
                        </li>
                    )
                }))}
            </ul>
        </div>
    </div>
  )
}

export default AdminSideMenu