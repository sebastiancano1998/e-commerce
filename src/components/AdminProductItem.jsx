import React from 'react'
import {HiPencilAlt} from "react-icons/Hi"
import {BiTrash} from "react-icons/Bi"

const AdminProductItem = ({data}) => {
    const {name, price, stock} = data
  return (
    <tr className='even:bg-slate-100'>
        <td className='py-2 px-4'>{name}</td>
        <td className='py-2 px-4'>S/.{price}</td>
        <td className='py-2 px-4'>{stock}</td>
        <td className='py-2 px-4'>
            <span className='flex gap-2 justify-center'><HiPencilAlt className=' text-cyan-700' /><BiTrash className=' text-red-700'/></span>
        </td>
    </tr>

  )
}

export default AdminProductItem