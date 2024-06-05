import { Button, ButtonProps } from '@mui/material';
import { FC, createElement } from 'react';

export const SecondaryButton: FC<ButtonProps> = ({ children, ...props }) =>
  createElement(
    Button,
    {
      ...props,
      sx: {
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
        fontWeight: 600,
        px: 5,
        py: 2,
        '&:hover, &:active': {
          bgcolor: 'grey.100'
        }
      }
    },
    children
  );

export const TextButton: FC<ButtonProps> = ({ children, ...props }) =>
  createElement(
    Button,
    {
      ...props,
      sx: {
        position: 'relative',
        padding: 0,
        lineHeight: 1.7,
        overflow: 'hidden',
        '&::after': {
          content: "''",
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          bgcolor: 'secondary.contrastText',
          transform: 'translateX(-30%)',
          transition: 'transform 250ms ease-out'
        },
        '&:hover, &:active': {
          bgcolor: 'secondary.main',
          '&::after': {
            transform: 'translateX(0)'
          }
        }
      }
    },
    children
  );
