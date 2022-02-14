import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Header from '../component/Header'
function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Header" element={<Header />} />
    </Routes>
  )
}

export default Router