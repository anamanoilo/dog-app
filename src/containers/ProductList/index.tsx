import { useGetProductsQuery } from '../../hooks/useGetProductsQuery';

export const Productlist = () => {
  const { data } = useGetProductsQuery();
  console.log('data:', data);
  return <div>Product List</div>;
};
