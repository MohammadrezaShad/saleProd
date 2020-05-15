import { CustomButtonContainer } from './CustomButton.styled';
import React from "react";
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;