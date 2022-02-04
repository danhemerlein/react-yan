import { A, H1, H2, H3, H4, H5, H6, P, Span } from '../components/Typography';

export default {
  title: 'Typography',
  component: TypographyStory
};

export const TypographyStory = () => {
  return (
    <>
      <H1 color="purple">Headline One</H1>
      <H2>Headline Two</H2>
      <H3>Headline Three</H3>
      <H4>Headline Four</H4>
      <H5>Headline Five</H5>
      <H6>Headline Six</H6>
      <P>Paragraph</P>
      <div>
        <Span>Span</Span>
      </div>
      <div>
        <A href="https://www.danhemerlein.com" target="_blank">
          danhemerlein.com
        </A>
      </div>
      <div>
        <A
          href="https://www.danhemerlein.com"
          target="_blank"
          textDecoration="none"
          textDecorationHover="underline"
          color="red"
        >
          danhemerlein.com
        </A>
      </div>
    </>
  );
};
