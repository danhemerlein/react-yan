import FullScreenHeight from '../components/FullScreenHeight';
import { P } from '../components/Typography';
import { useOverrideContext } from '../context/OverrideContext';

export default {
  title: 'Fulll Screen Height',
  argTypes: {
    unsetBreakpoint: {
      options: ['none', 'mobile', 'tablet', 'desktop-max'],
      control: { type: 'radio' }
    },
    offset: {
      type: 'number'
    }
  }
};

const Template = ({ unsetBreakpoint, offset }) => {
  return (
    <FullScreenHeight
      overrides={useOverrideContext()}
      unsetBreakpoint={unsetBreakpoint}
      offset={offset}
      direction="column"
    >
      <P>content</P>
      <P>content</P>
    </FullScreenHeight>
  );
};

export const FullScreenHeightStory = Template.bind({});
