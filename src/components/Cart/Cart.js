import React, { useContext, useEffect } from 'react'
import { productsContext } from '../../Contexts/ProductsContext'
import CircularProgress from '@mui/material/CircularProgress'
import './Cart.css'
import { Link } from 'react-router-dom'
const Cart = () => {
  const { getCart, cart, changeProductCount } = useContext(productsContext)

  useEffect(() => {
    getCart()
  }, [])

  return (
    <div>
      {cart.shoes ? (
        <div className="cart">
          <table>
            <thead>
              <tr className="cart__tr">
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
                <th>SubPrice</th>
              </tr>
            </thead>
            <tbody>
              {cart.shoes.map((elem) => (
                <tr key={elem.item.id} className="cart__td">
                  <td><img src={elem.item.images[0].images} width="200px" height="200px"/></td>
                  <td>{elem.item.title}</td>
                  <td>{elem.item.price}</td>
                  <td>
                    <input
                      value={elem.count}
                      type="number"
                      onChange={(e) =>
                        changeProductCount(e.target.value, elem.item.id)
                      }
                    />
                  </td>
                  <td>{elem.subPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: {cart.totalPrice} </h4>
          <Link to="/order">
          <button className="buy">Купить</button>
          </Link>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Cart
