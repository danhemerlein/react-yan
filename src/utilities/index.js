import { css } from 'styled-components';

export const fullBleed = ({
  top = false,
  right = false,
  bottom = false,
  left = false,
  space = '1.6rem'
} = {}) => {
  return css`
    ${top && `margin-top: ${space}`};
    ${right && `margin-right: ${space}`};
    ${bottom && `margin-bottom: ${space}`};
    ${left && `margin-left: ${space}`};
  `;
};

export const anchorColor = ({
  color = '#000',
  textDecoration = 'underline',
  textDecorationHover = 'underline'
} = {}) => {
  return css`
    ${textDecoration &&
    color &&
    textDecorationHover &&
    `
      color: ${color};
      text-decoration-color: ${color};
      text-decoration: ${textDecoration};

      &:visited {
        text-decoration: ${textDecoration};
        color: ${color};
      }

      &:active {
        text-decoration: ${textDecoration};
        color: ${color};
      }

      &:hover {
        text-decoration: ${textDecorationHover};
        color: ${color};
      }
    `};
  `;
};
