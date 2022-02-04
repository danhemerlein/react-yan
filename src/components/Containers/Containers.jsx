import styled from 'styled-components';

export const RelativeContainer = styled.div`
  position: relative;

  ${({ height }) => {
    return height && `height: ${height}`;
  }};
`;

export const AbsoluteContainer = styled.div`
  position: absolute;

  ${({ top }) => {
    return top && `top: ${top}`;
  }};

  ${({ right }) => {
    return right && `right: ${right}`;
  }};

  ${({ bottom }) => {
    return bottom && `bottom: ${bottom}`;
  }};

  ${({ left }) => {
    return left && `left: ${left}`;
  }};
`;
