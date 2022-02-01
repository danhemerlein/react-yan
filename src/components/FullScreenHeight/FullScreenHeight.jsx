import React from 'react';
import { use100vh } from 'react-div-100vh';
import { useMediaQuery } from 'react-responsive';
import { useOverrideContext } from '../../context/OverrideContext';
import { checkForOverride } from '../../utils';
import { FlexContainer } from '../FlexContainer';

export const FullScreenHeight = ({
  children,
  unsetBreakpoint,
  justify,
  items,
  direction,
  offset
}) => {
  const height = use100vh();

  const BREAKPOINT = checkForOverride('breakpoints', useOverrideContext());

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
