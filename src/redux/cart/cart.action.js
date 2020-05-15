import CartActionTypes from "./cart.action.types";

export const CartActionToggle=()=>({
     type:CartActionTypes.TOGGLE_CART_HIDDEN
})
export const CartActionAdd=(cart)=>({
     type:CartActionTypes.ADD_CART,
     payload:cart
})
export const removeItem = item => ({
     type: CartActionTypes.REMOVE_ITEM,
     payload: item
   });
   
   export const clearItemFromCart = item => ({
     type: CartActionTypes.CLEAR_ITEM_FROM_CART,
     payload: item
   });