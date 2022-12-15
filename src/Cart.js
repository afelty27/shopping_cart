import React from 'react';
import './App.css'

function Cart() {
  return (
    <div className="App">
      <h2>Cart</h2>
      <div className='headerRow'></div>
      <div className="products"></div>
      <div className='cartSummary'>
        <h2>Cart Total</h2>
        <div>Total ${"ENTER CART TOTAL HERE"}</div>
        <button className='checkoutBtn'>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;