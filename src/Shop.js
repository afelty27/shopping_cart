import React, {useState, useEffect} from 'react';
import './App.css'
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items,setItems] = useState([]);

    const fetchItems = async () => {
        console.log("enter fetchItems")
        let data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
        const itemsJson = await data.json();
        const itemsArray = itemsJson.data.splice(0,10);
        console.log(itemsArray);
        setItems(itemsArray);
        console.log("exit fetch items")
    }

  return (
    <div className="App">Shop
        {items.length > 0 && <h1>{items[0].item.itemId}</h1>}

        {items.length > 0 && 
            <div>
                {items.map(item => (
                    <h1 key={item.itemId}>
                        <div>{console.log(item.item.name)}</div>
                        <div>{item.item.name}</div>
                    </h1>
                ))}
            </div>
        
        }      
    </div>
  );
}

export default Shop;