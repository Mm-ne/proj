/* eslint-disable no-unused-vars */
import React from 'react'

/* Icons */
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";


export default function MultiStore() {
  return (
    <section id='multiStore-link'>
        <div className='multistore-wrapper'>


<section className='section-1'>
    <div className='multistore-text-container'>
        <h3>
            Deep dive into our <br/>
            Features and Explore <br/>
            our Platform
        </h3>
        <p>
            A unique platform with all the Point of Sale (POS) features <br/>
            you need to manage and develop your business.
        </p>
        <ul>
            <li>Muti-platform solution</li>
            <li>Automatic data backup</li>
            <li>Invoicing and quotations</li>
            <li>Barcode reader</li>
            <li>Order and delivery tracking</li>
        </ul>
    </div>

    <div className='multistore-phone-container'>
        <img src='https://i.postimg.cc/FFWRX6M4/phone-en.png' />
    </div>
</section>

<div className='devices-container'>
    <div>
        <img src='https://i.postimg.cc/1X2snkSV/make-a-sale-en.png' />
        <br/> <p>Phone</p>
    </div>
    <div>
        <img src='https://i.postimg.cc/c43Nk5ZT/tablet.png' />
        <br/> <p>Tablet</p>
    </div>
    <div>
        <img src='https://i.postimg.cc/wBq8vqNb/labtop.png' />
        <br/> <p>Laptop</p>
    </div>
</div>



<div className='getting-support-container'>
    
<h3 className='title-2'>Getting Support</h3>
    <div className='item-1'>
        <FiPhone className='icon'/>
        <p>
            For assistance 24 hours a day
        </p>
        <a href='#' className='link'>
            Call
        </a>
    </div>
    <div className='item-2'>
        <FaRegEnvelope className='icon'/>
        <p>
            For product complaints
        </p>
        <a href='#' className='link'>
            Send
        </a>
    </div>
    <div className='item-3'>
        <IoLocationOutline className='icon'/>
        <p>
            To get in touch with us
        </p>
        <a href='#' className='link'>
            View location
        </a>
    </div>
</div>


</div>
    </section>
    
  )
}
