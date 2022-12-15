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

  const [cart, setCart] = useState(
    {
      items: 
      [
        {
          itemName: "",
          itemId: "",
          itemPrice: 0,
          itemQuantity: 0
        }
      ]
      ,
      cartTotal: 0
    }
  );

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
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