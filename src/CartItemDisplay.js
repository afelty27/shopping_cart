import React, { useState, useEffect } from "react";
import "./App.css";

//FIX - value not updated when click up or down

function CartItemDisplay(props) {
  return (
    props.userCart.items.length > 0 &&
    props.userCart.items.map((index) => {
      return (
        <tr>
          <th scope="row">
            <div className="d-flex align-items-center">
              <img
                alt="Product"
                src={index.itemIcon}
                className="img-fluid rounded-3"
                style={{ width: 120 }}
              ></img>
              <div className="flex-column ms-4">
                <p className="mb-2">{index.itemName}</p>
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
                defaultValue={index.itemQuantity}
                onChange={(event) => {
                  props.updateCart(index.itemId, event.target.value);
                }}
              ></input>
            </div>
          </td>
          <td className="align-middle">
            <p className="mb-0" style={{ weight: 500 }}>
              ${index.itemPrice}
            </p>
          </td>

          <td className="align-middle">
            <div className="d-flex flex-row">
              <button
                className="btn btn-outline-secondary btn-sm"
                type="button"
                onClick={() => {
                  props.deleteItem(index.itemId);
                }}
              >
                x
              </button>
            </div>
          </td>
        </tr>
      );
    })
  );
}

export default CartItemDisplay;
