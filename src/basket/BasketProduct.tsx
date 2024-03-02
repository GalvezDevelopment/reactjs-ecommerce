import React from 'react'
import { ProductItemProps } from '../product/productItemProps.interface'

const BasketProduct = ({ product, onClick }: ProductItemProps) => {
  return (
    <div className="d-flex my-3">
        <section>{ product.title }</section>
        <span className="flex-grow-1"></span>
        <strong>${ product.price }</strong>
    </div>
  )
}

export default BasketProduct