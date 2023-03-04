import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

//https://mdbootstrap.com/docs/standard/extended/card-columns/

function Shop(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  //calls api and retrieves 10 items to display in shop
  //shop items saved to state
  const fetchItems = async () => {
    //check to see if shop state is already filled, if so, use it, else call api
    if (props.shopState.length === 0) {
      //get 10 items from api and set local state
      let data = await fetch(
        "https://fortnite-api.theapinetwork.com/upcoming/get"
      );

      const itemsJson = await data.json();
      const itemsArray = itemsJson.data.splice(0, 10);
      setItems(itemsArray);
      props.setShopState(itemsArray);
    } else {
      //set items to current shop state from app.js
      setItems(props.shopState.items);
    }
  };

  //generate random integer between 0 and max
  //max: integer value
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="row row-cols-2 g-3">
      {items.length > 0 &&
        items.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              key={getRandomInt(10000)}
              className="card h-100 m-3 width: 18rem;"
            >
              <Link
                to={`/shop/${item.itemId}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  id=""
                  src={item.item.images.icon}
                  className="card-img-top"
                  alt="Product"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{item.item.name}</h5>
                </div>
                <p className="card-text">{item.item.description}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Shop;
