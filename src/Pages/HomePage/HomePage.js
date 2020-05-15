import React from 'react'
import DirectoryMenu from '../../Components/DirectoryMenu/DirectoryMenu'
import {ItemStore} from '../../Context/ItemContext'
import { HomePageStyled } from './HomePage.styled'


const HomePage=()=>{
    return (
        <ItemStore>
        <HomePageStyled>
            <DirectoryMenu/>
         </HomePageStyled>
         </ItemStore>
         )
}
export default HomePage