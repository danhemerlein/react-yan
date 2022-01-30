import { storiesOf } from '@storybook/react';
import React from 'react';
import { H1, H2, H3, H4, H5, H6, P } from '../components/Typography';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  return (
    <>
      <H1>Headline One</H1>
      <H2>Headline Two</H2>
      <H3>Headline Three</H3>
      <H4>Headline Four</H4>
      <H5>Headline Five</H5>
      <H6>Headline Six</H6>
      <P>Paragraph</P>
    </>
  );
});
