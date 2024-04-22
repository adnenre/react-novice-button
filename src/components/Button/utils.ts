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

export const getContrastColor = (hexColor: string) => {
  // Convert hex color to RGB
  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  // Calculate brightness
  const calculateBrightness = (
    color: { r: number; g: number; b: number } | null
  ) => {
    if (!color) {
      return null;
    }
    const { r, g, b } = color;
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  // Get RGB values from hex color
  const rgbColor = hexToRgb(hexColor);

  // Calculate brightness
  const brightness = calculateBrightness(rgbColor);

  // Determine contrast color
  if (brightness !== null) {
    return brightness > 125 ? "#222" : "white";
  } else {
    return null;
  }
};
