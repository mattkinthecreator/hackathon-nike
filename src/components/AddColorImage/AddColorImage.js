import React, { useContext, useState } from 'react'
import { productsContext } from '../../Contexts/ProductsContext'

const AddColorImage = ({ currentProduct, setIsModalOpen }) => {
  const { addNewColorImage } = useContext(productsContext)

  const [imgColor, setImgColor] = useState('')
  const [img, setImg] = useState([])

  function handleImg(e) {
    const files = e.target.files
    let newArr = []
    for (let file of files) {
      const reader = new FileReader()
      reader.onloadend = () => {
        newArr.push(reader.result)
      }
      reader.readAsDataURL(file)
    }
    setImg(newArr)
  }

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
    <div>
      <input
        value={imgColor}
        type="text"
        placeholder="color"
        onChange={(e) => setImgColor(e.target.value)}
      />
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={(e) => handleImg(e)}
      />
      <button onClick={handleAddNewColor}>Add</button>
    </div>
  )
}

export default AddColorImage
