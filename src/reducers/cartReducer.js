import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "../types";

export const initialState = {
  products: [
    { id: 1, name: "Producto1", price: "10", image:"assets/products/keyboard.jpg" },
    { id: 2, name: "Producto2", price: "20", image:"assets/products/keyboard.jpg" },
    { id: 3, name: "Producto3", price: "30", image:"assets/products/keyboard.jpg" },
    { id: 4, name: "Producto4", price: "40", image:"assets/products/keyboard.jpg" },
    { id: 5, name: "Producto5", price: "50", image:"assets/products/keyboard.jpg" },
    { id: 6, name: "Producto6", price: "60", image:"assets/products/keyboard.jpg" },
    { id: 7, name: "Producto7", price: "70", image:"assets/products/keyboard.jpg" },
    { id: 8, name: "Producto8", price: "80", image:"assets/products/keyboard.jpg" },
  ],
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      console.log(state.cart);
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart,
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, cantidad: 1 }],
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
