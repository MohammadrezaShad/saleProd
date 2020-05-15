import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';

export const CustomButtonCollection=styled(CustomButton)`
width:80%;
opacity:0.7;
position:absolute;
top:255px;
display:none;
`
export const ImageStyled=styled.div`
      width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;
      background-image:url(${props=>props.imageUrl});
`

export const CollectionItemStyled=styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    height: 350px;
    margin:0 10px;
    align-items: center;
    position: relative;
    &:hover{
          ${ImageStyled}{
                opacity:0.8
          }
          ${CustomButtonCollection}{
                display:flex;
                opacity:0.85;
          }
    }
`

export const CollectionFooterStyled=styled.div`
     width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
`
  
export const NameStyled=styled.span`
        width: 90%;
        margin-bottom: 15px;
`
export const PriceStyled=styled.span`
            width: 10%;
`
 
        

  
      
  