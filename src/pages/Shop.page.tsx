import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
// import { useState } from 'react';
import { useGetCategoriesQuery } from '../hooks/useGetCategoriesQuery';
// import { useGetProductsQuery } from '../hooks/useGetProductsQuery';

export const ShopPage = () => {
  // const [filteredProducts, setFilteredProducts] = useState([])
  // const { data: products } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const handleChange = () => {};
  return (
    <Container>
      <Box>
        {categories && (
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120
            }}
          >
            <InputLabel id="category">CATEGORY</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              onChange={handleChange}
              label="CATEGORY"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories.map(category => (
                <MenuItem value={category.id} key={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Box>
    </Container>
  );
};
