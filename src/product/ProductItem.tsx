import React from 'react'
import { ProductItemProps } from './productItemProps.interface'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ProductItem = ({ product, onClick }: ProductItemProps) => {
  return (
    <article className="d-flex flex-column h-100">
      <header className="flex-grow-1">
        {product.title}
      </header>
      <section className="text-center">
        <strong className="fs-4">${product.price}</strong>
      </section>
      <Button onClick={() => onClick(product.id)}>ADD</Button>
    </article>
  )
}

export default ProductItem