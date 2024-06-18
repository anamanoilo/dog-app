import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../../components/Logo';

const navOptions = [
  'home',
  'shop',
  'collection',
  'journal',
  'lookbook',
  'pages'
];

export const Header = () => (
  <AppBar position="static" sx={{ bgcolor: 'secondary.main' }}>
    <Container>
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Logo />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px'
          }}
        >
          {navOptions.map(page => (
            // TODO: replace Button with Mui Link
            <Button
              component={NavLink}
              to={page === 'home' ? '/' : page}
              key={page}
              end
              sx={{
                '&::after': {
                  transform: 'translateX(-100%)'
                },
                '&:hover, &:focus, &.active': {
                  '&::after': {
                    transform: 'translateX(-40%)'
                  }
                }
              }}
            >
              {page.toUpperCase()}
            </Button>
          ))}
        </Box>
        <Box>
          <Link to="signin">
            <PersonIcon />
          </Link>
          <Link to="cart">
            <ShoppingBasketIcon />
          </Link>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
