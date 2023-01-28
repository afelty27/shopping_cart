import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

//https://mdbootstrap.com/docs/standard/extended/card-columns/

function Shop(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    console.log("enter fetchItems");

    //get 10 items from api and set local state
    let data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const itemsJson = await data.json();
    const itemsArray = itemsJson.data.splice(0, 10);
    console.log(itemsArray);
    setItems(itemsArray);

    //??
    props.setShopState(itemsArray);
    console.log("exit fetch items");
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
          <div className="col">
            <div key={getRandomInt(10000)} className="card m-3">
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

      {/* <div className="col">
        <div className="card">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
            class="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">THIS IS A BUNCH OF TEXTS</p>
          </div>
        </div>
      </div> */}
    </div>

    //-------------------OLD--------------------------
    //     <div className="shop">
    //         {items.length > 0 &&
    //             <div>
    //                 {items.map(item => (

    //                    <div key={getRandomInt(10000)} className="card">
    //                         <div className="container">
    //                             <Link to={`/shop/${item.itemId}`} >{item.item.name}</Link>
    //                             <img id='' src={item.item.images.icon}></img>
    //                             <p>{item.item.description}</p>
    //                         </div>
    //                    </div>
    //                 ))}
    //             </div>

    //         }
    //     </div>
  );
}

export default Shop;
