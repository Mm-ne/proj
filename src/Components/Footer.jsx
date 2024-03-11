/* eslint-disable no-unused-vars */
import React from 'react'

/* Icons */
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";


export default function Footer() {
  return (
    <footer>
        <div className='item1'>
            <img src='https://i.postimg.cc/yNfktBkR/logo-white.png' />
        </div>
        
        <div className='item2'>
           <p>Privacy policy</p>     
        </div>
        
        <div className='item3'>
            <a href='#' className='link1'>Download App</a>
            <a href='#'>
              <FiFacebook className='icon-footer' />
            </a>
            <a href='#'>
              <FiLinkedin className='icon-footer'/> 
            </a>
                    
        </div>
        <div className='item4'>
            <p>©2024 Matjar. All rights reserved.</p>
        </div>
    </footer>
  )
}
