import React from 'react';
import './App.css'

//FIX - value not updated when click up or down

function cartItemDisplay(props) {

  return (
    <div className="cartDisplay">
        <img id='' src={props.index.itemIcon}></img>
        <div className='price'>Item Price: ${props.index.itemPrice}</div>
        <div>Quantity: {props.index.itemQuantity}</div>
        
        <input type="number" id="quantity" name="quantity" min="0" max="100" defaultValue={props.index.itemQuantity}></input>
        <button id='cartUpdateBtn' className='updateBtn' onClick={ () => {props.updateCart(props.index.itemId, document.getElementById("quantity").value)}}>Update Cart</button>
        <button className='deleteBtn' onClick={ () => {props.deleteItem(props.index.itemId)}}>Delete from Cart</button>
    </div>
  );


}

export default cartItemDisplay;
