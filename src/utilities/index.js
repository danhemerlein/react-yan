import { css } from 'styled-components';

export const fullBleed = ({
  top = false,
  right = false,
  bottom = false,
  left = false,
  space
} = {}) => {
  return css`
    ${top && `margin-top: ${space}`};
    ${right && `margin-right: ${space}`};
    ${bottom && `margin-bottom: ${space}`};
    ${left && `margin-left: ${space}`};
  `;
};

export const anchorColor = ({
  color = '#FFF',
  textDecoration = 'none',
  textDecorationHover = 'underline'
} = {}) => {
  return css`
    ${textDecoration && `text-decoration: ${textDecoration}`};
    text-decoration-color: ${color};
    color: ${color};

    &:visited {
      ${textDecoration && `text-decoration: ${textDecoration}`};
      color: ${color};
    }

    &:active {
      ${textDecoration && `text-decoration: ${textDecoration}`};
      color: ${color};
    }

    &:hover {
      ${textDecorationHover && `text-decoration: ${textDecorationHover}`};

      color: ${color};
    }
  `;
};
