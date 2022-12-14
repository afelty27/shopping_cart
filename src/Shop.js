import React, {useState, useEffect} from 'react';
import './App.css'

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        data = await fetch("ENTER API URL HERE");
        console.log(data);
    }

  return (
    <div className="App">
      Shop Page
    </div>
  );
}

export default Shop;