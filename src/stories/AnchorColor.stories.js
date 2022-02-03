import styled from 'styled-components';
import { A } from '../components/Typography';
import { anchorColor } from '../utilities';

export default {
  title: 'Anchor Color Mixin',
  component: AnchorColorStory
};

const StyledA = styled.a`
  ${anchorColor({ color: '#000' })}
`;

export const AnchorColorStory = () => {
  return (
    <div>
      <StyledA href="https://www.danhemerlein.com" target="_blank">
        danhemerlein.com
      </StyledA>

      <A href="https://www.danhemerlein.com" target="_blank">
        danhemerlein.com
      </A>
    </div>
  );
};
