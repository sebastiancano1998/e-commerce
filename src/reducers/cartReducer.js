import { ADD_TO_CART, CLEAR_CART, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "../types";

export const initialState = {
  products: [
    { id: 1, name: "Producto1", price: "10" },
    { id: 2, name: "Producto2", price: "20" },
    { id: 3, name: "Producto3", price: "30" },
    { id: 4, name: "Producto4", price: "40" },
    { id: 5, name: "Producto5", price: "50" },
    { id: 6, name: "Producto6", price: "60" },
    { id: 7, name: "Producto7", price: "70" },
    { id: 8, name: "Producto8", price: "80" },
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
        cart: state.cart.filter((item)=> item.id!==action.payload) //devuelve todos los items que tengan un item.id diferente al de action.payload
      };
    }
    case INCREMENT: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload[1]
            ? {
                //hacemos el mapeo y cuando el item.id coincida con el el action.payload entonces haz una copia de la info de ese item, pero que en su propiedad cantidad le sume el valor que trae el payload
                ...item,
                cantidad: item.cantidad + action.payload[0],
              }
            : item
        ), // caso contrario devuelve ese mismo item sin modificaciones
      };
    }
    case DECREMENT: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          (item.id === action.payload[1])
            ? (item.cantidad > 1)
              ? { // para disminuir hacemos una validacion para que solo se pueda disminuir si es que la cantidad es mayor a 1
                  //hacemos el mapeo y cuando el item.id coincida con el el action.payload entonces haz una copia de la info de ese item, pero que en su propiedad cantidad le sume el valor que trae el payload
                  ...item,
                  cantidad: item.cantidad - action.payload[0],
                }
              : item
            : item // caso contrario devuelve ese mismo item sin modificaciones
        ), 
      };
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
