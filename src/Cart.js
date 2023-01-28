import React from "react";
import "./App.css";
import CartItemDisplay from "./CartItemDisplay";

//https://mdbootstrap.com/docs/standard/extended/shopping-carts/

function Cart(props) {
  console.log("cart: ");
  console.log(props.userCart);

  return (
    <div className="App">
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
                      <th scope="col">Update Cart</th>
                      <th scope="col">Delete</th>
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

      {/* <div className="headerRow"></div>
      <div className="products">
        {props.userCart.items.length > 0 && (
          <div>
            {props.userCart.items.map((index) => {
              return (
                <CartItemDisplay
                  index={index}
                  deleteItem={props.deleteItem}
                  updateCart={props.updateCart}
                />
              );
            })}
          </div>
        )}
      </div> */}

      <div className="cartSummary">
        <h2>Cart Total: ${props.userCart.cartTotal}</h2>
        <button
          className="btn btn-success"
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
  );
}

export default Cart;
