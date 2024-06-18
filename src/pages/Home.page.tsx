import { Box, Card, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../hooks/useGetCategoriesQuery';
import { useGetProductsQuery } from '../hooks/useGetProductsQuery';
import { SectionTitle } from '../components/SectionTitle';
import { HOST_URL } from '../constants';
import { Section } from '../components/Section';
import { ProductItemCard } from '../components/ProductItemCard';
import { TextButton } from '../components/Button';

export const HomePage = () => {
  const { data: products } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();

  const newArrivals = products?.filter(item => item.isNew);

  return (
    <>
      <Section>
        <SectionTitle title="SHOP BY CATEGORY" />
        <Box
          component="ul"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          p={2}
        >
          {categories &&
            categories.map(({ id, name }) => {
              const categoryProduct = products?.find(
                item => id === item.categoryId
              );
              const categoryThumbnail = `${HOST_URL}${categoryProduct?.url}`;
              return (
                <li key={id}>
                  <Card
                    sx={{
                      maxWidth: 300,
                      padding: 2,
                      bgcolor: 'secondary.main',
                      borderRadius: 0,
                      '&:hover, &:active': {
                        bgcolor: 'grey.100'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={categoryThumbnail}
                      alt={name}
                    />
                    <Typography>{name}</Typography>
                  </Card>
                </li>
              );
            })}
        </Box>
      </Section>
      <Section>
        <SectionTitle title="MOST POPULAR" />
        <Box
          component="ul"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          p={2}
        >
          {products &&
            products
              .slice(0, 4)
              .map(({ id, name, unitPrice, url }) => (
                <ProductItemCard
                  id={id}
                  name={name}
                  unitPrice={unitPrice}
                  url={`${HOST_URL}${url}`}
                  key={id}
                />
              ))}
        </Box>

        <Link to="shop">
          <TextButton>SEE ALL PRODUCT</TextButton>
        </Link>
      </Section>
      <Section>
        <SectionTitle title="NEW ARRIVALS" />
        <Box
          component="ul"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          p={2}
        >
          {newArrivals &&
            newArrivals
              .slice(0, 4)
              .map(({ id, name, unitPrice, url }) => (
                <ProductItemCard
                  id={id}
                  name={name}
                  unitPrice={unitPrice}
                  url={`${HOST_URL}${url}`}
                  key={id}
                />
              ))}
        </Box>

        <Link to="shop">
          <TextButton>SEE ALL PRODUCT</TextButton>
        </Link>
      </Section>
      {/* <ProductSection products={products} sectionTitleText="MOST POPULAR" />
      <ProductSection products={newArrivals} sectionTitleText="NEW ARRIVALS" /> */}
    </>
  );
};
