import React from 'react'
import { ProductItemProps } from './productItemProps.interface'

const ProductItem = ({ product, onClick }: ProductItemProps) => {
  return (
    <div>
        { product.title } - { product.price }
    </div>
  )
}

export default ProductItem