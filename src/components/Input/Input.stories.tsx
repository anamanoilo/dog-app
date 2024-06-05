import { TextField } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { OutlinedInput } from '.';

const meta = {
  title: 'Components/Input',
  component: TextField,
  argTypes: {
    label: { control: 'text' },
    variant: {
      options: ['outlined', 'filled'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'outlined',
    type: 'email',
    children: 'TextField'
  }
};

export const Outlined: Story = {
  render: () => <OutlinedInput label="First name" />
};
