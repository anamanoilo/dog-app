import { cleanup, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { UomoAppThemeProvider } from '../../theme';

export const testSnapshot = (el: ReactElement, name = 'Component') => {
  it(`should match snapshot ${name}`, () => {
    const { container, unmount } = render(
      <UomoAppThemeProvider>{el}</UomoAppThemeProvider>
    );
    expect(container).toMatchSnapshot();

    unmount();
    cleanup();
  });
};
