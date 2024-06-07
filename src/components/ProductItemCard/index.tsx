import { FC } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Radio,
  Box
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { HOST_URL } from '../../constants';
import notFoundImg from '../../assets/placeholder.jpeg';

type ProductItemType = {
  id?: string;
  name: string;
  unitPrice: number;
  url?: string;
  // onClick?: () => void;
};

export const ProductItemCard: FC<ProductItemType> = ({
  id,
  name = 'AVIATOR CLASSIC',
  url,
  unitPrice = 129
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
            image={url && url !== `${HOST_URL}string` ? url : notFoundImg}
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
          <Box display="flex" mt={1}>
            <Radio
              checked
              sx={{
                color: '#BABABA',
                '&.Mui-checked': {
                  borderColor: '#222222'
                }
              }}
            />
            <Radio
              sx={{
                color: '#D76B67',
                '&.Mui-checked': {
                  borderColor: '#222222'
                }
              }}
            />
            <Radio
              sx={{
                color: '#BFDCC4',
                '&.Mui-checked': {
                  borderColor: '#222222'
                }
              }}
            />
          </Box>
        </CardContent>
      </Link>
    </Card>
  </li>
);
