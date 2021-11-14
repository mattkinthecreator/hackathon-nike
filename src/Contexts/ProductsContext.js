import React, { createContext, useReducer } from 'react'
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
  }

  return (
    <productsContext.Provider
      value={{
        shoes: state.shoes,
        getProducts,
        editedShoe: state.editedShoe,
        handleEditProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  )
}

export default ProductsContextProvider
