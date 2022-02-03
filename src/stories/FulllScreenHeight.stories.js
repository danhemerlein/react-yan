import styled from 'styled-components';
import { FullScreenHeight } from '../components/FullScreenHeight';
import { P } from '../components/Typography';

const SFullScreenHeight = styled(FullScreenHeight)`
  border: 5px solid black;
`;

export default {
  title: 'Fulll Screen Height',
  argTypes: {
    unsetBreakpoint: {
      options: ['none', 'mobile', 'tablet', 'desktop-max'],
      control: { type: 'radio' }
    },
    offset: {
      type: 'number',
      defaultValue: 0
    }
  }
};

const Template = ({ unsetBreakpoint, offset }) => {
  return (
    <SFullScreenHeight
      unsetBreakpoint={unsetBreakpoint}
      offset={offset}
      direction="column"
    >
      <P>content</P>
      <P>content</P>
    </SFullScreenHeight>
  );
};

export const FullScreenHeightStory = Template.bind({});
