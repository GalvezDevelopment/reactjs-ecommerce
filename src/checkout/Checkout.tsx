import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useBasketContext } from "../basket/BasketContext";
import { FormEvent, FormEventHandler, useState } from "react";
import CheckoutConfirmation from "./CheckoutConfirmation";

const Checkout = () => {
    const basketContext = useBasketContext();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const onCheckout = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const payload = Object.fromEntries(formData);
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
        navigate('/');
    };

    return (
        <Form onSubmit={onCheckout}>
            <Container>
                <Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" required></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastName" required></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="8">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" required></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Credit Card</Form.Label>
                        <Form.Control type="text" name="creditCard" required></Form.Control>
                    </Form.Group>
                    <Col sm="12" md="6" className="py-3">
                        <Link to="/basket">Go back</Link>
                    </Col>
                    <Col sm="12" md="6" className="d-flex justify-content-end py-3">
                        <Button variant="outline-primary" type="submit">Pay {basketContext.basket.length} products</Button>
                    </Col>
                </Row>
                <CheckoutConfirmation show={show} count={basketContext.basket.length} onClose={closeModal}></CheckoutConfirmation>
            </Container>
        </Form>
    )
}

export default Checkout