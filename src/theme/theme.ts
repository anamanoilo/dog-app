import { createTheme } from '@mui/material/styles';
import { MuiButtonConfig } from './button.config';
import { MuiTextFieldConfig } from './input.config';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#222222',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#222222'
    },
    text: {
      primary: '#222222'
    },
    grey: {
      100: '#F7F7F7',
      300: '#767676',
      500: '#E4E4E4'
    },
    action: {
      hover: '#444444',
      selected: '#111111'
    },
    warning: {
      main: '#E4E4E4'
    },
    error: {
      main: '#D6001C'
    },
    background: {
      paper: '#FBFAFC'
    }
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    // fontWeightSemiBold: 600,
    fontWeightBold: 700
  },
  transitions: {
    duration: {
      short: 250,
      standard: 300
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  components: {
    MuiButton: MuiButtonConfig,
    MuiTextField: MuiTextFieldConfig,
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export default theme;
