import React, { useEffect } from 'react'
import StyledMain from './mainStyle'
import api from '../../services/api'

const Main = () => {
  const loadProducts = async () => {
    const response = await api.get(`/products`)
    const { docs: productData } = response.data

    return productData
  }

  useEffect(() => {
    loadProducts()
  })

  return (
    <StyledMain>
      Carregando...
    </StyledMain>
  )
}

export default Main