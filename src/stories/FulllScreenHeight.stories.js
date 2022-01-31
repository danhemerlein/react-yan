import FullScreenHeight from '../components/FullScreenHeight/index.jsx';
import { P } from '../components/Typography';

export default {
  title: 'FullScreenHeight',
  component: FullScreenHeightStory
};

export const FullScreenHeightStory = () => {
  return (
    <FullScreenHeight>
      <P>content</P>
    </FullScreenHeight>
  );
};
