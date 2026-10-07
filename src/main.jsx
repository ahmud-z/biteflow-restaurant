import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import DishDetailsPage from './components/DishDetailsPage.jsx'
import DishLayout from './layouts/DishLayout.jsx'
import Login from './components/auth/Login.jsx'
import AllDishesPage from './components/AllDishesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<App />} />
        <Route path="/login" element={<Login />} />

        <Route path="/menu" element={<AllDishesPage />} />
        <Route path='/dish' element={<DishLayout />}>
          <Route path=":slug" element={<DishDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
