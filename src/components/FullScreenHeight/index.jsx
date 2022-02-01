import React from 'react';
import { use100vh } from 'react-div-100vh';
import { useMediaQuery } from 'react-responsive';
import { checkForOverride } from '../../utils';
import { FlexContainer } from '../FlexContainer';

const FullScreenHeight = ({
  children,
  unsetBreakpoint,
  justify,
  items,
  direction,
  offset,
  overrides
}) => {
  const height = use100vh();

  const BREAKPOINT = checkForOverride('breakpoints', overrides);

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
    <FlexContainer
      justify={justify}
      items={items}
      direction={direction}
      height={generateHeight(breakpoint, height, offset)}
    >
      {children}
    </FlexContainer>
  );
};

export default FullScreenHeight;
