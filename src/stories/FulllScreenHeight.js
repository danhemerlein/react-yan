import React from 'react';
import { FullScreenHeight } from '../components/FullScreenHeight';
import { P } from '../components/Typography';

export default {
  title: 'FullScreenHeight',
  component: FullScreenHeight
};

export const Primary = () => {
  return (
    <FullScreenHeight>
      <P>content</P>
      <P>content</P>
      <P>content</P>
    </FullScreenHeight>
  );
};
