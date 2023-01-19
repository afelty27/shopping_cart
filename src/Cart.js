import { mdiPrinterPosOff } from '@mdi/js';
import React from 'react';
import './App.css'
import CartItemDisplay from './CartItemDisplay'

function Cart(props) {

  console.log("cart: ")
  console.log(props.userCart)
  
  return (
    <div className="App">
      <h2>Cart</h2>
      <div className='headerRow'></div>
      <div className="products">
       
        {props.userCart.items.length > 0 && 
          <div>
            {props.userCart.items.map( (index) => {
              return <CartItemDisplay index={index} deleteItem={props.deleteItem} updateCart={props.updateCart} />
            })}
          </div>
        }

      </div>

      <div className='cartSummary'>
        <h2>Cart Total: ${props.userCart.cartTotal}</h2>
        <button className='checkoutBtn'>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;