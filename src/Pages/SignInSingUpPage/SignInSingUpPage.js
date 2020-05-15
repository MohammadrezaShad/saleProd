import React from 'react'
import { SignInSingUpStyled } from './SignInSingUpPage.styled'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'


const SignInSingUpPage=()=>{
    return (
        <SignInSingUpStyled>
         <SignIn/>
         <SignUp/>
        </SignInSingUpStyled>
    )
}
export default SignInSingUpPage