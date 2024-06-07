import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => (
  <AppBar>
    <Toolbar>
      <ul>
        <Link to="/shop">shop</Link>
      </ul>
    </Toolbar>
  </AppBar>
);
