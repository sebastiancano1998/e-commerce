import React from 'react'

const ProductItem = ({data, addToCart}) => {


    let {id, name, price} = data;
  return (
    <div className='p-4 border-2 border-p5'>
     <p>{name}</p>
     <p>${price}.00</p>
    <button onClick={()=> addToCart(id)}>Agregar</button>
    </div>
  )
}

export default ProductItem