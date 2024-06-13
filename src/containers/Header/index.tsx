import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

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
          justifyContent: 'space-between'
        }}
      >
        <Link to="/">
          <img src={Logo} alt="Uomo Logo" width={110} />
        </Link>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px'
          }}
        >
          {navOptions.map(page => (
            <NavLink to={page === 'home' ? '/' : page} key={page} end>
              {({ isActive }) => (
                <Button
                  variant="text"
                  sx={
                    isActive
                      ? {
                          '&::after': {
                            content: "''",
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '2px',
                            bgcolor: 'secondary.contrastText',
                            transform: 'translateX(-60%)',
                            transition: 'transform 250ms ease-out'
                          }
                        }
                      : {
                          '&::after': {
                            content: "''",
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '2px',
                            bgcolor: 'secondary.contrastText',
                            transform: 'translateX(-100%)',
                            transition: 'transform 250ms ease-out'
                          },
                          '&:hover, &:focus': {
                            backgroundColor: 'transparent',
                            '&::after': {
                              transform: 'translateX(-60%)'
                            }
                          }
                        }
                  }
                >
                  {page.toUpperCase()}
                </Button>
              )}
            </NavLink>
          ))}
        </Box>
        <Box>
          <Link to="account">
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
