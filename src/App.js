import React,{Fragment,useEffect} from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import GlobalStyle,{AppStyled} from './App.styled'
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage';
import { ShopStore } from './Context/ShopContext';
import Header from './Components/Header/Header';
import SignInSingUpPage from './Pages/SignInSingUpPage/SignInSingUpPage';
import { SignStore } from './Context/SignContext';
import { SignUpStore } from './Context/SignUpContext';
import { connect } from 'react-redux';
import {setCurrentUser}from './redux/user/user.action'
import { auth,createUserProfileDocument } from './Context/firebase';
import { selectCurrentUser } from './redux/user/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckOut from './Components/CheckOut/CheckOut';
const App=({setCurrentUser,currentUser})=>{
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
    <Fragment>
      <SignUpStore>
      <Header/>
      <GlobalStyle/>
    <AppStyled>
      <ShopStore>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route   path='/shop' component={ShopPage} />
      <Route  exact path='/signin' render={()=>currentUser ? <Redirect to='/'/>:<SignInSingUpPage/>}/>
      <Route exact path='/checkout' component={CheckOut} />

      </Switch>
      </ShopStore>
    </AppStyled>
    </SignUpStore>
    </Fragment>
  )
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
