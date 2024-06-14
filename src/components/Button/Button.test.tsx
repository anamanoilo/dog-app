import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';
import { testSnapshot } from '../../test/utils/snapshot.utils';

describe('Button', () => {
  const { Primary, Secondary, Error, Warning, Text } = composeStories(stories);
  testSnapshot(<Primary />);
  testSnapshot(<Secondary />);
  testSnapshot(<Error />);
  testSnapshot(<Warning />);
  testSnapshot(<Text />);
});
