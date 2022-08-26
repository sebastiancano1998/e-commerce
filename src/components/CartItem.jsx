import React from 'react'

const CartItem = ({data, removeFromCart, incrementCant, decrementCant}) => {
  let {id, name, price, cantidad} = data;
  return (
    <div>
        <p>{name}</p>
        <p>${price}.00</p>
        <p>{cantidad}</p>
        <button onClick={()=> removeFromCart(id)}>Eliminar producto</button>
        <button onClick={()=> incrementCant(1, id)}>Aumentar</button>
        <button onClick={()=> decrementCant(1, id)}>Disminuir</button>
    </div>
  )
}

export default CartItem