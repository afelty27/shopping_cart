import React, {useState, useEffect} from 'react';
import './App.css'
import {Route, useParams, Link} from 'react-router-dom';

function ItemDetail() {

    const [item,setItem] = useState(
       
    );

    const params = useParams();

    useEffect(() => {
        fetchItem()
    }, []);
    

    const fetchItem = async () => {
        //https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}
        const fetchItem = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`
        );
        const item = await fetchItem.json();
        setItem(item)
        console.log(item)
    }


  return (
   <div>
        
        <div className='productDisplay'>
            <img src={item && item.data.item.images.icon ? `${item.data.item.images.icon}` : ""}></img>
            <div className='productInfo'>
                <h1 id='name'>{item && item.data.item.name ? item.data.item.name : "Not loaded yet"}</h1>
                <div id='price'>${item && item.data.item.cost ? `${item.data.item.cost}` : "Not loaded yet"}</div>
                <div className='specs'>{item && item.data.item.description ? item.data.item.description : "Not loaded yet"}</div>

                <input type="number" id="quantity" name="quantity" min="0" max="100"></input>
                <button>Add to Cart</button>

            </div>

        </div>


   </div>
  );
}

export default ItemDetail;