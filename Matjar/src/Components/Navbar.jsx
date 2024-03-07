/* eslint-disable no-unused-vars */
import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav>
            <a href='#' className='site-name'>Matjar</a>
            <div className='links-container'>    
                <a href='#' className='home-link'>Home</a>
                <a href='#' className='features-link'>Features</a>
                <a href='#' className='business-link'>Business Types</a>
                <a href='#' className='multiStore-link'>Multi-Store</a>
            </div>
            <button className='download-nav-button'>Download App</button>
        </nav>
    </header>
  );
}
