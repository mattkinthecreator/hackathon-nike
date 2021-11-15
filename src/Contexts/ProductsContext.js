import React, { createContext, useReducer, useState } from 'react'
import axios from 'axios'
export const productsContext = createContext()

const INIT_STATE = {
  shoes: [],
  editedShoe: {},
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, shoes: action.payload }
    case 'GET_EDITED_SHOE':
      return { ...state, editedShoe: action.payload }
    default:
      return state
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  const [isEdit, setIsEdit] = useState(false)

  const getProducts = async (params) => {
    const { data } = await axios(`http://localhost:8000/shoes?${params}`)
    dispatch({
      type: 'GET_PRODUCTS',
      payload: data,
    })
  }

  const handleEditProduct = async (id) => {
    let { data } = await axios(`http://localhost:8000/shoes/${id}`)
    dispatch({
      type: 'GET_EDITED_SHOE',
      payload: data,
    })
    toggleModal()
  }

  function toggleModal() {
    setIsEdit((state) => !state)
  }

  return (
    <productsContext.Provider
      value={{
        shoes: state.shoes,
        editedShoe: state.editedShoe,
        getProducts,
        handleEditProduct,
        toggleModal,
        isEdit,
      }}
    >
      {children}
    </productsContext.Provider>
  )
}

export default ProductsContextProvider
