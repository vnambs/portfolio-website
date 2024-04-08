import Header from './Header';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Header/Header',
  component: Header,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicHeader = {
  args: {
    logo: 'Jonathan Voary Nambinina',
  },
};
