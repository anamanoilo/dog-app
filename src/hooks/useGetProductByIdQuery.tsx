import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../api/products';

export const useGetProductByIdQuery = (id: string) => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['products', id],
    queryFn: () => getProductById(id)
  });
  return { data, error, isLoading, isFetching };
};
