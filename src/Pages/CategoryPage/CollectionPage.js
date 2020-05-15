import React from 'react'
import { CollectionPageStyled,CollectionTitleStyled,ItemsStyled,CatCollectionItemStyled } from './CollectionPage.styled'
import {connect} from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../Components/CollectionItem/CollectionItem'
const CollectionPage=({collection})=>{
  const  {title,items}=collection
  const collectionI=items.map(item=>(
      <CollectionItem key={item.id} item={item}/>
  ))
    return(
       <CollectionPageStyled>
        <CollectionTitleStyled>{title}</CollectionTitleStyled>
        <ItemsStyled>
            {collectionI}
        </ItemsStyled>
        </CollectionPageStyled>
    )
}
const mapStateToPros=(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToPros)(CollectionPage)