import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Nav() {
  return (
    <nav>
        <h3>Logo</h3>
        <ul className='nav-links'>
            <link>
                {/* <li>About</li> */}
            </link>
            <li>Shop</li>
            <li>Home</li>
        </ul>
    </nav>
  );
}

export default Nav;