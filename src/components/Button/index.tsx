import React from "react";

import SButton, { ButtonProps } from "./button.styled"; // Assuming SButton is in a separate file

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const { children, ...rest } = props;
  return <SButton {...rest}>{children}</SButton>;
};

export default Button;
