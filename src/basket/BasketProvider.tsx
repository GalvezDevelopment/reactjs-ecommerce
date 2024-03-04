import { PropsWithChildren, useState } from 'react';
import { BasketContext } from './BasketContext';

function BasketProvider({ children }: PropsWithChildren) {
    const [products, setProducts] = useState<string[]>([]);

    const addProduct = (id: string) => {
        setProducts([...products, id]);
    };

    return (<BasketContext.Provider value={{ basket: products, setBasketProducts: addProduct }}>{children}</BasketContext.Provider>);
};

export default BasketProvider;