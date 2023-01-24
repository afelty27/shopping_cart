import './App.css';
import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Cart from './Cart';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {

  //state and update state functions for shop and cart
  const [shopItems, setShopItems] = useState(
    {
    }
    
  )

  const updateShop = (itemList) => {
    setShopItems(prevState => {
      return {
        items: itemList
      }
    }) 
  }

  const [cart, setCart] = useState(
    {
      items: [],
      cartTotal: 0
    }
  );

  console.log("cart items: " + cart.items)

  //set cart total from start of program
  useEffect(() => {
    console.log("enter useEffect")
    console.log(cart)
     updateCartTotal()
    
  }, [cart["items"]]);

 

  console.log("shop")
  console.log(shopItems)


  //adds new item object to cart item list
  //newProdObj: object from the api call of product being added
  //quantity: integer of how many of the object are requested
  const addProductToCart = (newProdObj, quantity) => {
  
    //ensure item is not in cart already
    if (findCartItem(newProdObj.itemId) == -1) {
      console.log("price: " + newProdObj.item.cost)
      let newObj = {
        itemName: newProdObj.item.name,
        itemId: newProdObj.itemId,
        itemDescription: newProdObj.item.description,
        itemIcon: newProdObj.item.images.icon,
        // itemPrice: (newProdObj.item.cost == "???") ? getRandomInt(50) : newProdObj.item.cost,
        itemPrice: getRandomInt(50),
        itemQuantity: quantity
      }
  
      let newList = cart.items;
      newList.push(newObj)
  
      setCart(prevState => {
        return {
          ...prevState,
          ["items"]: newList
        }
      })
    } else {
      //what do if already in cart??
    }

    updateCartTotal();
  }

  //try a useEffect to fix the bug below:
  useEffect( () => {

  }, [])

  //updates the quantity of an object already in cart
  //prodId: string containing id of the desired product
  //newQuantity: integer of new quantity value of the desired product
  //FIX - takes two clicks of button to update price (state updates after one click)
  const updateProductCart = (prodId, newQuantity) => {
    console.log("enter updateCart")
    console.log("prod Id: " + prodId)
    console.log("new quantity: " + newQuantity)

    //FIX - setCart is running after updateCartTotal() but its not an asyncronous function?
    //this is because useState is asyncronous
    setCart( prevState => {
      console.log("enter set cart")

      //ensure item is in cart
      if (findCartItem(prodId) != -1) {
        console.log("enter if")
        const newObj = cart.items;
        newObj[findCartItem(prodId)].itemQuantity = newQuantity;
        console.log("check update quant: ")
        console.log(newObj[findCartItem(prodId)].itemQuantity)

        return {
          ...prevState,
          ["items"]: newObj
        }
      }
    })
    updateCartTotal();
  }


  //delete particular product from cart state
  //prodId: string containing id of the product to be deleted
  const deleteFromProductCart = (prodId) => {

    setCart(prevState => {

      const newList = [...cart["items"]];
      newList.splice(findCartItem(prodId),1)

      return {
        ...prevState,
        ["items"]: newList
      }

    })
  }

  //updates cart value of state based on current products in cart
  //works
  const updateCartTotal = () => {
    console.log("enter updateTotal")
    let newTotal = 0;

    for (let i = 0; i < cart.items.length; i ++) {
      console.log("new quant: " + cart.items[i].itemQuantity)

      newTotal += cart.items[i].itemPrice * cart.items[i].itemQuantity
    }

    setCart (prevState => {
      return {
        ...prevState,
        ["cartTotal"]: newTotal
      }
    })

    console.log("newTotal: " + newTotal)
    
  }

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
  }

  //generate random integer between 0 and max
  //will be used for products whose value is '???'
  //max: integer value
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  



  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home itemState={shopItems} state={cart} addFromProductCart={addProductToCart} deleteFromProductCart={deleteFromProductCart} updateProductCart={updateProductCart}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' exact element={<Shop setShopState={updateShop} shopState={shopItems} addProductToCart={addProductToCart} />} />
          <Route path='/shop/:id' element={<ItemDetail addProductToCart={addProductToCart} />} />
          <Route path='/cart' element={<Cart userCart={cart} deleteItem={deleteFromProductCart} updateCart={updateProductCart} />} />
        </Routes>
      </div>
     
    </Router>
    
  );
}

export default App;
{/* <div className="App">
<Nav />
<Route path='/home' component={Home}/>
<Route path='/shop' component={Shop}/>
</div> */}