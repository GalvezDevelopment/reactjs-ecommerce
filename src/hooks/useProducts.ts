import react, { useState, useEffect, useContext } from 'react';
import { Product } from '../product/product.interface';
import { ProductContext } from '../product/ProductContext';

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (products.length > 0) return;
        setLoading(true);
        const fetchProducts = async () => {
            const call = await fetch('products.json'); // Simulating a real API call
            const products = await call.json();
            setProducts(products);
        };
        setTimeout(() => {
            fetchProducts();
            setLoading(false);
        }, 3000); // Simulating a delay
    }, []);

    return { products, isLoading };
}