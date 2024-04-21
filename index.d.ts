/// <reference types="react" />
declare module "react-novice-button" {
  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    $variant: string;
    // You can add more props here if needed
  }
}
