import React from 'react';
import { FullScreenHeight } from '../components/FullScreenHeight';
import { P } from '../components/Typography';

export default {
  title: 'FullScreenHeight'
};

export const OffsetUnset = () => {
  return (
    <FullScreenHeight direction="column" offset={50} unsetBreakpoint="mobile">
      <P>content</P>
      <P>content</P>
      <P>content</P>
    </FullScreenHeight>
  );
};

export const OffsetNoUnset = () => {
  return (
    <FullScreenHeight direction="column" offset={50} unsetBreakpoint="none">
      <P>content</P>
      <P>content</P>
      <P>content</P>
    </FullScreenHeight>
  );
};

export const NoOffsetUnset = () => {
  return (
    <FullScreenHeight direction="column" offset={0} unsetBreakpoint="tablet">
      <P>content</P>
      <P>content</P>
      <P>content</P>
    </FullScreenHeight>
  );
};

export const NoOffsetNoUnset = () => {
  return (
    <FullScreenHeight direction="column" offset={0} unsetBreakpoint="none">
      <P>content</P>
      <P>content</P>
      <P>content</P>
    </FullScreenHeight>
  );
};
