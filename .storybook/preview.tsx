import type { Preview } from '@storybook/react';
import React from 'react';
import { UomoAppThemeProvider } from '../src/theme';

const preview: Preview = {
  decorators: [
    Story => (
      <UomoAppThemeProvider>
        <Story />
      </UomoAppThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
