import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import AdminPanel from './components/Admin/AdminPanel/AdminPanel'
import Auth from './components/Auth/Auth'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ProductDetails from './components/Products/ProductDetails'
import ProductList from './components/Products/ProductList'
import { useAuth } from './Contexts/AuthContext'
import Favorites from './components/Favorites/Favorites'
import Order from './components/Order/Order'
import history from './helpers/history'

const MainRoutes = () => {
  const { user, isAdmin } = useAuth()
  return (
    <Router location={history.location} navigator={history}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shoes/:id" element={<ProductDetails />} />
        {isAdmin && <Route path="/admin" element={<AdminPanel />} />}
        <Route path="/shoes" element={<ProductList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  )
}

export default MainRoutes
