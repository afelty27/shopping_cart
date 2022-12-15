import './App.css';
import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={} />
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