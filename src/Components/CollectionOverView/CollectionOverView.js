import React from 'react'
import {CollectionOverViewStyled } from './CollectionOverView.styled'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { shopSelectorCollection, CollectionObjToArry } from '../../redux/shop/shop.selector'
const CollectionOverView=({collection})=>{
    const CollectionP=collection.map(({id,...otherCollectionProps})=>{
        return <CollectionPreview key={id} {...otherCollectionProps}/>
    })
    
    return(
    <CollectionOverViewStyled>
         {CollectionP}
    </CollectionOverViewStyled>)
}
const mapStateToProps=createStructuredSelector({
    collection:CollectionObjToArry
  })
export default connect(mapStateToProps)(CollectionOverView)