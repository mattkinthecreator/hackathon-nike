import React, { createContext, useReducer, useState } from 'react'
import axios from 'axios'
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from '../helpers/cartFunction'
export const productsContext = createContext()

const INIT_STATE = {
  shoes: [],
  editedShoe: {},
  cart: {},
  currentProduct: {},
  cartLength: getCountProductsInCart(),
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, shoes: action.payload }
    case 'GET_EDITED_SHOE':
      return { ...state, editedShoe: action.payload }
    case 'CHANGE_CART_COUNT':
      return { ...state, cartLength: action.payload }
    case 'GET_CART':
      return { ...state, cart: action.payload }
    case 'GET_CURRENT_PRODUCT':
      return { ...state, currentProduct: action.payload }
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

  const handleDeleteProduct = async (id, searchVal) => {
    await axios.delete(`http://localhost:8000/shoes/${id}`)
    getProducts(`q=${searchVal}`)
  }

  function toggleModal() {
    setIsEdit((state) => !state)
  }
  const addProductToCart = (shoes) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (!cart) {
      cart = {
        shoes: [],
        totalPrice: 0,
      }
    }
    let newProduct = {
      item: shoes,
      count: 1,
      subPrice: 0,
    }
    console.log(cart)
    let filteredCart = cart.shoes.filter((elem) => elem.item.id === shoes.id)
    if (filteredCart.length > 0) {
      cart.shoes = cart.shoes.filter((elem) => elem.item.id !== shoes.id)
    } else {
      cart.shoes.push(newProduct)
    }
    newProduct.subPrice = calcSubPrice(newProduct)
    cart.totalPrice = calcTotalPrice(cart.shoes)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch({
      type: 'CHANGE_CART_COUNT',
      payload: cart.shoes.length,
    })
  }

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (!cart) {
      cart = {
        shoes: [],
        totalPrice: 0,
      }
    }
    dispatch({
      type: 'GET_CART',
      payload: cart,
    })
  }

  function changeProductCount(count, id) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart.shoes = cart.shoes.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count
        elem.subPrice = calcSubPrice(elem)
      }
      return elem
    })
    cart.totalPrice = calcTotalPrice(cart.shoes)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
  }

  async function saveEditShoe(id, shoe, searchVal) {
    await axios.patch(`http://localhost:8000/shoes/${id}`, shoe)
    toggleModal()
    getProducts(`q=${searchVal}`)
  }

  async function getCurrentProduct(id) {
    let { data } = await axios(`http://localhost:8000/shoes/${id}`)
    dispatch({
      type: 'GET_CURRENT_PRODUCT',
      payload: data,
    })
  }

  async function addNewColorImage(id, shoe) {
    await axios.patch(`http://localhost:8000/shoes/${id}`, shoe)
    getCurrentProduct(id)
  }

  return (
    <productsContext.Provider
      value={{
        shoes: state.shoes,
        editedShoe: state.editedShoe,
        cartLength: state.cartLength,
        cart: state.cart,
        currentProduct: state.currentProduct,
        getProducts,
        handleEditProduct,
        handleDeleteProduct,
        toggleModal,
        isEdit,
        addProductToCart,
        changeProductCount,
        getCart,
        saveEditShoe,
        getCurrentProduct,
        addNewColorImage,
      }}
    >
      {children}
    </productsContext.Provider>
  )
}

export default ProductsContextProvider
