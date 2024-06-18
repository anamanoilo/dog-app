import { Link, SvgIcon } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LogoIcon from '../../assets/logo.svg?react';

export const Logo = () => (
  <Link
    component={RouterLink}
    to="/"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <SvgIcon sx={{ width: 110 }} component={LogoIcon} inheritViewBox />
  </Link>
);
