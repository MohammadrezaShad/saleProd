import styled,{createGlobalStyle} from 'styled-components'



export const AppStyled=styled.div`
 
`
const GlobalStyle = createGlobalStyle`
  *{
   box-sizing:border-box;
   }
  body {
     font-family:'Open Sans Condensed';
     padding:20px 80px;
  }
  a{
    text-decoration:none;
    color:black;
  }
`
export default GlobalStyle
