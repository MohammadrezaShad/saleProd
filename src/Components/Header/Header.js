import React, { PureComponent, useContext } from 'react'
import { HeaderStyled, LogoContainerStyled, OptionsContainerStyled ,OptionLinkStyled} from './Header.styled'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import SignContext from '../../Context/SignContext';
import { auth } from '../../Context/firebase';
import { connect } from 'react-redux';
import CartIcon from '../CartICon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import {selectCurrentUser} from '../../redux/user/cart.selectors'
import { selectHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
const Header=({currentUser,Toggle})=>{
  console.log(currentUser)
    return(
    <HeaderStyled>
        <LogoContainerStyled to="/">
            <Logo className="logo" />
        </LogoContainerStyled>
            <OptionsContainerStyled>
                <OptionLinkStyled to="/shop">Shop</OptionLinkStyled>
                <OptionLinkStyled to="/shop">Contact</OptionLinkStyled>
                {currentUser ?    <OptionLinkStyled as='div' onClick={()=>auth.signOut()}>SignOut</OptionLinkStyled>
                                  :<OptionLinkStyled to="/signin">SignIn</OptionLinkStyled>
                }
                <CartIcon/>
            </OptionsContainerStyled>
            {Toggle ? null:<CartDropDown/>}
    </HeaderStyled>
    )

}
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    Toggle:selectHidden
   })
export default connect(mapStateToProps)(Header)