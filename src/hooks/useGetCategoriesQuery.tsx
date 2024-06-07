import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/products';

export const useGetCategoriesQuery = () => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  });
  return { data, error, isLoading, isFetching };
};
