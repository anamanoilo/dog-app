import { Components, Theme } from '@mui/material';

export const MuiTextFieldConfig: Components<Theme>['MuiTextField'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: 14,
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 1.7
    })
  }
};
