import React, { useState, useEffect } from 'react'
import { signInWithGoogle } from './firebase'
import { auth,createUserProfileDocument } from './firebase'

const SignContext=React.createContext()



export const SignStore=(props)=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [currentUser,setCurrentUser]=useState('')

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
    useEffect(()=>{
        auth.onAuthStateChanged(async userAuth=>{
         if(userAuth){
             const userRef=await createUserProfileDocument(userAuth)
             userRef.onSnapshot(snapShot=>{
                 setCurrentUser({
                     id:snapShot.id,
                     ...snapShot.data()
                 })
             })
         }else{
             setCurrentUser(userAuth)
         }
        })
    },[])
 
    return(
        <SignContext.Provider value={{currentUser,email,password,signInWithGoogle,handleSubmit,EchangeHandler,PchangeHandler}}>
            {props.children}
        </SignContext.Provider>
    )
}
export default SignContext