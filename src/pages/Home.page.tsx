import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductItemCard } from '../components/ProductItemCard';
import { HOST_URL } from '../constants';
// import { useGetCategoriesQuery } from '../hooks/useGetCategoriesQuery';
import { useGetProductsQuery } from '../hooks/useGetProductsQuery';
import { TextButton } from '../components/Button';

export const HomePage = () => {
  const { data: products } = useGetProductsQuery();
  // const { data: categories } = useGetCategoriesQuery();

  const newArrivals = products?.filter(item => item.isNew);

  return (
    <>
      <Typography>NEW ARRIVALS</Typography>
      <ul>
        {newArrivals &&
          newArrivals.map(item => (
            <ProductItemCard
              id={item.id}
              name={item.name}
              unitPrice={item.unitPrice}
              url={`${HOST_URL}${item.url}`}
              key={`${item.unitPrice}${item.url}`}
            />
          ))}
      </ul>
      <TextButton>SEE ALL PRODUCT</TextButton>
      <Typography>MOST POPULAR</Typography>
      <ul>
        {products &&
          products.map(({ id, name, unitPrice, url }) => (
            <ProductItemCard
              id={id}
              name={name}
              unitPrice={unitPrice}
              url={`${HOST_URL}${url}`}
              key={`${unitPrice}${url}`}
            />
          ))}
      </ul>
      <Link to="shop">
        <TextButton>SEE ALL PRODUCT</TextButton>
      </Link>
    </>
  );
};
