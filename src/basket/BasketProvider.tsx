import react, { useState } from 'react';
import { BasketContext } from './BasketContext';

function BasketProvider({ children }: any) {
    const [products, setProducts] = useState([]);
    return (<BasketContext.Provider value={{ products, setProducts }}>{children}</BasketContext.Provider>);
};

export default BasketProvider;