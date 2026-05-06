import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Product from './Pages/Product'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import CartItems from './Pages/CartItems'
import Signup from './Pages/Signup'
import ProductDetails from './Pages/ProductDetails.jsx'
import Wishlist from './Pages/Wishlist'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

        {/* ✅ Product list page */}
        <Route path='/product' element={<Product />} />

        {/* ✅ Product details page */}
        <Route path='/product/:id' element={<ProductDetails />} />

        <Route path='/cartitems' element={<CartItems />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App;

