import { createContext, useContext } from 'react';

export interface BasketContextApi { basket: string[], setBasketProducts: Function };

export const BasketContext = createContext<BasketContextApi | null>(null);

export const useBasketContext = () => {
    const basketContext = useContext(BasketContext);

    if (!basketContext) throw new Error('basketContext has to be used within <BasketContext.Provider>');
    
    return basketContext;
};