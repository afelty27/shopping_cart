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
        {items.length > 0 && 
            <div>
                {items.map(item => (

                   <div className="card">
                        <div className="container">
                            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                            <img id='' src={item.item.images.icon}></img>
                            <p>{item.item.description}</p> 
                        </div>
                   </div> 
                ))}
            </div>
        
        }      
    </div>
  );
}

export default Shop;