import { Container } from 'react-bootstrap';
import { useProductContext } from '../product/ProductContext';
import { Product } from '../product/product.interface';
import { useBasketContext } from './BasketContext';
import BasketProduct from './BasketProduct';

const Basket = () => {
  const { products } = useProductContext();
  const { basket } = useBasketContext();

  const getProductById = (productId: string): Product => {
    const found = products.find(p => p.id === productId);
    if (!found) throw new Error('productId does not exist.');
    return found;
  };

  const onClick = (productId: string) => console.log(productId);

  return (
    <Container>
      {basket.map(p => <BasketProduct product={getProductById(p)} onClick={onClick}></BasketProduct>)}
    </Container>
  )
}

export default Basket