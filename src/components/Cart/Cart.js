import React, { useContext, useEffect } from 'react'
import { productsContext } from '../../Contexts/ProductsContext'
import CircularProgress from '@mui/material/CircularProgress'

const Cart = () => {
  const { getCart, cart, changeProductCount } = useContext(productsContext)

  useEffect(() => {
    getCart()
  }, [])

  return (
    <div className="cart">
      {cart.shoes ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
                <th>SubPrice</th>
              </tr>
            </thead>
            <tbody>
              {cart.shoes.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                  </td>
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
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: {cart.totalPrice} </h4>
          <button>Купить</button>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Cart