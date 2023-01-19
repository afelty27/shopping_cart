import React, {useState, useEffect} from 'react';
import './App.css'
import {Link} from 'react-router-dom';

function Shop(props) {

    useEffect( () => {
        fetchItems()
    }, [])

    const [items,setItems] = useState([]);

    const fetchItems = async () => {
        console.log("enter fetchItems")

        //get 10 items from api and set local state
        let data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
        const itemsJson = await data.json();
        const itemsArray = itemsJson.data.splice(0,10);
        console.log(itemsArray);
        setItems(itemsArray);

        //??
        props.setShopState(itemsArray)
        console.log("exit fetch items")
    }


    //generate random integer between 0 and max
    //max: integer value
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }  
  

  return (
    <div className="shop">
        {items.length > 0 && 
            <div>
                {items.map(item => (

                   <div key={getRandomInt(10000)} className="card">
                        <div className="container">
                            <Link to={`/shop/${item.itemId}`} >{item.item.name}</Link>
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