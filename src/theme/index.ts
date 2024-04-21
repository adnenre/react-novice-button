import base from "./base";

const $size = {
  xs: "35px",
  sm: "80px",
  md: "100px",
  lg: "150px",
  xl: "180px",
  full: "100%",
};

const theme = {
  width: {
    fitContent: "fit-content",
    ...$size,
  },
  height: {
    ...$size,
  },

  border: {
    thin: "1px solid ",
  },
  radius: {
    flat: "0px",
    "round-xs": "2px",
    "round-sm": "4px",
    round: "10px",
    pill: "50px",
  },
  color: {
    white: "#ffffff",
    primary: "#3a81f7",
    secondary: "#AB47BC",
    info: "#5bc0de",
    success: "#99cc54",
    warning: "#f0ad4e",
    danger: "#d9534f",
    black: "#434A54",
    gray: "#2e3f6b",
    grayLight: "#e4edfe", //'#f3f4f6',
    grayDark: "#94a2bd",
    ...base.colors,
  },
  background: {
    white: "#ffffff",
    default: "#FFF",
    primary: "#3a81f7",
    secondary: "#AB47BC",
    info: "#5bc0de",
    success: "#99cc54",
    warning: "#f0ad4e",
    danger: "#d9534f",
    black: "#434A54",
    gray: "#2e3f6b",
    grayLight: "#e4edfe", //'#f3f4f6',
    grayDark: "#94a2bd",
    transparent: "transparent",
    ...base.colors,
  },

  font$size: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "28px",
    xxl: "32px",
  },
  boxShadow: {
    default: "0 0 8px 2px #e4edfe",
  },
  cursor: {
    notAllowed: "not-allowed",
    default: "pointer",
  },
};

export default theme;
