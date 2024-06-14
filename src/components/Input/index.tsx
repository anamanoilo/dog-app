import { TextField, TextFieldProps } from '@mui/material';
import { FC, createElement } from 'react';

export const OutlinedInput: FC<TextFieldProps> = ({ children, ...props }) =>
  createElement(
    TextField,
    {
      ...props,
      sx: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.7
      },
      InputProps: {
        sx: {
          py: 0.7,
          px: 1.5
        }
      }
    },
    children
  );
