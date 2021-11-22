import React, { useContext, useState } from 'react'
import './Product.css'
import { productsContext } from '../../Contexts/ProductsContext'
import { authContext, useAuth } from '../../Contexts/AuthContext'
import { Link } from 'react-router-dom'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import DetailsIcon from '@mui/icons-material/Details'
import { red } from '@mui/material/colors'

const ProductCard = ({ item }) => {
  const { addProductToCart } = useContext(productsContext)
  const { addProductToFavorites } = useContext(authContext)

  const { user } = useAuth()

  return (
    <div class="card">
      <img src={item.images[0].images} width="400px" height="400px" />
      <div class="product-card-container">
        <h2>{item.title}</h2>
        <p>{item.category}</p>
        <p>{item.images.map((elem) => elem.color)}</p>
        <p>{item.size.map((item) => item + ' ')} </p>
        <p>{item.price}$</p>
        <div className="card_button">
          <Link to={`shoes/${item.id}`}>
            <DetailsIcon color="secondary" />
          </Link>
          <Link to="/">
            <AddShoppingCart onClick={() => addProductToCart(item)} color="primary" />
          </Link>
          {user && (
            <Link to="/">
              <FavoriteBorderIcon onClick={() => addProductToFavorites(item)} style={{ color: red[500] }}/>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
