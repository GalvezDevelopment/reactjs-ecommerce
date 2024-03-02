import react, {createContext, useContext} from 'react';
import { Product } from './product.interface';

export interface ProductContextApi { products: Product[], isLoading: boolean };

export const ProductContext = createContext<ProductContextApi | null>(null);

export const useProductContext = () => {
    const productContext = useContext(ProductContext);
    if (!productContext) throw new Error('productContext has to be used within <ProductContext.Provider>');
    return productContext;
};