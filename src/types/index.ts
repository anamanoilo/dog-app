export type ProductItem = {
  categoryId: string;
  id: string;
  isNew: boolean;
  name: string;
  unitPrice: number;
  url: string;
};

export type Category = {
  id: string;
  name: string;
};
