import React from 'react';
import { FullScreenHeight } from '../components/FullScreenHeight';
import { P } from '../components/Typography';

export default {
  title: 'FullScreenHeight',
  component: FullScreenHeightStory
};

export const FullScreenHeightStory = () => {
  return (
    <FullScreenHeight direction="column" offset={50} unsetBreakpoint="none">
      <P>content</P>
      <P>content</P>
      <P>content</P>
    </FullScreenHeight>
  );
};
