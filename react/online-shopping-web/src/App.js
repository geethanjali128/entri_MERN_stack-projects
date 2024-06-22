import React, { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './routes/Navbar'
import Home from './routes/Home'
import Cart from './routes/Cart'
import data from './Data'

function App() {

const[cartProducts,setCartProducts]=useState([])
// const[increaseCart,setIncreaseCart]=useState(1)
// const[decreaseCart,setDecreaseCart]=useState(1)

const handleCartProducts=(product)=>{
  setCartProducts((cartProducts)=>[...cartProducts,{item:product,quantity:1}])
}
const {productItems}=data;
  // console.log(productItems)

  // const HandleIncrement=async(product)=>{
  //   product.filter((p,i)=>{
      
  //   })
  // }







  return (
    <div>
      <Router>
         <Navbar/>
        <Routes>
         <Route  path='/' exact element={<Home  productItems={productItems}  handleCartProducts={handleCartProducts}/>}/>
        <Route  path='/Cart' exact element={<Cart cartProducts={cartProducts} />}/>
           </Routes>
      </Router>
    </div>
  )
}

export default App
