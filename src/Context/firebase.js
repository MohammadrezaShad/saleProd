 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
import { useRef } from 'react';
 const config = {
    apiKey: "AIzaSyBNyW5syoif_6acgYM93ZU2WLzaV2D-gkY",
    authDomain: "saleprod-b011b.firebaseapp.com",
    databaseURL: "https://saleprod-b011b.firebaseio.com",
    projectId: "saleprod-b011b",
    storageBucket: "saleprod-b011b.appspot.com",
    messagingSenderId: "1080469509130",
    appId: "1:1080469509130:web:86646a970f053f2c16bbf3"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

export const auth=firebase.auth()
export const firestore=firebase.firestore()
const provider=new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)


    export const createUserProfileDocument=async (userAuth,additionalData)=>{
        if (!userAuth) return
      
        const userRef=firestore.doc(`/users/${userAuth.uid}`)
        const snapShop= await userRef.get()
      
        if(!snapShop.exists){
              const {displayName,email}=userAuth
              const createdAt= new Date()
      
              try{
                await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
                })
              } catch (e){
                console.log('error creating user',e.message)
              }
        }
        return userRef
      }



export default firebase