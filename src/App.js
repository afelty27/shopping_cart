import './App.css';
import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Cart from './Cart';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';


//todo - 
//finish updateProductCart (1) why work?? 2) what if prod not found
//test addToProductCart
//delete/recreate handle method

function App() {

  const [cart, setCart] = useState(
    {
      items: 
      [
        {
          itemName: "",
          itemId: "98a530af-0920-47b2-b355-9df8f33e72b0",
          itemDescription: "",
          itemIcon: "",
          itemPrice: 5,
          itemQuantity: 5
        }
      ]
      ,
      cartTotal: 0
    }
  );

  useEffect(() => {
    updateCartTotal()
  }, [cart["items"]]);

  console.log("cart: ")
  console.log(cart)


  //need to update: need three options - add new product, update existing product, delete product
  const updateCart = (newProdObj, quantity) => {

      let index = findCartItem(newProdObj.data.item.itemId);
      let newObj = {
        itemName: newProdObj.data.item.name,
        itemId: newProdObj.data.item.itemId,
        itemDescription: newProdObj.data.item.description,
        itemIcon: newProdObj.data.images.icon,
        itemPrice: newProdObj.data.item.cost,
        itemQuantity: quantity
      }

    setCart(prevState => {
      return {
        ...prevState,
        ["itmes"]: [
          ...prevState["items"][index],
          newObj
        ]
      }
    })

    //works
    // setCart (prevState => {
    //   return {
    //     ...prevState,
    //     ["cartTotal"]: calcTotal()
    //   }
    // })

  }

  //adds new item object to cart item list
  //newProdObj: object from the api call of object being added
  //quantity: integer of how many of the object are requested
  const addProductToCart = (newProdObj, quantity) => {
    let newObj = {
      itemName: newProdObj.data.item.name,
      itemId: newProdObj.data.item.itemId,
      itemDescription: newProdObj.data.item.description,
      itemIcon: newProdObj.data.images.icon,
      itemPrice: newProdObj.data.item.cost,
      itemQuantity: quantity
    }

    let newList = cart.items.push(newObj);

    setCart(prevState => {
      return {
        ...prevState,
        ["items"]: [
          ...prevState["items"],
          newList
        ]
      }
    })
  }

  //updates the quantity of an object already in cart
  //prodId: string containing id of the desired product
  //newQuantity: integer of new quantity value of the desired product
  //FIX - what happens if product not in cart
  const updateProductCart = (prodId, newQuantity) => {

    setCart( prevState => {

      const newObj = cart.items[findCartItem(prodId)];
      newObj.itemQuantity = newQuantity;

      return {
        ...prevState,
        ["items"]: [
          ...prevState["items"],
          newObj
        ]
      }
    })

  }


  //delete particular product from cart state
  //prodId: string containing id of the product to be deleted
  //works
  const deleteFromProductCart = (prodId) => {

    setCart(prevState => {

      const newList = [...cart["items"]];
      newList.splice(findCartItem(prodId),1)

      // for (let i = 0; i < cart.items.length; i++) {
      //   if (cart.items[i].itemId == prodId) {
      //     newList.splice(i,1);
      //     break;
      //   }
      // }

      return {
        ...prevState,
        ["items"]: newList
      }

    })
  }

  //updates cart value of state based on current products in cart
  //works
  const updateCartTotal = () => {
    let newTotal = 0;

    for (let i = 0; i < cart.items.length; i ++) {
      newTotal += cart.items[i].itemPrice * cart.items[i].itemQuantity
    }

    setCart (prevState => {
      return {
        ...prevState,
        ["cartTotal"]: newTotal
      }
    })
    
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
          <Route path='/' exact element={<Home state={cart} deleteFromProductCart={deleteFromProductCart} updateProductCart={updateProductCart}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' exact element={<Shop />} />
          <Route path='/shop/:id' element={<ItemDetail />} />
          <Route path='/cart' element={<Cart />} />
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