import { useParams } from 'react-router-dom';

export const ProductItemPage = () => {
  const { productId } = useParams();
  return (
    <div>
      <h1>{productId}</h1>
    </div>
  );
};
