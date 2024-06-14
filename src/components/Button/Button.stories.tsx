import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryButton } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['contained']
    },
    fullWidth: { control: 'boolean' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Button'
  }
};

export const Secondary: Story = {
  render: ({ fullWidth }) => (
    <SecondaryButton fullWidth={fullWidth}>SHOP NOW</SecondaryButton>
  )
};

// export const Secondary: Story = {
//   args: {
//     variant: 'contained',
//     color: 'secondary',
//     children: 'Button'
//   }
// };

export const Error: Story = {
  args: {
    variant: 'contained',
    color: 'error',
    children: 'Button'
  }
};

export const Warning: Story = {
  args: {
    variant: 'contained',
    color: 'warning',
    children: 'Button'
  }
};

export const Text: Story = {
  // render: () => <TextButton>SHOW MORE</TextButton>
  args: {
    variant: 'text',
    children: 'SHOW MORE'
  }
};
