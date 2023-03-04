import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, useParams, Link } from "react-router-dom";

function ItemDetail(props) {
  const [item, setItem] = useState();
  const params = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  //fetches the item to be displayed on the page using id in URL
  const fetchItem = () => {
    let productId = params.id;

    let index = -1;
    for (let i = 0; i < props.shopState.items.length; i++) {
      if (props.shopState.items[i].itemId == productId) {
        index = i;
      }
    }
    const item = props.shopState.items[index];
    setItem(item);
  };

  return (
    <div>
      <div className="productDisplay">
        <img
          src={item && item.item.images.icon ? `${item.item.images.icon}` : ""}
        ></img>
        <div className="productInfo">
          <h1 id="name">
            {item && item.item.name ? item.item.name : "Not loaded yet"}
          </h1>
          <div id="price">
            ${item && item.item.cost ? `${item.item.cost}` : "Not loaded yet"}
          </div>
          <div className="specs">
            {item && item.item.description
              ? item.item.description
              : "Not loaded yet"}
          </div>

          <input
            id="itemDetailQuant"
            type="number"
            name="quantity"
            min="0"
            max="100"
            defaultValue="1"
          ></input>
          <button
            className="addBtn"
            onClick={() => {
              item && item.item
                ? props.addProductToCart(
                    item,
                    document.getElementById("itemDetailQuant").value
                  )
                : console.log("error");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
