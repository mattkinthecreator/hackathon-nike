import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { productsContext } from '../../Contexts/ProductsContext'
import AddColorImage from '../AddColorImage/AddColorImage'

const ProductDetails = () => {
  const { currentProduct, getCurrentProduct } = useContext(productsContext)

  const [color, setColor] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
            />
          </div>
          <div className="shoes-details__info">
            <h2>{currentProduct.title}</h2>
            <p>{currentProduct.category}</p>
            {currentProduct.images.map((item, index) => (
              <button value={index} onClick={() => setColor(index)}>
                {item.color}
              </button>
            ))}
            <p>{currentProduct.price}$</p>
            <button onClick={() => setIsModalOpen(true)}>Add new color</button>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
      {isModalOpen && <AddColorImage currentProduct={currentProduct} setIsModalOpen={setIsModalOpen} />}
    </div>
  )
}

export default ProductDetails
