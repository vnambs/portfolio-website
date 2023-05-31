import NavCard from './NavCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/NavCard',
  component: NavCard,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicNavCard = {
  args: {
    title: 'Manahoana Tu!',
    description:
      "Test kely storybook sy Nextjs en Typescript syntax letieh haha io aloh no misy dia iafio ao ato ny documentation any storybook rehefa voa mianatra ohatr'ahy ",
    href: 'https://storybook.js.org/tutorials/',
  },
};
