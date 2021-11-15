import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from '../../../Contexts/ProductsContext'
import './EditModal.css'

const EditModal = () => {
  const { editedShoe } = useContext(productsContext)

  const [editShoe, setEditShoe] = useState(editedShoe)

  function handleValue(e) {
    let newShoe = {
      ...editShoe,
    }
    newShoe[e.target.name] = e.target.value
    setEditShoe(newShoe)
  }

  return (
    <>
      {editShoe ? (
        <div className="modal">
          <input
            type="text"
            name="title"
            placeholder="title"
            value={editShoe.title}
            onChange={(e) => handleValue(e)}
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            value={editShoe.price}
            onChange={(e) => handleValue(e)}
          />
          <input
            type="text"
            name="category"
            placeholder="category"
            value={editShoe.category}
            onChange={(e) => handleValue(e)}
          />
          <div>
            <label>
              36
              <input
                type="checkbox"
                checked={editShoe.size.some((elem) => elem == 36)}
              />
            </label>
            <label>
              37
              <input
                type="checkbox"
                checked={editShoe.size.some((elem) => elem == 37)}
              />
            </label>
            <label>
              38
              <input
                type="checkbox"
                checked={editShoe.size.some((elem) => elem == 38)}
              />
            </label>
            <label>
              39
              <input
                type="checkbox"
                checked={editShoe.size.some((elem) => elem == 39)}
              />
            </label>
            <label>
              40
              <input
                type="checkbox"
                checked={editShoe.size.some((elem) => elem == 40)}
              />
            </label>
            <label>
              41
              <input
                type="checkbox"
                checked={editShoe.size.some((elem) => elem == 41)}
              />
            </label>
            <label>
              42
              <input
                type="checkbox"
                checked={editShoe.size.some((elem) => elem == 42)}
              />
            </label>
            <label>
              43
              <input
                type="checkbox"
                checked={editShoe.size.some((elem) => elem == 43)}
              />
            </label>
            <label>
              44
              <input
                type="checkbox"
                checked={editShoe.size.some((elem) => elem == 44)}
              />
            </label>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  )
}

export default EditModal
