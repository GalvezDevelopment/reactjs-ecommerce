import { Product } from "./product.interface";

export interface ProductItemProps {
    product: Product;
    onClick: (productId: number) => void;
}