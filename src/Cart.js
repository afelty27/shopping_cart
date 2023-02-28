import React from "react";
import "./App.css";
import CartItemDisplay from "./CartItemDisplay";

//https://mdbootstrap.com/docs/standard/extended/shopping-carts/

function Cart(props) {
  console.log("cart: ");
  console.log(props.userCart);

  return (
    <div className="App container align-items-center">
      <div className="h-100 h-custom">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-item-center h-100">
            <div className="col">
              <div className="table-responsive">
                <div className="table">
                  <thead>
                    <tr>
                      <th className="h5" scope="col">
                        Shopping Cart
                      </th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      {/* <th scope="col">Update Cart</th> */}
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CartItemDisplay
                      userCart={props.userCart}
                      deleteItem={props.deleteItem}
                      updateCart={props.updateCart}
                    />
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cartSummary">
        <div className="d-flex">
          <h4>Cart Total: ${props.userCart.cartTotal}</h4>
          <button
            className="btn btn-primary btn-sm "
            type="button"
            onClick={() => {
              console.log("Local Storage Pressed");
              console.log("userCart: ");
              console.log(props.userCart);
              //local storage can only handle strings so stringify the object. Must use JSON.parse(retrievedObject) when retrieving it
              localStorage.setItem("cart", JSON.stringify(props.userCart));
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
