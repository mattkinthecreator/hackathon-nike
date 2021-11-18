import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import AdminPanel from './components/Admin/AdminPanel/AdminPanel'
import Auth from './components/Auth/Auth'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ProductDetails from './components/Products/ProductDetails'
import ProductList from './components/Products/ProductList'
import { useAuth } from './Contexts/AuthContext'

const MainRoutes = () => {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shoes/:id" element={<ProductDetails />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/shoes" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
