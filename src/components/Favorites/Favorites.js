import React, { useContext, useEffect } from 'react';
import { authContext } from '../../Contexts/AuthContext';
import CircularProgress from '@mui/material/CircularProgress'
import '../Cart/Cart.css'


const Favorites = () => {

    const { favorites, 
        getDataFavorites,
        removeDataFavorites
    } = useContext(authContext)
    console.log(favorites)

    useEffect(() => {
        getDataFavorites()
    }, [])

    return (
        <div className="all">
          {favorites ? (
            <div className="cart">
              <h1>Избранное</h1>
              <div className="cart-container">
                <div className="cart-header">
                  <h3 className="heading">Shopping Cart</h3>
                  <h5 className="action">Remove all</h5>
                </div>
                {favorites.map((elem) => (
                 <div className="cart-items">
                    <div className="image-box">
                      <img src={elem.images[0].images} height="120px" width="120px"/>
                    </div>
                    <div className="about">
                      <h2 className="cart-product-title">{elem.title}</h2>
                    <h3 className="cart-product-subtitle">{elem.category}</h3>
                    <hr/>
                    </div>
                    <div className="counter">
                        </div>
                    <div className="prices">
                      <div className="prices">
                          <div className="amount">{elem.price}$</div>ƒ
                          <div className="save"><u>Favorites</u></div>
                          <div className="remove"><u>Remove</u></div>
                      </div>
                      <hr/>
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
                      <div className="items">{favorites.count}</div>
                      </div>
                      <div className="total-amount">{favorites.price}$</div>
                      </div>
                     
                      <button className="checkout-button">Купить</button>
                   
                    </div>
          </div>
          
          ) : (
            <CircularProgress />
          )}
      </div>
      )}

export default Favorites;