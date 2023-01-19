import React from 'react';
import { isElement } from 'react-dom/test-utils';
import './App.css'

function Home(props) {

  

  console.log("in home, shop items are: ")
  console.log(props.itemState)

  return (
    <div className="App">
      Home Page
    </div>
  );
}

export default Home;
