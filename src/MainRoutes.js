import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import ProductDetails from './components/Products/ProductDetails'
import AuthContextProvider from './Contexts/AuthContext'
import ProductList from './components/Products/ProductList'
import ProductsContextProvider from './Contexts/ProductsContext'
import AddProduct from './components/Admin/AddProduct/AddProduct'

const MainRoutes = () => {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/shoes" element={<ProductList/>}/>
            <Route path="/add" element={<AddProduct/>}/>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ProductsContextProvider>
  )
}

export default MainRoutes
