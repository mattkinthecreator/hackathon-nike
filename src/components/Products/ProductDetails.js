import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAuth } from '../../Contexts/AuthContext'
import { productsContext } from '../../Contexts/ProductsContext'
import AddColorImage from '../AddColorImage/AddColorImage'
import './ProductDetails.css'

const ProductDetails = () => {
  const { currentProduct, getCurrentProduct, addProductToCart } =
    useContext(productsContext)

  const [color, setColor] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { isAdmin } = useAuth()

  let id = useParams().id

  useEffect(() => {
    getCurrentProduct(id)
  }, [])

  return (
    <div>
      {currentProduct.title ? (
        <div className="shoes-details-wrapper">
          <div className="shoes-details__imgs">
            <img
              src={currentProduct.images[color].images}
              alt={currentProduct.title}
              className="shoes-details-img"
            />
          </div>
          <div className="shoes-details__info">
            <h2>{currentProduct.title}</h2>
            <p className="shoes-details-category">{currentProduct.category}</p>
            <p className="shoes-details-price">{currentProduct.price}$</p>
            <div>
              {currentProduct.images.map((item, index) => (
                <button
                  value={index}
                  onClick={() => setColor(index)}
                  className="shoes-color-btn"
                >
                  <img
                    src={item.images}
                    alt={item.color}
                    className="shoes-color"
                  />
                </button>
              ))}
            </div>
            <button
              className="shoes-details-cart-btn"
              onClick={() => addProductToCart(currentProduct)}
            >
              Add to cart
            </button>
            {isAdmin && (
              <button onClick={() => setIsModalOpen(true)}>
                Add new color
              </button>
            )}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
      {isModalOpen && (
        <AddColorImage
          currentProduct={currentProduct}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  )
}

export default ProductDetails
