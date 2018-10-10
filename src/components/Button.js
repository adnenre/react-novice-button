
import styled from 'styled-components'
import color from './utility'
const borderRadius = {
  pill: '20px',
  rounded: '4px',
  default: '0px'
}
const border = 'solid 1px '
const Button = styled.button`
  z-index: 0;
  display: ${({ fullwidth }) => (fullwidth ? 'block' : 'inline')};
  width: ${props => (props.fullwidth ? '100%' : 'initial')};
  padding: 0.5em 1rem;
  margin: 0.5rem;
  outline: none;
  overflow:hidden;
  position: relative;
  border: ${({ primary, info, danger, warning, success, black }) => {
    if (primary) return border + color.primary
    if (info) return border + color.info
    if (danger) return border + color.danger
    if (warning) return border + color.warning
    if (success) return border + color.success
    if (black) return border + color.black
    return border + color.default
  }};

  cursor: pointer;
  color: ${({ outline, primary, info, danger, warning, success, black }) => {
    if ((primary || info || danger || warning || success || black) && !outline) return color.default
    if (outline) {
      if (primary) return color.primary
      if (info) return color.info
      if (danger) return color.danger
      if (warning) return color.warning
      if (success) return color.success
      if (black) return color.black
    }
    return color.black
  }};
  
  background: ${({ outline, primary, info, danger, warning, success, black }) => {
    if (!outline) {
      if (primary) return color.primary
      if (info) return color.info
      if (danger) return color.danger
      if (warning) return color.warning
      if (success) return color.success
      if (black) return color.black
    }

    return color.default
  }};
  border-radius:${({pill, rounded}) => {
    if (pill) return borderRadius.pill
    if (rounded) return borderRadius.rounded
    return borderRadius.default
  }};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
    background: ${({ outline, primary, info, danger, warning, success, black }) => {
    if (outline) {
      if (primary) return color.primary
      if (info) return color.info
      if (danger) return color.danger
      if (warning) return color.warning
      if (success) return color.success
      if (black) return color.black
    }
    return color.default
  }};
    z-index: -1;
    transition: 0.2s;
    border-radius:${({pill, rounded}) => {
    if (pill) return borderRadius.pill
    if (rounded) return borderRadius.rounded
    return borderRadius.default
  }};

  }
  &:hover {
    color: ${({ outline, primary, info, danger, warning, success, black }) => {
    if (!outline) {
      if (primary) return color.primary
      if (info) return color.info
      if (danger) return color.danger
      if (warning) return color.warning
      if (success) return color.success
      if (black) return color.black
    }
    return color.default
  }};
    &:hover::before {
      width: 100%;
    }
  }
`

export default Button
