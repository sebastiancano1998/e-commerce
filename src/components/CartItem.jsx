import React from 'react'

const CartItem = ({data, removeFromCart, incrementCant, decrementCant}) => {
  let {id, name, price, image, cantidad} = data;
  return (
    <div className='flex '>
        <div className='w-1/2'>
          <img src={image} alt={name}></img>
        </div>
        <div className='w-1/2'>
        <p>{name}</p>
        <p>${price}.00</p>
        <p>{cantidad}</p>
        <button onClick={()=> removeFromCart(id)}>Eliminar producto</button>
        <button onClick={()=> incrementCant(1, id)}>Aumentar</button>
        <button onClick={()=> decrementCant(1, id)}>Disminuir</button>
        </div>
    </div>
  )
}

export default CartItem