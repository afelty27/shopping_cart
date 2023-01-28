import React, { useState } from "react";
import "./App.css";

//FIX - value not updated when click up or down

function CartItemDisplay(props) {
  const [quantity, setQuantity] = useState(0);

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
                  setQuantity(event.target.value);
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
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  console.log(index);
                  props.updateCart(index.itemId, quantity);
                }}
              >
                Update
              </button>
            </div>
          </td>
          <td className="align-middle">
            <div className="d-flex flex-row">
              <button
                className="btn btn-danger btn-sm"
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

    // <tr>
    //   <th scope="row">
    //     <div className="d-flex align-items-center">
    //       <img
    //         alt="Product"
    //         src={props.index.itemIcon}
    //         className="img-fluid rounded-3"
    //         style={{ width: 120 }}
    //       ></img>
    //       <div className="flex-column ms-4">
    //         <p className="mb-2">{props.index.itemName}</p>
    //       </div>
    //     </div>
    //   </th>
    //   <td className="align-middle">
    //     <div className="d-flex flex-row">
    //       <input
    //         type="number"
    //         id="quantity"
    //         name="quantity"
    //         min="0"
    //         max="100"
    //         defaultValue={props.index.itemQuantity}
    //         onChange={(event) => {
    //           setQuantity(event.target.value);
    //         }}
    //       ></input>
    //     </div>
    //   </td>
    //   <td className="align-middle">
    //     <p className="mb-0" style={{ weight: 500 }}>
    //       ${props.index.itemPrice}
    //     </p>
    //   </td>
    // </tr>

    //----------------------------------------------OLD
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
