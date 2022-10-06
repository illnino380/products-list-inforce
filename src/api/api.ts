import { client, ENDPOINTS } from '../utils/fetchClient';
import { Product } from '../types/Product';

export const getProducts = () => {
  return client.get<Product[]>(ENDPOINTS.products);
};

export const createProduct = (data: Omit<Product, 'id'>) => {
  return client.post<Product>(ENDPOINTS.products, data);
};

export const updateProduct = (data: Product) => {
  return client.put<Product>(ENDPOINTS.productById(data.id), data);
};

export const deleteProduct = (id: number | string) => {
  return client.delete(ENDPOINTS.productById(id));
};
