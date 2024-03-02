import { Col, Container, Row } from 'react-bootstrap';
import { useBasketContext } from '../basket/BasketContext';
import { useProductContext } from './ProductContext';
import ProductItem from './ProductItem';

const ProductList = () => {
    const { products, isLoading } = useProductContext();
    const { setBasketProducts } = useBasketContext();

    const onProductClick = (productId: string) => {
        setBasketProducts(productId);
    };

    if (isLoading) return (<div>Loading...</div>);

    return (
        <Container>
            <Row>
                {products.map((product, i) => (
                    <Col key={i} md="3">
                        <ProductItem product={product} onClick={onProductClick}></ProductItem>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList