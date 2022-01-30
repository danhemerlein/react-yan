import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;

  ${({ justify }) => {
    return justify && `justify-content: ${justify}`;
  }};

  ${({ items }) => {
    return items && `align-items: ${items}`;
  }};

  ${({ direction }) => {
    return direction && `flex-direction: ${direction}`;
  }};

  ${({ wrap }) => {
    return wrap && `flex-wrap: ${wrap}`;
  }};

  ${({ height }) => {
    return height && `height: ${height}`;
  }};

  ${({ width }) => {
    return width && `width: ${width}`;
  }};
`;
