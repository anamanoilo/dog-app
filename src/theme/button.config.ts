import { Components, Theme } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 0,
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 14,
      lineHeight: 1.7,
      padding: theme.spacing(2.25, 7.5),
      '&:hover, &:active': {
        boxShadow: 'none'
      }
    }),
    text: ({ theme }) => ({
      backgroundColor: 'transparent',
      position: 'relative',
      padding: 0,
      lineHeight: 1.7,
      overflow: 'hidden',
      minWidth: 'auto',
      '&::after': {
        content: "''",
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: theme.palette.secondary.contrastText,
        transform: 'translateX(-30%)',
        transition: 'transform 250ms ease-out'
      },
      '&:hover, &:active': {
        backgroundColor: 'transparent',
        '&::after': {
          transform: 'translateX(0)'
        }
      }
    })
    // sizeSmall: ({ theme }) => ({})
    // containedPrimary: ({ theme: { palette } }) => ({
    //   minHeight: 60,
    //   backgroundColor: palette.primary.main,
    //   color: palette.primary.contrastText,
    //   '&:hover': {
    //     backgroundColor: palette.action.hover
    //   },
    //   '&:active': {
    //     backgroundColor: palette.action.selected,
    //     boxShadow: `inset 0px -4px 6px ${alpha(
    //       palette.common.white,
    //       0.25
    //     )}, inset 0px 4px 6px ${alpha(palette.common.black, 0.25)}`
    //   }
    // }),
    // containedSecondary: ({ theme: { palette } }) => ({
    //   minHeight: 60,
    //   backgroundColor: palette.secondary.main,
    //   color: palette.secondary.contrastText,
    //   '&:hover': {
    //     backgroundColor: palette.action.hover
    //   },
    //   '&:active': {
    //     backgroundColor: palette.action.selected,
    //     boxShadow: `inset 0px -4px 6px ${alpha(
    //       palette.common.white,
    //       0.25
    //     )}, inset 0px 4px 6px ${alpha(palette.common.black, 0.25)}`
    //   }
    // }),
  },

  defaultProps: {
    disableRipple: true
  }
};
