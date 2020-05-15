import React,{useContext} from 'react';


import { SignUpContainer, SignUpTitle } from './SignUp.styled';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import SignUpContext from '../../Context/SignUpContext';


const SignUp=()=>{
    const {email,password,displayName,confirmPassword,submitHandler,PchangeHandler,EchangeHandler,CPchangeHandler,DchangeHandler}=useContext(SignUpContext)
    return (
        <SignUpContainer>
          <SignUpTitle>I do not have a account</SignUpTitle>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={submitHandler}>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={DchangeHandler}
              label='Display Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={EchangeHandler}
              label='Email'
              required
            />
            <FormInput
              type='password'
              name='password'
              value={password}
              onChange={PchangeHandler}
              label='Password'
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={CPchangeHandler}
              label='Confirm Password'
              required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </form>
        </SignUpContainer>
      );
}

export default SignUp;