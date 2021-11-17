import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPanel from './components/Admin/AdminPanel/AdminPanel'
import Auth from './components/Auth/Auth'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ProductDetails from './components/Products/ProductDetails'
import AuthContextProvider from './Contexts/AuthContext'
import ProductList from './components/Products/ProductList'
import ProductsContextProvider from './Contexts/ProductsContext'
import AddProduct from './components/Admin/AddProduct/AddProduct'
import Favorites from './components/Favorites/Favorites'

const MainRoutes = () => {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/shoes" element={<ProductList />} />
            <Route path="/favorites" element={<Favorites/>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ProductsContextProvider>
  )
}

export default MainRoutes
