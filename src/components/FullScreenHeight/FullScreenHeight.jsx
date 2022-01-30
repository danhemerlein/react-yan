import { use100vh } from 'react-div-100vh';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import config from '../../config';

const BREAKPOINT = config.breakpoints;

const Container = styled.div`
  height: 100%;
  display: flex;

  ${({ height }) => {
    return height && `height: ${height};`;
  }}

  ${({ justify }) => {
    return justify && `justify-content: ${justify};`;
  }}
  ${({ items }) => {
    return items && `align-items: ${items};`;
  }}

  ${({ direction }) => {
    return direction && `flex-direction: ${direction};`;
  }}
`;

export const FullScreenHeight = ({
  children,
  unsetBreakpoint,
  justify,
  items,
  direction
}) => {
  const PADDING = 32;
  const HEADER_HEIGHT = 28;
  const FOOTER_HEIGHT = 22;

  const offset = PADDING + HEADER_HEIGHT + FOOTER_HEIGHT;
  const height = use100vh();

  let breakpoint;

  const mediaQuery = useMediaQuery({
    query: `(min-width: ${BREAKPOINT[unsetBreakpoint]})`
  });

  if (unsetBreakpoint !== 'none') {
    breakpoint = mediaQuery;
  } else {
    breakpoint = 'none';
  }

  const generateHeight = (mediaQuery, height, heightOffset) => {
    if (mediaQuery === 'none') {
      return `${height - heightOffset}px`;
    }
    return mediaQuery ? `${height - heightOffset}px` : 'auto';
  };

  return (
    <Container
      justify={justify}
      items={items}
      direction={direction}
      height={generateHeight(breakpoint, height, offset)}
    >
      {children}
    </Container>
  );
};
