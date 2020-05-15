import React, { PureComponent } from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import {CollectionPreviewStyled, TitleStyled,PreviewStyled } from './CollectionPreview.styled'

const CollectionPreview=({title,items})=>{
    const ItemColect=items.filter((item,idx)=>idx<4).map((item)=>{
        return <CollectionItem key={item.id} item={item}/>
    })
    return(
    <CollectionPreviewStyled>
    <TitleStyled>{title}</TitleStyled>
    <PreviewStyled>
    {ItemColect}
    </PreviewStyled>
    </CollectionPreviewStyled>)
}
export default CollectionPreview