import React, { useContext, useEffect } from 'react'
import { productsContext } from '../../Contexts/ProductsContext'
import CircularProgress from '@mui/material/CircularProgress'
import { Link } from 'react-router-dom'
import './Cart.css'
import { authContext } from '../../Contexts/AuthContext'
const Cart = () => {
  const { getCart, cart, changeProductCount, removeProductToCart } =
    useContext(productsContext)
  const { addProductToFavorites } = useContext(authContext)
  useEffect(() => {
    getCart()
  }, [])

  function handleRemoveStorage() {
    localStorage.removeItem('cart')
    getCart()
  }

  return (
    <div className="all">
      {cart.shoes ? (
        <div className="cart">
          <h1>Корзина</h1>
          <div className="cart-container">
            <div className="cart-header">
              <h3 className="heading">Shopping Cart</h3>
              <h5 className="action" onClick={handleRemoveStorage}>
                Remove all
              </h5>
            </div>
            {cart.shoes.map((elem) => (
              <div className="cart-items">
                <div className="image-box">
                  <img
                    src={elem.item.images[0].images}
                    height="120px"
                    width="120px"
                  />
                </div>
                <div className="about">
                  <h2 className="cart-product-title">{elem.item.title}</h2>
                  <h3 className="cart-product-subtitle">
                    {elem.item.category}
                  </h3>
                  <hr />
                </div>
                <div className="counter">
                  <input
                    value={elem.count}
                    type="number"
                    onChange={(e) =>
                      changeProductCount(e.target.value, elem.item.id)
                    }
                    min={1}
                  />
                </div>
                <div className="prices">
                  <div className="prices">
                    <div className="amount">{elem.item.price}$</div>ƒ
                    <div className="save">
                      <u onClick={() => addProductToFavorites(elem.item)}>
                        Favorites
                      </u>
                    </div>
                    <div className="remove">
                      <u onClick={() => removeProductToCart(elem.item)}>
                        Remove
                      </u>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            ))}
            {/* <hr>  */}
            {/* <div className='cart-options'>
              <h4>Total: {cart.totalPrice} </h4>
                <Link to="/order">
                  <button>Купить</button>
                </Link>
              </div> */}
          </div>
          <div className="checkout">
            <div className="total">
              <div>
                <div className="subtotal">Sub-Total</div>
                <div className="items">{cart.count}</div>
              </div>
              <div className="total-amount">{cart.totalPrice}$</div>
            </div>
            <Link to="/order">
              <button className="checkout-button">Купить</button>
            </Link>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Cart
