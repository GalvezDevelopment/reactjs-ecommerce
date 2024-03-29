import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BasketContext, useBasketContext } from '../basket/BasketContext';

const Header = () => {
    const { basket } = useBasketContext();

    return (
        <Navbar expand="lg" className="bg-body-secondary">
            <Container>
                <Navbar.Brand>
                    <Link to="/">ecommerce</Link>
                </Navbar.Brand>
                <span></span>
                <Link to="/basket">
                    <FaCartShopping />
                    ({ basket.length })
                </Link>
            </Container>
        </Navbar>
    )
}

export default Header