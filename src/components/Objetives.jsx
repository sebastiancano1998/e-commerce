import React from 'react';
import { TbTruckDelivery } from 'react-icons/Tb';
import { MdOutlineChangeCircle } from 'react-icons/Md';
import { BsCartCheckFill } from 'react-icons/Bs';
import { MdOutlineSystemSecurityUpdateGood } from 'react-icons/Md';
import ObjetiveItem from '../atoms/Objetives/ObjetiveItem';
const Objetives = () => {

  const ObjetivesItem = [
    {id:1, title:"Free shiping", subtitle:"It's not actually free we just price it into the products. Someone's paying for it, and it's not us.", icon: <TbTruckDelivery/>},
    {id:2, title:"10-year warranty", subtitle:"If it breaks in the first 10 years we'll replace it. After that you're on your own though.", icon: <BsCartCheckFill/>},
    {id:3, title:"Exchanges", subtitle:"If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.", icon: <MdOutlineChangeCircle/>},
    {id:4, title:"Mobile Design", subtitle:"If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though", icon: <MdOutlineSystemSecurityUpdateGood/>}

  ]

  return (
    <div className='flex flex-col sm:px-8  pt-12  w-4/5 m-auto p-auto'>
      <p className='self-start text-p1 font-bold text-3xl uppercase'>Why us?</p>
    <div className="py-10 flex flex-col gap-6 items-baseline  sm:grid sm:grid-cols-2 xl:grid-cols-4">
      {ObjetivesItem.map(({id, title, subtitle, icon})=>{
        return (
         <ObjetiveItem key={id} title={title} subtitle={subtitle} icon={icon}></ObjetiveItem>
        )
      })}
    </div>
    </div>
  );
};

export default Objetives;