import styled from 'styled-components';
import { P } from '../components/Typography';
import { fullBleed } from '../utilities';

export default {
  title: 'Full Bleed Mixin',
  component: FullBleedStory
};

const Div = styled.div`
  ${fullBleed({ left: true, right: true, space: '-10px' })}
  background: black;
`;

export const FullBleedStory = () => {
  return (
    <Div>
      <P color="#fff">test</P>
    </Div>
  );
};
