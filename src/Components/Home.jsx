/* eslint-disable no-unused-vars */
import React from 'react'

export default function Home() {
  return (
    <>
      <span id='home'></span>
      <div className='home-container'>
        <h2 className='home-title'>Work smarter, automate for<br/>greater efficiency</h2>
        <p className='home-parag'>Manage your business, from sales and invoicing, books, 
        customers and staff to inventory<br/>
        and operations.</p>
        <a href='https://googleplay.com'>
          <img src="./img/download_google_play.svg" className='gplay-svg'/>
        </a><br/>
        <img src='./img/tablet.png' className='tablet-img-home'/>
      </div>
    </>
  )
}
