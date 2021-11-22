import axios from 'axios'
import React, { useState } from 'react'
import './AddProduct.css'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [size, setSize] = useState([])
  const [imgColor, setImgColor] = useState('')
  const [img, setImg] = useState('')
  const [category, setCategory] = useState('')

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

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
        type="text"
        placeholder="IMAGE"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={(e) => setImg(e.target.value)}
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value="Спортивный стиль">Спортивный стиль</MenuItem>
            <MenuItem value="Jordan">Jordan</MenuItem>
            <MenuItem value="Бег">Бег</MenuItem>
            <MenuItem value="Баскетбол">Баскетбол</MenuItem>
            <MenuItem value="Футбол">Футбол</MenuItem>
            <MenuItem value="Бейсбол">Бейсбол</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className="sizes">
        <div className="size">
          <input
            type="checkbox"
            placeholder="size"
            value={36}
            onClick={(e) => addSize(e.target.value)}
            id="36"
          />
          <label for="36">36</label>
        </div>
        <div className="size">
          <input
            type="checkbox"
            placeholder="size"
            value={37}
            onClick={(e) => addSize(e.target.value)}
            id="37"
          />
          <label for="37">37</label>
        </div>
        <div className="size">
          <input
            type="checkbox"
            placeholder="size"
            value={38}
            onClick={(e) => addSize(e.target.value)}
            id="38"
          />
          <label for="38">38</label>
        </div>
        <div className="size">
          <input
            type="checkbox"
            placeholder="size"
            value={39}
            onClick={(e) => addSize(e.target.value)}
            id="39"
          />
          <label for="39">39</label>
        </div>
        <div className="size">
          <input
            type="checkbox"
            placeholder="size"
            value={40}
            onClick={(e) => addSize(e.target.value)}
            id="40"
          />
          <label for="40">40</label>
        </div>
        <div className="size">
          <input
            type="checkbox"
            placeholder="size"
            value={41}
            onClick={(e) => addSize(e.target.value)}
            id="41"
          />
          <label for="41">41</label>
        </div>
        <div className="size">
          <input
            type="checkbox"
            placeholder="size"
            value={42}
            onClick={(e) => addSize(e.target.value)}
            id="42"
          />
          <label for="42">42</label>
        </div>
        <div className="size">
          <input
            type="checkbox"
            placeholder="size"
            value={43}
            onClick={(e) => addSize(e.target.value)}
            id="43"
          />
          <label for="43">43</label>
        </div>
        <div className="size">
          <input
            type="checkbox"
            placeholder="size"
            value={44}
            onClick={(e) => addSize(e.target.value)}
            id="44"
          />
          <label for="44">44</label>
        </div>
      </div>
      <button onClick={handleAddProduct} className="add-btn">
        Add
      </button>
    </div>
  )
}

export default AddProduct
