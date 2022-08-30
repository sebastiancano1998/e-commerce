import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "../types";

export const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let itemInCart = state.cart.find((item) => item.id === action.payload.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart,
          }
        : {
            ...state,
            cart: [...state.cart, { ...action.payload, cantidad: 1 }],
          };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload), //devuelve todos los items que tengan un item.id diferente al de action.payload
      };
    }
    case INCREMENT: {
      return {
        ...state,
        cart: state.cart.map(
          (
            item //se hace un mapeo donde al item con id igual al de action payload se le asignara true mientras que a los que no se les asignara false
          ) =>
            item.id === action.payload[1] // lo que hacemos es mediante una condicional ternaria al item que sea true osea que cumple la condicion se le va a asignar un nuevo valor que es una copia de el mismo pero con la cantidad modificada de acuerdo al action.payload
              ? {
                  //hacemos el mapeo y cuando el item.id coincida con el el action.payload entonces haz una copia de la info de ese item, pero que en su propiedad cantidad le sume el valor que trae el payload
                  ...item,
                  cantidad: item.cantidad + action.payload[0],
                }
              : item // mientras que los items que son false osea q no cumple la condicion se les deja tal y como esta
        ),
      };
    }
    case DECREMENT: {
      let itemToDecrement = state.cart.find(
        (item) => item.id === action.payload[1]
      );

      return itemToDecrement.cantidad > 1
        ? {
            ...state,
            cart: state.cart.map(
              (
                item //se hace un mapeo donde al item con id igual al de action payload se le asignara true mientras que a los que no se les asignara false
              ) =>
                item.id === action.payload[1] // lo que hacemos es mediante una condicional ternaria al item que sea true osea que cumple la condicion se le va a asignar un nuevo valor que es una copia de el mismo pero con la cantidad modificada de acuerdo al action.payload
                  ? { ...item, cantidad: item.cantidad - action.payload[0] } // mientras que los items que son false osea q no cumple la condicion se les deja tal y como esta
                  : item // se le deja a los items q no cumplen tal y como estan
            ),
          }
        : { ...state, cart: state.cart }; // en caso de que la cantidad sea menor que 1 simplemente devolvemos el mismo state sin modificaciones.
    }
    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
}
