import React, { useState } from 'react'
import { auth, createUserProfileDocument } from './firebase'

const SignUpContext=React.createContext()

export const SignUpStore=(props)=>{
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [displayName,setDisplayName]=useState('')

const PchangeHandler=(e)=>{
    setPassword(e.target.value)
}
const EchangeHandler=(e)=>{
    setEmail(e.target.value)
}
const CPchangeHandler=(e)=>{
    setConfirmPassword(e.target.value)
}
const DchangeHandler=(e)=>{
    setDisplayName(e.target.value)
}
    const submitHandler=async e=>{
        e.preventDefault()
        if(password !== confirmPassword){
            alert('Dont Match')
            return
        }
        try{
         const {user}=await auth.createUserWithEmailAndPassword(email,password)
          await  createUserProfileDocument(user,{displayName})
         setDisplayName('')
         setPassword('')
         setEmail('')
         setConfirmPassword('')
        }catch(e){
            console.log(e)
        }
    }
   
      return(
          <SignUpContext.Provider value={{email,password,displayName,confirmPassword,submitHandler,PchangeHandler,EchangeHandler,CPchangeHandler,DchangeHandler}}>
              {props.children}
          </SignUpContext.Provider>
      )
}
export default SignUpContext