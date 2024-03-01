import react, { createContext } from 'react';

export const BasketContext = createContext<{ products: any[], setProducts: Function } | null>(null);