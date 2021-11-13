import React, { createContext, useReducer } from 'react'
import axios from 'axios'
export const productsContext = createContext()

const INIT_STATE = {
    shoes: []
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, shoes: action.payload }
    default:
      return state
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const getProducts = async () => {
    const { data } = await axios(`http://localhost:8000/shoes`)
    dispatch({
      type: 'GET_PRODUCTS',
      payload: data
    })
  }


  return (
    <productsContext.Provider
      value={{
        shoes: state.shoes,
        getProducts
      }}
    >
      {children}
    </productsContext.Provider>
  )
}

export default ProductsContextProvider
