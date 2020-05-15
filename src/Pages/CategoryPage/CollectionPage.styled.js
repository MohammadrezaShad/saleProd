import styled from "styled-components";

export const CollectionPageStyled=styled.div`
 display: flex;
    flex-direction: column;
`
export const CollectionTitleStyled=styled.h1`
     font-size: 38px;
      margin: 0 auto 30px;
`

  export const ItemsStyled=styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
      & .CollectionItem{
          width:${props=>props.siz ? '100%' :'22%'}
      }
  `


  