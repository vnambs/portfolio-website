import AtAGlance from './AtAGlance';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Home/AtAGlance',
  component: AtAGlance,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicAtAGlance = {
  args: {
    Name: 'Jonathan Voary Nambinina',
    CallName: 'Jonathan',
  },
};
