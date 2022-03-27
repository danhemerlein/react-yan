import styled from 'styled-components';
import { FullScreenHeight } from '../components/FullScreenHeight';
import { P } from '../components/Typography';

const StoryFullScreenHeight = styled(FullScreenHeight)`
  border: 5px solid black;
`;

export default {
  title: 'Fulll Screen Height',
  argTypes: {
    offset: {
      type: 'number',
      defaultValue: 0,
    },
    unsetBreakpoint: {
      options: ['none', 'mobile', 'tablet', 'desktop-max'],
      control: { type: 'radio' },
      defaultValue: 'none',
    },
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' },
      defaultValue: 'row',
    },
  },
};

const Template = ({ unsetBreakpoint, offset, direction }) => {
  return (
    <StoryFullScreenHeight
      unsetBreakpoint={unsetBreakpoint}
      offset={offset}
      direction={direction}
    >
      <P>content</P>
      <P>content</P>
    </StoryFullScreenHeight>
  );
};

export const FullScreenHeightStory = Template.bind({});
