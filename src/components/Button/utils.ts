import { css } from "styled-components";
import theme from "../../theme";

export const setTranspancy = (
  hexColor: string,
  transparancyAmmount: number
): string => {
  // Ensure the transparancyAmmount value is between 0 and 1

  // Remove any leading '#' from the HEX color
  hexColor = hexColor.replace(/^#/, "");

  // Parse the HEX color into RGB components
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  // Create the RGBA color with the specified transparancyAmmount
  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${transparancyAmmount})`;

  return rgbaColor;
};

export const setDarkness = (
  hexColor: string,
  darknessAmount: number
): string => {
  // Remove any leading '#' from the HEX color
  const trimmedHexColor = hexColor.replace(/^#/, "");

  // Parse the HEX color into RGB components
  let r = parseInt(trimmedHexColor.slice(0, 2), 16);
  let g = parseInt(trimmedHexColor.slice(2, 4), 16);
  let b = parseInt(trimmedHexColor.slice(4, 6), 16);

  // Convert darkness percentage to an amount to subtract from RGB components
  const darknessValue = Math.round(255 * darknessAmount);

  // Adjust darkness of the color
  r = Math.max(0, r - darknessValue);
  g = Math.max(0, g - darknessValue);
  b = Math.max(0, b - darknessValue);

  // Convert the adjusted RGB components back to HEX format
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};
