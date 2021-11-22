import React, { useContext, useEffect } from 'react'
import { authContext } from '../../Contexts/AuthContext'
import CircularProgress from '@mui/material/CircularProgress'

const Favorites = () => {
  const { favorites, getDataFavorites, removeFavorites, userId } =
    useContext(authContext)
  console.log(favorites)

  useEffect(() => {
    getDataFavorites()
  }, [])

  function removeProduct(index) {
    let newFavorites = [...favorites]
    newFavorites.splice(index, 1)
    removeFavorites(userId, newFavorites)
  }

  return (
    <div>
      <h1>ИЗБРАННОЕ</h1>
      {favorites ? (
        <div className="cart">
          <table>
            <thead>
              <tr className="cart__tr">
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {favorites.map((item, index) => (
                <tr key={item.id} className="cart__td">
                  <td>
                    <img
                      src={item.images[0].images}
                      width="200px"
                      height="200px"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    {/* <input
                 value={item.count}
                 type="number"
                 onChange={(e) =>
                   changeProductCount(e.target.value, item.id)
                 }
               /> */}
                  </td>
                  {/* <td>{elem.subPrice}</td> */}
                  <td>
                    <button onClick={() => removeProduct(index)}>x</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Favorites
