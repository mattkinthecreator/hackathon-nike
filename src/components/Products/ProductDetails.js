import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { productsContext } from '../../Contexts/ProductsContext'

const ProductDetails = () => {
  const { currentProduct, getCurrentProduct } = useContext(productsContext)

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
              src={currentProduct.images[0].images}
              alt={currentProduct.title}
            />
          </div>
          <div className="shoes-details__info">
            <h2>{currentProduct.title}</h2>
            <p>{currentProduct.category}</p>
            <p>{currentProduct.price}$</p>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  )
}

export default ProductDetails
