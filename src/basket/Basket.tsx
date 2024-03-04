import { Button, Col, Container, Row } from 'react-bootstrap';
import { useProductContext } from '../product/ProductContext';
import { Product } from '../product/product.interface';
import { useBasketContext } from './BasketContext';
import BasketProduct from './BasketProduct';
import { useNavigate } from 'react-router-dom';

const Basket = () => {
  const navigate = useNavigate();
  const { products } = useProductContext();
  const { basket } = useBasketContext();

  const getProductById = (productId: string): Product => {
    const found = products.find(p => p.id === productId);
    if (!found) throw new Error('productId does not exist.');
    return found;
  };

  const onClick = (productId: string) => console.log(productId);
  const onCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container>
      <Row>
        {basket.map((p, i) => <BasketProduct key={i} product={getProductById(p)} onClick={onClick}></BasketProduct>)}
      </Row>
      <Row>
        <Col>
          <Button onClick={onCheckout}>Checkout</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Basket