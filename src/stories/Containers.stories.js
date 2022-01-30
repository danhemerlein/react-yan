import React from 'react';
import { FlexContainer } from '../components/Containers';
import { P } from '../components/Typography';

export default {
  title: 'Button',
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
