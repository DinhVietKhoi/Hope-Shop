import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../component/Header'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Notfound from '../pages/Notfound'
function Router(props) {
  return (
    <Routes>
        <Route 
          path="/" 
          element=
            {
              <Home 
                addProduct={props.addProduct}
                listProduct = {props.listProduct}
              />
            } 
        />
        <Route 
          path="/Products" 
          element=
            {
              <Products 
                addProduct={props.addProduct}
                listProduct = {props.listProduct}
              />
            } 
        />
        <Route 
          path='/Cart' 
          element=
            {<Cart 
              handleRemove={props.handleRemove}
              product={props.product} 
            />
          }
        />
        <Route path='*' element={<Notfound />}/>
    </Routes>
  )
}

export default Router