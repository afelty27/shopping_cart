import React, {useState, useEffect} from 'react';
import './App.css'
import {Link} from 'react-router-dom';

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
        <h1>{items[0].item.name}</h1>
        <div>
            {items.map(item => (
                <h1 key={item.itemId}>
                    <Link style={navStyle} to={`/shop/${item.itemId}`}>{items.name}</Link>
                </h1>
            ))}
        </div>
      
    </div>
  );
}

export default Shop;