import React, { useContext } from 'react'
import './Product.css'
import { productsContext } from '../../Contexts/ProductsContext'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const { addProductToCart } = useContext(productsContext)
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
      </div>
    </div>
  )
}

export default ProductCard
