import styled from 'styled-components';
import { anchorColor } from '../utilities';

export default {
  title: 'Anchor Color Mixin',
  component: AnchorColorStory
};

const A = styled.a`
  ${anchorColor({ color: '#000' })}
`;

export const AnchorColorStory = () => {
  return (
    <A href="https://www.danhemerlein.com" target="_blank">
      danhemerlein.com
    </A>
  );
};
