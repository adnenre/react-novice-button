import theme from "../../theme";
import styled from "styled-components";
import { setDarkness, setTranspancy } from "./utils";

export type Button$variant = keyof typeof theme.background;
export type Button$size = keyof typeof theme.font$size;

export type Button$shape = keyof typeof theme.radius;
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: Button$variant;
  $size?: Button$size;
  $shape?: Button$shape;
}
// Define a styled button component
const SButton = styled.button<ButtonProps>`
  /* Add your button styles here */
  outline: none !important;
  border: solid 2px transparent;
  padding: 8px 16px;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  &:hover {
    outline: none;
    border-color: transparent;
  }
  ${({ $variant }) => {
    if ($variant && theme.background[$variant]) {
      return `background-color: ${theme.background[$variant]}; 
      color:${theme.color.white};
      &:hover{
        background: ${setDarkness(theme.background[$variant], 0.1)};
        outline:none;
      }
        &:focus{
        background: ${setTranspancy(theme.background[$variant], 0.8)};
        outline:none;
      }
      `;
    }
  }}
  ${({ $shape }) => {
    if ($shape && theme.radius[$shape])
      return `border-radius: ${theme.radius[$shape]}; `;
  }}

  ${({ $size }) => {
    if ($size && theme.font$size[$size])
      return `font-size: ${theme.font$size[$size]}; `;
  }}
`;

export default SButton;
