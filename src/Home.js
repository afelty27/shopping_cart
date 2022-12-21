import React from 'react';
import './App.css'

function Home(props) {

  

  

  return (
    <div className="App">
      Home Page

      <div>{"cart total: " + props.state.cartTotal}</div>

      <button onClick={ () => {props.deleteFromProductCart('98a530af-0920-47b2-b355-9df8f33e72b0')}}>Delete</button>

      <button onClick={ () => {props.updateProductCart('98a530af-0920-47b2-b355-9df8f33e72b0', 3)}}>Update Button!</button>
    </div>
  );
}

export default Home;
