import React, {useState, useEffect} from 'react';
import './App.css'

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items,setItems] = useState([]);

    const fetchItems = async () => {
        let data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
        const itemsJson = await data.json();
        const itemsArray = itemsJson.data.splice(0,10);
        console.log(itemsArray);
        setItems(itemsArray);
    }

  return (
    <div className="App">Shop
      {items.map(item => (
        <h1 key={item.itemId}>{items.name}</h1>
      ))}
    </div>
  );
}

export default Shop;