import { ADD_TO_CART, DECREMENT, REMOVE_FROM_CART,CLEAR_CART } from "./actionType";
import { INCREMENT } from "./actionType";
export const AddToCart = (product) => {
  return {
    type:ADD_TO_CART,
    payload:product
  };
};
export const increment=(productId)=>{
  return {
    type:INCREMENT,
    payload:productId
  };
}
export const decrement=(productId)=>{
  return {
    type:DECREMENT,
    payload:productId
  };
}
export const removeFromCart=(productId)=>{
  return {
    type:REMOVE_FROM_CART,
    payload:productId
  };
}
export const clearCart=(productId)=>{
  return {
    type:CLEAR_CART,
  };
}
