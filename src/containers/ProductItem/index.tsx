import { FC } from 'react';
import { Button } from '@mui/material';

// const ListItemStyled = styled('li')({

// })

type ProductItemTypes = {
  name?: string;
  url?: string;
  onClick?: () => void;
};
export const ProductItem: FC<ProductItemTypes> = ({
  name = 'AVIATOR CLASSIC',
  url = '',
  onClick
}) => (
  <li>
    <img width={200} src={url || '/src/assets/placeholder.jpeg'} alt={name} />
    <Button variant="contained" type="button" onClick={onClick}>
      Add to cart
    </Button>
    <h4>{name}</h4>
  </li>
);
