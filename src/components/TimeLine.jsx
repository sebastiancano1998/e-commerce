import React from "react";
import TimeLineItem from "../atoms/TimeLine/TimeLineItem";
import { FaTshirt } from "react-icons/Fa";
import { RiBillLine } from "react-icons/Ri";
import { BsBoxSeam } from "react-icons/Bs";
import { MdOutlineDeliveryDining } from "react-icons/Md";
import { FaRegHandshake } from "react-icons/Fa";

const Tracking = () => {
  const items = [
    {
      title: "Pedido",
      description: "Se hace el pedido en tienda virtual",
      icon: <FaTshirt />,
    },
    {
      title: "Facturación",
      description: "Se genera la boleta de venta en tienda.",
      icon: <RiBillLine />,
    },
    {
      title: "Emsamblaje",
      description: "Se arma el pedido en los almacenes de Yard Sale.",
      icon: <BsBoxSeam />,
    },
    {
      title: "Courier",
      description:
        "Se entrega el pedido a un servicio de courier para su entrega.",
      icon: <MdOutlineDeliveryDining />,
    },
    {
      title: "Recepción",
      description: "Se recepciona el pedido en domicilio.",
      icon: <FaRegHandshake />,
    },
  ];
  return (
    <div className="bg-white w-full justify-center flex flex-col  lg:flex-row items-center py-16">
      <div className="text-center relative text-p2">
        <div className="flex justify-center gap-2">
        <p className='text-3xl uppercase font-bold sm:text-5xl'>
          Tracking
        </p>
        <span className="w-4 h-4 rounded-full bg-white border-p2 border-2 animate-ping"></span>
        </div>        
        <p className="text-sm px-2 py-4 sm:text-base">
          Track your order wherever you are on any device.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col relative my-10 gap-10 after:bg-p2 after:absolute after:w-0.2 after:h-full after:left-timeline">
        {items.map(({ title, description, icon }, index) => {
          return (
            <TimeLineItem
              key={index}
              title={title}
              description={description}
              icon={icon}
            ></TimeLineItem>
          );
        })}
      </div>
    </div>
  );
};

export default Tracking;
