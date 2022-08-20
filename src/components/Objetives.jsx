import React from 'react';
import { TbTruckDelivery } from 'react-icons/Tb';
import { MdOutlineChangeCircle } from 'react-icons/Md';
import { BsCartCheckFill } from 'react-icons/Bs';
import { MdOutlineSystemSecurityUpdateGood } from 'react-icons/Md';
const Objetives = () => {
  return (
    <div className='flex flex-col py-12 w-3/4 m-auto sm:w-4/5 xl:w-4/5'>
    <p className='pt-8 self-start text-p1 font-bold text-3xl uppercase'>Why us?</p>
    <div className="pt-10 flex flex-col gap-6 items-baseline  sm:grid sm:grid-cols-2 xl:grid-cols-4  xl:pb-20">
      <div className="flex flex-col justify-center">
          <TbTruckDelivery className="text-5xl text-p1 xl:text-6xl"></TbTruckDelivery>
          <div className=''>
          <p className="text-p1 font-bold py-2">Free shiping</p>
          <p className="text-p1 text-sm">It's not actually free we just price it into the products.&nbsp;Someone's paying for it, and it's not us.</p>
          </div>
      </div>
      <div className="flex flex-col justify-center">
          <BsCartCheckFill className="text-5xl text-p1 xl:text-6xl"></BsCartCheckFill>
          <div className=''>
          <p className="text-p1 font-bold py-2">10-year warranty</p>
          <p className="text-p1 text-sm">If it breaks in the first 10 years we'll replace it.&nbsp;After that you're on your own though.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <MdOutlineChangeCircle className="text-5xl text-p1 xl:text-6xl"></MdOutlineChangeCircle>
        <div className=''>
        <p className="text-p1 font-bold py-2">Exchanges</p>
        <p className="text-p1 text-sm">If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <MdOutlineSystemSecurityUpdateGood className="text-5xl text-p1 xl:text-6xl"></MdOutlineSystemSecurityUpdateGood>
        <div className=''>
        <p className="text-p1 font-bold py-2">Mobile Design</p>
        <p className="text-p1 text-sm">If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Objetives;