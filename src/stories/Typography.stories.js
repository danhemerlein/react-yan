import { H1, H2, H3, H4, H5, H6, P } from '../components/Typography';

export default {
  title: 'Typography',
  component: TypographyStory
};

export const TypographyStory = () => {
  return (
    <>
      <H1 textAlign="center">Headline One</H1>
      <H2>Headline Two</H2>
      <H3>Headline Three</H3>
      <H4>Headline Four</H4>
      <H5>Headline Five</H5>
      <H6>Headline Six</H6>
      <P>Paragraph</P>
    </>
  );
};
