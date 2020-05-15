import React, { useState } from 'react'
import { SignInContainer,SignInTitle,ButtonsBarContainer } from './SignIn.styled'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import SignContext from '../../Context/SignContext'
import { auth, signInWithGoogle } from '../../Context/firebase'


const SignIn=()=>{
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleSubmit=async e=>{
      e.preventDefault()
      try {
          await auth.signInWithEmailAndPassword(email,password)
          setPassword('')
          setEmail('')
      }catch(e){
          console.log(e)
      }
  }
  
  const PchangeHandler=(e)=>{
      setPassword(e.target.value)
  }
  const EchangeHandler=(e)=>{
      setEmail(e.target.value)
  }
    return(
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={EchangeHandler}
            value={email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={PchangeHandler}
            label='Password'
            required
          />
        </form>
        <ButtonsBarContainer>
        <CustomButton type='submit'> Sign in </CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '} Sign in With Google {' '}</CustomButton>
        </ButtonsBarContainer>
        </SignInContainer>
    )
}
export default SignIn