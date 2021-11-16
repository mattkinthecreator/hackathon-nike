import axios from 'axios'
import React, { useState } from 'react'
import './AddProduct.css'

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [size, setSize] = useState([])
  const [imgColor, setImgColor] = useState('')
  const [img, setImg] = useState([])
  const [category, setCategory] = useState('')

  function handleAddProduct() {
    let shoes = {
      title,
      price,
      size,
      images: [
        {
          color: imgColor,
          images: img,
        },
      ],
      category,
    }
    axios.post(' http://localhost:8000/shoes', shoes)
    setTitle('')
    setPrice('')
    setImgColor('')
    setImg('')
    setCategory('')
  }

  function addSize(val) {
    let newSize = [...size]
    if (newSize.indexOf(val) === -1) {
      newSize.push(val)
      newSize.sort((a, b) => a - b)
      setSize(newSize)
    } else {
      newSize.sort((a, b) => a - b)
      setSize(newSize.filter((item) => item !== val))
    }
  }

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

  console.log(img, 'files in state')

  return (
    <div className="addProduct">
      <h2>Add product</h2>
      <input
        type="text"
        placeholder="TITLE"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="PRICE"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="IMAGE COLOR"
        onChange={(e) => setImgColor(e.target.value)}
      />
      <input
        type="file"
        placeholder="IMAGE"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={(e) => handleImg(e)}
      />
      <input
        type="text"
        placeholder="CATEGORY"
        onChange={(e) => setCategory(e.target.value)}
      />
      <div className="sizes">
        <div className="size">
          <label>
            36
            <input
              type="checkbox"
              placeholder="size"
              value={36}
              onClick={(e) => addSize(e.target.value)}
            />
          </label>
        </div>
        <div className="size">
          <label>
            37
            <input
              type="checkbox"
              placeholder="size"
              value={37}
              onClick={(e) => addSize(e.target.value)}
            />
          </label>
        </div>
        <div className="size">
          <label>
            38
            <input
              type="checkbox"
              placeholder="size"
              value={38}
              onClick={(e) => addSize(e.target.value)}
            />
          </label>
        </div>
        <div className="size">
          <label>
            3
            <input
              type="checkbox"
              placeholder="size"
              value={39}
              onClick={(e) => addSize(e.target.value)}
            />
          </label>
        </div>
        <div className="size">
          <label>
            40
            <input
              type="checkbox"
              placeholder="size"
              value={40}
              onClick={(e) => addSize(e.target.value)}
            />
          </label>
        </div>
        <div className="size">
          <label>
            41
            <input
              type="checkbox"
              placeholder="size"
              value={41}
              onClick={(e) => addSize(e.target.value)}
            />
          </label>
        </div>
        <div className="size">
          <label>
            42
            <input
              type="checkbox"
              placeholder="size"
              value={42}
              onClick={(e) => addSize(e.target.value)}
            />
          </label>
        </div>
        <div className="size">
          <label>
            43
            <input
              type="checkbox"
              placeholder="size"
              value={43}
              onClick={(e) => addSize(e.target.value)}
            />
          </label>
        </div>
        <div className="size">
          <label>
            44
            <input
              type="checkbox"
              placeholder="size"
              value={44}
              onClick={(e) => addSize(e.target.value)}
            />
          </label>
        </div>
      </div>
      <button className="add-btn" onClick={handleAddProduct}>
        ADD
      </button>
    </div>
  )
}

export default AddProduct
