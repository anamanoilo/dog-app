import { HOST_URL } from '../constants';
import { ProductItem, Category } from '../types';

// export const getProducts = () => {
//   fetch(`${HOST_URL}/api/products`).then(data => {
//     console.log('response in getProducts:', data);
//     return data.json();
//   });
// };

export const getProducts = async (): Promise<ProductItem[]> => {
  const res = await fetch(`${HOST_URL}/api/products`);

  if (!res.ok) {
    const ResponseResult = await res.json();
    throw new Error(ResponseResult?.statusCode);
  }

  return res.json();
};

export const getProductById = async (id: string): Promise<ProductItem> => {
  const res = await fetch(`${HOST_URL}/api/products/${id}`);

  if (!res.ok) {
    const ResponseResult = await res.json();
    throw new Error(ResponseResult?.statusCode);
  }

  return res.json();
};

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${HOST_URL}/api/categories`);

  if (!res.ok) {
    const ResponseResult = await res.json();
    throw new Error(ResponseResult?.statusCode);
  }

  return res.json();
};
