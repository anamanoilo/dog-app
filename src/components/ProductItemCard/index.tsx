import { FC } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Box,
  CardActions
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import notFoundImg from '../../assets/placeholder.jpeg';

type ProductItemProps = {
  id: string;
  name: string;
  unitPrice: number;
  url?: string;
  // onClick?: () => void;
};

export const ProductItemCard: FC<ProductItemProps> = ({
  id,
  name,
  url,
  unitPrice
}) => (
  <li>
    <Card
      sx={{
        maxWidth: 450,
        padding: 4,
        bgcolor: 'secondary.main',
        borderRadius: 0,
        '&:hover, &:active': {
          bgcolor: 'grey.100'
        }
      }}
    >
      <Link to={`shop/${id}`}>
        <Box position="relative">
          <CardMedia
            component="img"
            height="200"
            image={url || notFoundImg}
            alt={name}
          />
          <IconButton
            aria-label="add to favorites"
            sx={{ position: 'absolute', top: 0, right: 0 }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        </Box>

        <CardContent>
          <Typography variant="h4">{name}</Typography>
          <Typography
            variant="body2"
            color="grey.300"
          >{`$${unitPrice}`}</Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Button variant="contained" fullWidth>
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  </li>
);
