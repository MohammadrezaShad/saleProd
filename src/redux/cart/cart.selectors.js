import { createSelector } from 'reselect'

const selectCart=state=>state.cartToggle

export const selectItems=createSelector(
    [selectCart],
    cart=>cart.cartItems
)
export const selectHidden=createSelector(
    [selectCart],
    cart=>cart.hidden
)
export const selectCartItemCount=createSelector(
    [selectItems],
    cartItems=>cartItems.reduce(((acc,cartItem)=>acc+cartItem.quantity),0)
)
export const selectTotal=createSelector(
    [selectItems],
    cartItems=>cartItems.reduce(((acc,cartItem)=>acc+cartItem.price*cartItem.quantity),0)
)