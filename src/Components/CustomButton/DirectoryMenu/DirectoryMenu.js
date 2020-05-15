import React,{useContext} from 'react'
import MenuItem from '../MenuItem/MenuItem'
import ItemContext from '../../Context/ItemContext'
import { DirectoryMenuStyled} from './DirectoryMenu.styled'

const DirectoryMenu=()=>{
    const {items}=useContext(ItemContext)
     const menu=items.map(({id,...otherSectionProps})=>{
        return (<MenuItem key={id} {...otherSectionProps}/>)
    })
    return(
        <DirectoryMenuStyled>
            {menu}
        </DirectoryMenuStyled>
    )
}
export default DirectoryMenu