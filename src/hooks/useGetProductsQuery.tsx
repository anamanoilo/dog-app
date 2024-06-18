import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';

export const useGetProductsQuery = () => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });
  return { data, error, isLoading, isFetching };
};
