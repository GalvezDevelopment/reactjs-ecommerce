import { useEffect, useRef, useState } from 'react';
import { Product } from '../product/product.interface';

export function useProducts() {
    const customRef = useRef(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const fetchProducts = async () => {
        if (products.length > 0) return;
        const call = await fetch('products.json'); // Simulating a real API call
        const productsFetched = await call.json();
        setProducts(productsFetched);

    };

    useEffect(() => {
        if (!customRef.current) {
            fetchProducts();
        }
        return () => { customRef.current = true };
    }, []);

    return { products, isLoading };
}