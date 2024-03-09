/* eslint-disable no-unused-vars */
import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav>
            <a href='#home' className='site-name'>
              <img src='./img/matjar_logo.svg' />
            </a>
            <div className='links-container'>    
                <a href='#home' className='home-link'>Home</a>
                <a href='#features' className='features-link'>Features</a>
                <a href='#business-types' className='business-link'>Business Types</a>
                <a href='#multiStore-link' className='multiStore-link'>Multi-Store</a>
            </div>
            <button className='download-nav-button'>Download App</button>
        </nav>
    </header>
  );
}
