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
