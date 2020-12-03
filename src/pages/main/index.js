import React, { useState, useEffect } from 'react'
import StyledMain from './mainStyle'
import api from '../../services/api'

const Main = () => {

  const [products, setProducts] = useState()
  const loadProducts = async () => {
    const response = await api.get(`/products`)
    const { docs: productData } = response.data

    if (productData) {
      setProducts(productData)
    }

    return productData
  }

  useEffect(() => {
    loadProducts()
  })

  return (
    <StyledMain>
      {products && products.map(product => {
        const { _id: id, title, description} = product;

        return(
          <article key={id}>
            <strong>{title}</strong>
            <p>{description}</p>
            <a href="#">Access</a>
          </article>
        )
      })}
    </StyledMain>
  )
}

export default Main