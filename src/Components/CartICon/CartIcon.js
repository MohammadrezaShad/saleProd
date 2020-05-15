import React from 'react'
import {ShoppingIconStyled,ItemCountStyled,CartIconContainer} from './CartIcon.styled'
import {CartActionToggle} from '../../redux/cart/cart.action'
import { connect } from 'react-redux'
import { selectCartItemCount } from '../../redux/cart/cart.selectors'
const CartIcon=({CartActionToggle,itemCount})=>{


return(<CartIconContainer onClick={CartActionToggle}>
    <ShoppingIconStyled />
<ItemCountStyled>{itemCount}</ItemCountStyled>
</CartIconContainer>)
}
const mapDispatchToProps=dispatch=>({
    CartActionToggle:()=>dispatch(CartActionToggle())
})
const mapStateToProps=state=>{
    return({
    itemCount:selectCartItemCount(state)
})}
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)