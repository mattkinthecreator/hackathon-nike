import React, { useContext, useState } from 'react'
import './Product.css'
import { productsContext } from '../../Contexts/ProductsContext'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const { addProductToCart } = useContext(productsContext)
  const { addProductToFavorites } = useContext(authContext)

  return (
    <div class="card">
      <img src={item.images[0].images} width="450px" height="400px" />
      <div class="container">
        <h2>{item.title}</h2>
        <p>Category: {item.category}</p>
        <p>color: {item.images.map((elem) => elem.color)}</p>
        <p>size: {item.size.map((item) => item + ' ')} </p>
        <p>Price: {item.price}$</p>
        <Link to={`shoes/${item.id}`}>
          <button>Подробнее</button>
        </Link>
        <button onClick={() => addProductToCart(item)}>Korzina</button>
        <button onClick={() => addProductToFavorites(item)}>Fav</button>
      </div>
    </div>
  )
}

export default ProductCard
