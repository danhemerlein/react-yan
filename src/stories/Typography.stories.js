import { storiesOf } from '@storybook/react';
import React from 'react';
import { H1, H2, H3, P } from '../components/Typography';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  return (
    <>
      <H1>Headline One</H1>
      <H2>Headline Two</H2>
      <H3>Headline Three</H3>
      <P>Paragraph</P>
    </>
  );
});
