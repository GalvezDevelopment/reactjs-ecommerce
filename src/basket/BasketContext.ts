import react, { createContext } from 'react';
import { Product } from '../product/product.interface';

export const BasketContext = createContext<{ products: Product[], setProducts: Function } | null>(null);