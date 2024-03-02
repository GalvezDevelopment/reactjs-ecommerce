import { Product } from "./product.interface";

export interface ProductItemProps {
    product: Product;
    onClick: (productId: string) => void;
}