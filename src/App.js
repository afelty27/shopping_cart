import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";
import ItemDetail from "./ItemDetail";
import Footer from "./Footer.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  //state and update state functions for shop and cart
  const [shopItems, setShopItems] = useState([]);

  const updateShop = (itemList) => {
    setShopItems((prevState) => {
      console.log("SET SHOP ITEMS:");
      console.log(itemList);
      let newList = itemList;
      if (itemList[0].item.cost == "???") {
        for (let i = 0; i < newList.length; i++) {
          newList[i].item.cost = getRandomInt(50);
        }
      }

      return {
        items: newList,
      };
    });
  };

  //set initial cart items in local storage
  const getLocalStorageCartItems = () => {
    console.log("enter getLocalStorageCartItems");
    let newCartData = JSON.parse(localStorage.getItem("cart"));
    console.log(`local storage data is: ${newCartData}`);

    if (newCartData === null) {
      return [];
    } else {
      console.log(`LocalStorage cart item: ${newCartData.items}`);
      return newCartData.items;
    }
  };

  //set initial cart total in local storage
  const getLocalStorageCartTotal = () => {
    let newCartData = JSON.parse(localStorage.getItem("cart"));
    if (newCartData === null) {
      return 0;
    } else {
      return newCartData.cartTotal;
    }
  };

  const [cart, setCart] = useState({
    items: getLocalStorageCartItems(),
    cartTotal: getLocalStorageCartTotal(),
  });

  console.log("cart items: " + cart.items);

  //set cart total from start of program
  useEffect(() => {
    console.log("enter useEffect");
    console.log(cart);
    updateCartTotal();
  }, [cart["items"]]);

  console.log("shop");
  console.log(shopItems);

  //adds new item object to cart item list
  //newProdObj: object from the api call of product being added
  //quantity: integer of how many of the object are requested
  const addProductToCart = (newProdObj, quantity) => {
    console.log("ENTER ADD TO PRODUCT CART");
    console.log("NEWPRODOBJ:");
    console.log(newProdObj);
    //ensure item is not in cart already
    if (findCartItem(newProdObj.itemId) === -1) {
      console.log("price: " + newProdObj.item.cost);
      let newObj = {
        key: getRandomInt(10000),
        itemName: newProdObj.item.name,
        itemId: newProdObj.itemId,
        itemDescription: newProdObj.item.description,
        itemIcon: newProdObj.item.images.icon,
        itemPrice: newProdObj.item.cost,
        itemQuantity: quantity,
      };

      let newList = cart.items;
      newList.push(newObj);

      setCart((prevState) => {
        return {
          ...prevState,
          ["items"]: newList,
        };
      });
    } else {
      //item is already in cart
    }

    updateCartTotal();
  };

  //updates the quantity of an object already in cart
  //prodId: string containing id of the desired product
  //newQuantity: integer of new quantity value of the desired product
  const updateProductCart = (prodId, newQuantity) => {
    console.log("enter updateCart");
    console.log("prod Id: " + prodId);
    console.log("new quantity: " + newQuantity);

    setCart((prevState) => {
      console.log("enter set cart");

      //ensure item is in cart
      if (findCartItem(prodId) != -1) {
        console.log("enter if");
        const newObj = [...cart.items];
        newObj[findCartItem(prodId)].itemQuantity = newQuantity;
        console.log("check update quant: ");
        console.log(newObj[findCartItem(prodId)].itemQuantity);

        return {
          ...prevState,
          ["items"]: newObj,
        };
      }
    });
    updateCartTotal();
  };

  //delete particular product from cart state
  //prodId: string containing id of the product to be deleted
  const deleteFromProductCart = (prodId) => {
    setCart((prevState) => {
      const newList = [...cart["items"]];
      newList.splice(findCartItem(prodId), 1);

      return {
        ...prevState,
        ["items"]: newList,
      };
    });
  };

  //updates cart value of state based on current products in cart
  //works
  const updateCartTotal = () => {
    console.log("enter updateTotal");
    let newTotal = 0;

    for (let i = 0; i < cart.items.length; i++) {
      console.log("new quant: " + cart.items[i].itemQuantity);

      newTotal += cart.items[i].itemPrice * cart.items[i].itemQuantity;
    }

    setCart((prevState) => {
      return {
        ...prevState,
        ["cartTotal"]: newTotal,
      };
    });

    console.log("newTotal: " + newTotal);
  };

  //takes id and searches items list in state for the index of the object with that id. Returns index of correct object, or -1 if not found
  //matchId: string containing id of desired product
  //works
  const findCartItem = (matchId) => {
    for (let i = 0; i < cart.items.length; i++) {
      if (cart.items[i].itemId == matchId) {
        return i;
      }
    }

    return -1;
  };

  function getNumCartItems() {
    let numItems = 0;
    for (let i = 0; i < cart.items.length; i++) {
      numItems += parseInt(cart.items[i].itemQuantity);
    }
    return numItems;
  }

  //generate random integer between 0 and max
  //will be used for products whose value is '???'
  //max: integer value
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <Router>
      <div className="App">
        <Nav getNumCartItems={getNumCartItems} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                itemState={shopItems}
                state={cart}
                addFromProductCart={addProductToCart}
                deleteFromProductCart={deleteFromProductCart}
                updateProductCart={updateProductCart}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop"
            exact
            element={
              <Shop
                setShopState={updateShop}
                shopState={shopItems}
                addProductToCart={addProductToCart}
              />
            }
          />
          <Route
            path="/shop/:id"
            element={
              <ItemDetail
                addProductToCart={addProductToCart}
                shopState={shopItems}
                findCartItem={findCartItem}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                userCart={cart}
                deleteItem={deleteFromProductCart}
                updateCart={updateProductCart}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
