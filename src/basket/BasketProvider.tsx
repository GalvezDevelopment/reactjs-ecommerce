import react, { PropsWithChildren, useState } from 'react';
import { BasketContext } from './BasketContext';
import { Product } from '../product/product.interface';

function BasketProvider({ children }: PropsWithChildren) {
    const [products, setProducts] = useState<Product[]>([]);
    return (<BasketContext.Provider value={{ products, setProducts }}>{children}</BasketContext.Provider>);
};

export default BasketProvider;