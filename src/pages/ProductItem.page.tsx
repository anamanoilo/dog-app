import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../hooks/useGetProductByIdQuery';
import { ProductItemCard } from '../components/ProductItemCard';
import { HOST_URL } from '../constants';

export const ProductItemPage = () => {
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery(productId || '');
  return data ? (
    <ProductItemCard
      id={data.id}
      name={data.name}
      unitPrice={data.unitPrice}
      url={`${HOST_URL}${data.url}`}
    />
  ) : (
    <div>Not found</div>
  );
};
