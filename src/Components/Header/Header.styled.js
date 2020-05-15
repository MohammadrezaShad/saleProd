import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderStyled = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  padding:0 80px;
  justify-content: space-between;
  align-items:center;
  margin-bottom: 15px;
`;

export const LogoContainerStyled = styled(Link)`
  height: 100%;
  padding: 25px;
  display:flex;
  align-items:center;
`;

export const OptionsContainerStyled = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLinkStyled = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  
`;