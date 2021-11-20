import React, { useContext, useState } from 'react'
import { productsContext } from '../../Contexts/ProductsContext'
import './AddColorImage.css'

const AddColorImage = ({ currentProduct, setIsModalOpen }) => {
  const { addNewColorImage } = useContext(productsContext)

  const [imgColor, setImgColor] = useState('')
  const [img, setImg] = useState('')

  function handleAddNewColor() {
    let newColor = {
      color: imgColor,
      images: img,
    }
    let newProduct = { ...currentProduct }
    newProduct.images.push(newColor)
    addNewColorImage(newProduct.id, newProduct)
    setIsModalOpen(false)
    setImgColor('')
  }

  return (
    <div className="add-color-modal">
      <input
        value={imgColor}
        type="text"
        placeholder="Color"
        onChange={(e) => setImgColor(e.target.value)}
      />
      <input
        type="text"
        onChange={(e) => setImg(e.target.value)}
        placeholder="Image"
      />
      <button onClick={handleAddNewColor}>Add</button>
    </div>
  )
}

export default AddColorImage
