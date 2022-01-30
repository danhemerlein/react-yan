import React from 'react';
import { FlexContainer } from '../components/FlexContainer';
import { P } from '../components/Typography';

export default {
  title: 'FlexContainer',
  component: FlexContainer
};

export const Primary = () => {
  return (
    <FlexContainer justify="center" items="center" direction="column">
      <P>content</P>
      <P>content</P>
      <P>content</P>
    </FlexContainer>
  );
};