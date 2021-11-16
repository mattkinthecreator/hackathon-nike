import axios from 'axios'
import React, { useState } from 'react'
import EditIcon from '../../../assets/img/edit.png'
import DeleteIcon from '../../../assets/img/x.png'

const EditProduct = () => {
  const [shoes, setShoes] = useState([])

  async function handleSearch(value) {
    let { data } = await axios(`http://localhost:8000/shoes?q=${value}`)
    setShoes(data)
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="search product"
      />
      <div className="shoes-container">
        {shoes.map((item) => {
          return (
            <div key={item.id}>
              <div className="button-wrapper">
                <button>
                  <img
                    src={EditIcon}
                    alt="edit icon"
                    style={{ width: '20px' }}
                  />
                </button>
                <button>
                  <img
                    src={DeleteIcon}
                    alt="delete icon"
                    style={{ width: '20px' }}
                  />
                </button>
              </div>
              <p>{item.title}</p>
              <p>{item.category}</p>
              <img
                src={item.images[0].images}
                alt={item.title}
                style={{ width: '300px' }}
              />
              <p>{item.price} $</p>
              <p>
                {item.size.map((size) => (
                  <span>{size} </span>
                ))}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EditProduct
