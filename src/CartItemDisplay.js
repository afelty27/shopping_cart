import React, { useState } from "react";
import "./App.css";

//FIX - value not updated when click up or down

function CartItemDisplay(props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="h-100 h-custom">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-item-center h-100">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="h5" scope="col">
                      Shopping Bag
                    </th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          alt="Product"
                          src={props.index.itemIcon}
                          className="img-fluid rounded-3"
                          style={{ width: 120 }}
                        ></img>
                        <div className="flex-column ms-4">
                          <p className="mb-2">{props.index.itemName}</p>
                          {/* <p className="mb-0">Could add description here</p> */}
                        </div>
                      </div>
                    </th>
                    <td className="align-middle">
                      <div className="d-flex flex-row">
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="0"
                          max="100"
                          defaultValue={props.index.itemQuantity}
                          onChange={(event) => {
                            setQuantity(event.target.value);
                          }}
                        ></input>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className="mb-0" style={{ weight: 500 }}>
                        ${props.index.itemPrice}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="cartDisplay">
    //   <img alt="Product pictue" id="" src={props.index.itemIcon}></img>
    //   <div className="price">Item Price: ${props.index.itemPrice}</div>
    //   <div>Quantity: {props.index.itemQuantity}</div>

    //   <input
    //     type="number"
    //     id="quantity"
    //     name="quantity"
    //     min="0"
    //     max="100"
    //     defaultValue={props.index.itemQuantity}
    //     onChange={(event) => {
    //       setQuantity(event.target.value);
    //     }}
    //   ></input>
    //   <button
    //     id="cartUpdateBtn"
    //     className="updateBtn"
    //     onClick={() => {
    //       props.updateCart(props.index.itemId, quantity);
    //     }}
    //   >
    //     Update Cart
    //   </button>
    //   <button
    //     className="deleteBtn"
    //     onClick={() => {
    //       props.deleteItem(props.index.itemId);
    //     }}
    //   >
    //     Delete from Cart
    //   </button>
    // </div>
  );
}

export default CartItemDisplay;
