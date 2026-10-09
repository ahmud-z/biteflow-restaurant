import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import DishDetailsPage from './components/DishDetailsPage.jsx'
import DishLayout from './layouts/DishLayout.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import AllDishesPage from './components/AllDishesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CartPage from './components/CartPage.jsx'
import { CartProvider } from './context/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dishes" element={<AllDishesPage />} />
          <Route path='/dish' element={<DishLayout />}>
            <Route path=":slug" element={<DishDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
)
