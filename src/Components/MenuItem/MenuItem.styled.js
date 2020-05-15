import styled, { css } from 'styled-components'

const largeImage=css`
height:380px;
`
const changeSize=(props)=>{
    if(props.size){
        return largeImage
    }
}
export const BackgroundImage=styled.div`
    width:100%;
    height:100%;
    background-image:url(${props=>props.imageUrl});
    background-position:center;
    background-size:cover;
    backface-visibility:hidden;

`
export const ContentStyled=styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color:white;
    opacity:0.7;
    position:absolute;
    
`
export const MenuItemStyled=styled.div`
    min-width:30%;
    height:240px;
    flex:1 1 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid black;
    margin:0 7.5px 15px;
    position: relative;
    overflow:hidden;
    backface-visibility:hidden;
    &:hover{
       cursor: pointer;

       & ${BackgroundImage}{
        transform:scale(1.1);
        transition:transform 6s cubic-bezier(0.25,0.45,0.45,0.95)
       }
       & ${ContentStyled}{
           opacity:0.9;
       }
    }
    ${changeSize}
&:first-child{
    margin-right:7.5px;
}
&:last-child{
    margin-left:7.5px;
}
`
export const TitleStyled=styled.h1`
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
`
export const SubTitleStyled=styled.span`
      font-weight: lighter;
      font-size: 16px;
`
