import React, {useContext} from 'react'
import { ShopPageStyled } from "./ShopPage.styled";
import  ShopContext  from '../../Context/ShopContext';
import CollectionOverView from '../../Components/CollectionOverView/CollectionOverView';
import { Route } from 'react-router-dom';
import CollectionPage from '../CategoryPage/CollectionPage';

const ShopPage=({match})=>{
    
  return(
   <ShopPageStyled>
     <Route exact path={`${match.path}`} component={CollectionOverView}/>
     <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
   </ShopPageStyled>
  )  
}

export default ShopPage