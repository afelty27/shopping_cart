import React, {useState, useEffect} from 'react';
import './App.css'
import {Link} from 'react-router-dom';

function ItemDetail() {

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        //https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}
        const fetchItem = await fetch(
            //ERROR match not defined
            // `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        );
        console.log()
        const item = await fetchItem.json();
        console.log("item would appear here")
    }

   
  return (
   <div>
        <h1>Item</h1>
   </div>
  );
}

export default ItemDetail;