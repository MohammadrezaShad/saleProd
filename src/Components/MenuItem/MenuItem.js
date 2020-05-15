import React from 'react'
import { MenuItemStyled,TitleStyled,SubTitleStyled,ContentStyled,BackgroundImage} from './MenuItem.styled'
import { withRouter } from 'react-router-dom'

const MenuItem=({title,imageUrl,size,history,linkUrl,match})=>{
    console.log(match,linkUrl)
    return(
        <MenuItemStyled  size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImage imageUrl={imageUrl}/>
        <ContentStyled>
        <TitleStyled>
            {title.toUpperCase()}
        </TitleStyled>
        <SubTitleStyled>
            SHOP NOW
        </SubTitleStyled>
        </ContentStyled>
        </MenuItemStyled>
    )
}
export default withRouter(MenuItem) 