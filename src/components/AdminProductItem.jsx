import React from 'react'
import {HiPencilAlt} from "react-icons/Hi"
import {BiTrash} from "react-icons/Bi"
import { deleteDoc, doc } from 'firebase/firestore'
import { database } from '../firebase.config'

const AdminProductItem = ({data, index, update}) => {
    const {name, price, stock, id} = data

  const handleRemove =async (id) => {
    await deleteDoc(doc(database, "products", id))
    update()
  }
  return (
    <tr className='even:bg-slate-100'>
      <td className='py-2 px-4'>{index + 1}</td>
        <td className='py-2 px-4'>{name}</td>
        <td className='py-2 px-4'>S/.{price}</td>
        <td className='py-2 px-4'>{stock}</td>
        <td className='py-2 px-4'>
            <span className='flex gap-2 justify-center'><HiPencilAlt  className=' text-cyan-700' /><BiTrash onClick={()=> handleRemove(id)} className=' text-red-700 cursor-pointer'/></span>
        </td>
    </tr>

  )
}

export default AdminProductItem