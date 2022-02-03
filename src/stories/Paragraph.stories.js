import { P } from '../components/Typography';

export default {
  title: 'Paragraph',
  argTypes: {
    textAlign: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' }
    }
  }
};

const Template = ({ textAlign }) => {
  return <P textAlign={textAlign}>test</P>;
};

export const ParagraphStory = Template.bind({});
