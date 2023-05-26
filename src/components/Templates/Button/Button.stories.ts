import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    primary: false,
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    primary: false,
    size: 'small',
    label: 'Button',
  },
};
