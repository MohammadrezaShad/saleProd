import React,{useContext} from 'react'
import MenuItem from '../MenuItem/MenuItem'
import ItemContext from '../../Context/ItemContext'
import { DirectoryMenuStyled} from './DirectoryMenu.styled'
import { connect } from 'react-redux'
import {directorySelectorSections} from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect'
const DirectoryMenu=({sections})=>{
    
     const menu=sections.map(({id,...otherSectionProps})=>{
        return (<MenuItem key={id} {...otherSectionProps}/>)
    })
    return(
        <DirectoryMenuStyled>
            {menu}
        </DirectoryMenuStyled>
    )
}
const mapStateToProps=createStructuredSelector({
    sections:directorySelectorSections })

export default connect(mapStateToProps)(DirectoryMenu)