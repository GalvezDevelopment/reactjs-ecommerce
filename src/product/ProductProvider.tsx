import { PropsWithChildren, useState } from 'react';
import { ProductContext } from './ProductContext';
import { useProducts } from '../hooks/useProducts';

export function ProductProvider({ children }: PropsWithChildren) {
    const { products, isLoading } = useProducts();
    return (<ProductContext.Provider value={{ products, isLoading }}>{children}</ProductContext.Provider>);
};