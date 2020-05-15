import React from 'react'
import { CartItemsStyled, CartDropDownStyled,EmptyMessage } from './CartDropDown.styled'
import CustomButton from '../CustomButton/CustomButton'
import {connect} from 'react-redux'
import CartItem from '../CartItem/CartItem'
import { selectItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { CartActionToggle } from '../../redux/cart/cart.action'

const CartDropDown=({cartItems,history,dispatch})=>{
    
    return(
        <CartDropDownStyled>
            <CartItemsStyled>
                {
                    cartItems.length ?
                cartItems.map(cartItem=>{
                    return <CartItem key={cartItem.id} item={cartItem}/>
                })
                :
                <EmptyMessage >Your Cart Is Empty</EmptyMessage>
                }
            </CartItemsStyled>
            <CustomButton onClick={()=>{history.push('/checkout');dispatch(CartActionToggle())} }>Go To CheckOut</CustomButton>
        </CartDropDownStyled>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:selectItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown)) 