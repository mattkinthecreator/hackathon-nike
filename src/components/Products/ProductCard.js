import React, { useContext, useState } from 'react'
import './Product.css'
import { productsContext } from '../../Contexts/ProductsContext'
import { authContext } from '../../Contexts/AuthContext'
import { Link } from 'react-router-dom'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DetailsIcon from '@mui/icons-material/Details';

const ProductCard = ({ item }) => {
  const { addProductToCart } = useContext(productsContext)
  const { addProductToFavorites } = useContext(authContext)

  return (
    <div class="card">
      <img src={item.images[0].images} width="450px" height="400px" />
      <div class="container-productCard">
        <h2>{item.title}</h2>
        <p>{item.category}</p>
        <p>{item.images.map((elem) => elem.color)}</p>
        <p>{item.size.map((item) => item + ' ')} </p>
        <p>{item.price}$</p>
        <div className="card_button">
          <Link to={`shoes/${item.id}`}>
            <DetailsIcon/>
          </Link>
          <span onClick={() => addProductToCart(item)}><AddShoppingCart/></span>
          <span onClick={() => addProductToFavorites(item)}> <FavoriteBorderIcon/></span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
