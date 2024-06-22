import React from 'react'
import './Cart.css'

const Cart = ({cartProducts}) => {

  var total=0
  cartProducts.map((product)=>{
    return total+=product.item.price
  })


  return (
    <div className='row container' text-center>{
      cartProducts.map((product)=>(<div className="card"  key={product.item.id} style={{width: "18rem"}}>
  <img src={product.item.img} className="card-img-top" alt="product"/>
  <div class="card-body">
    <h5 class="card-title">{product.item.name}</h5>
    <h6 class="card-title">{product.item.price}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">+</button>
  <button type="button" class="btn btn-primary">{product.quantity}</button>
  <button type="button" class="btn btn-primary">-</button>
</div>
   
  </div>
  </div>))
      }
      <div><div class="card">
  <h5 class="card-header">Total Price</h5>
  <div class="card-body">
    <h5 class="card-title">{total}</h5>
    
    <a href="#" class="btn btn-primary">Make Payment</a>
  </div>
</div></div>
    </div>
  )
}

export default Cart
