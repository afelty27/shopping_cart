import React, {useState, useEffect} from 'react';
import './App.css'
import {Link} from 'react-router-dom';

function itemDetail() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [item,setItem] = useState([]);

    const fetchItem = async () => {
        
    }

  return (
   <div>
        <h1>Item</h1>
   </div>
  );
}

export default itemDetail;