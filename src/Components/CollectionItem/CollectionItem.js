import React from 'react'
import {CollectionItemStyled,CollectionFooterStyled,ImageStyled,NameStyled,PriceStyled,CustomButtonCollection} from './CollectionItem.styled'
import {connect} from 'react-redux'
import { CartActionAdd } from '../../redux/cart/cart.action'
const CollectionItem=({item,CartActionAdd})=>{
    const {id,price,imageUrl,name}=item
    return(
        <CollectionItemStyled >
        <ImageStyled imageUrl={imageUrl}/>
        <CollectionFooterStyled>
        <NameStyled>{name}</NameStyled>
        <PriceStyled>{price}</PriceStyled>
        </CollectionFooterStyled>
        <CustomButtonCollection inverted onClick={()=>CartActionAdd(item)}>Add To Cart</CustomButtonCollection>
        </CollectionItemStyled>
    )
    
}
const mapDispatchToProps=dispatch=>({
    CartActionAdd:item=>dispatch(CartActionAdd(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem)