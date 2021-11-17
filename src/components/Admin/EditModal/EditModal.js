import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from '../../../Contexts/ProductsContext'
import './EditModal.css'

const EditModal = ({ searchVal }) => {
  const { editedShoe, saveEditShoe } = useContext(productsContext)

  const [editShoe, setEditShoe] = useState(editedShoe)

  function handleValue(e) {
    let newShoe = {
      ...editShoe,
    }
    newShoe[e.target.name] = e.target.value
    setEditShoe(newShoe)
  }

  function toggleSize(e) {
    let newShoe = {
      ...editShoe,
    }
    if (newShoe.size.indexOf(e.target.value) === -1) {
      newShoe.size.push(e.target.value)
      newShoe.size.sort((a, b) => a - b)
      setEditShoe(newShoe)
    } else {
      newShoe.size.sort((a, b) => a - b)
      newShoe.size = newShoe.size.filter((item) => item !== e.target.value)
      setEditShoe(newShoe)
    }
  }

  console.log(editShoe)

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
                value={'36'}
                type="checkbox"
                checked={editShoe.size ? editShoe.size.includes('36') : false}
                onChange={(e) => toggleSize(e)}
              />
            </label>
            <label>
              37
              <input
                value={'37'}
                type="checkbox"
                checked={editShoe.size ? editShoe.size.includes('37') : false}
                onChange={(e) => toggleSize(e)}
              />
            </label>
            <label>
              38
              <input
                value={'38'}
                type="checkbox"
                checked={editShoe.size ? editShoe.size.includes('38') : false}
                onChange={(e) => toggleSize(e)}
              />
            </label>
            <label>
              39
              <input
                value={'39'}
                type="checkbox"
                checked={editShoe.size ? editShoe.size.includes('39') : false}
                onChange={(e) => toggleSize(e)}
              />
            </label>
            <label>
              40
              <input
                value={'40'}
                type="checkbox"
                checked={editShoe.size ? editShoe.size.includes('40') : false}
                onChange={(e) => toggleSize(e)}
              />
            </label>
            <label>
              41
              <input
                value={'41'}
                type="checkbox"
                checked={editShoe.size ? editShoe.size.includes('41') : false}
                onChange={(e) => toggleSize(e)}
              />
            </label>
            <label>
              42
              <input
                value={'42'}
                type="checkbox"
                checked={editShoe.size ? editShoe.size.includes('42') : false}
                onChange={(e) => toggleSize(e)}
              />
            </label>
            <label>
              43
              <input
                value={'43'}
                type="checkbox"
                checked={editShoe.size ? editShoe.size.includes('43') : false}
                onChange={(e) => toggleSize(e)}
              />
            </label>
            <label>
              44
              <input
                value={'44'}
                type="checkbox"
                checked={editShoe.size ? editShoe.size.includes('44') : false}
                onChange={(e) => toggleSize(e)}
              />
            </label>
          </div>
          <button
            onClick={() => saveEditShoe(editShoe.id, editShoe, searchVal)}
          >
            Сохранить
          </button>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  )
}

export default EditModal
