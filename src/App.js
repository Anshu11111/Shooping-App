import React from 'react'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App
