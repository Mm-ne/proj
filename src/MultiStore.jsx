/* eslint-disable no-unused-vars */
import React from 'react'

export default function MultiStore() {
  return (
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
                <img src='./img/phone_en.png' />
            </div>
        </section>

        <div className='devices-container'>
            <div>
                <img src='./img/make_a_sale_en.png' />
                <br/> <p>Phone</p>
            </div>
            <div>
                <img src='./img/tablet_.png' />
                <br/> <p>Tablet</p>
            </div>
            <div>
                <img src='./img/labtop.png' />
                <br/> <p>Laptop</p>
            </div>
        </div>

        <div className='getting-support-container'>
            <h3>Getting support</h3>
            <div>
                <i ></i>
                <p>
                    For assistance 24 hours a day
                </p>
                <a href='#'>
                    Call
                </a>
            </div>
            <div>
                <i ></i>
                <p>
                    For product complaints
                </p>
                <a href='#'>
                    Send
                </a>
            </div>
            <div>
                <i ></i>
                <p>
                    To get in touch with us
                </p>
                <a href='#'>
                    View location
                </a>
            </div>
        </div>


    </div>
  )
}
