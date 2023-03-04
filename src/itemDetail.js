import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, useParams, Link } from "react-router-dom";

function ItemDetail(props) {
  console.log("NEW TEST:");
  console.log(props.shopState);
  const [item, setItem] = useState();

  const params = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = () => {
    let productId = params.id;
    console.log("Prod Id: " + productId);
    console.log("YES");
    console.log(props.shopState);
    console.log(props.shopState.items[0]);

    let index = -1;
    for (let i = 0; i < props.shopState.items.length; i++) {
      if (props.shopState.items[i].itemId == productId) {
        index = i;
      }
    }
    console.log(index);
    const item = props.shopState.items[index];
    console.log("item: ");
    console.log(item);
    setItem(item);
  };

  //OLD FUNCTION USING API CALL
  // const fetchItem = async () => {
  //   //https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}
  //   const fetchItem = await fetch(
  //     `https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`
  //   );
  //   const item = await fetchItem.json();
  //   setItem(item);
  //   console.log("awaited");
  //   console.log(item);
  //   console.log("id:");
  //   console.log(params.id);
  //   console.log(
  //     `https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`
  //   );
  // };

  //   if (item && item.data.item) {
  //     console.log("success");
  //     console.log(item.data);
  //   } else {
  //     console.log("problem here");
  //     console.log("Item: ");
  //     console.log(item);
  //     console.log("params:");
  //     console.log(params.id);
  //   }
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
