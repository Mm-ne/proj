/* eslint-disable no-unused-vars */
import React from 'react'

export default function Features() {
  return (
    <div className='features-wraper' id='features'>

        <div className='features-text-container-1'>
            <h2 className='features-title-1'>
                Run your physical store 
                and set up your points sale<br/> 
                features in minutes.
            </h2>
            <p className='features-par-1'>
                A unique platform with all the Point Of Sale (POS) 
                features you need to manage and<br/>
                develop your business.
            </p>
        </div>   

        <div className='features-2-wraper'>

            <div className='features-text-container-2'>
                <h3 className='features-title-2'>Point Of Sale</h3>
                <p className='features-par-2'>
                    Ability to Work Offline, Realtime synchronization, 
                    <br/>Barcode reader,<br/>
                    Invoices, Sell on credit.
                </p>
            </div>
            <div className='features-img-div'>
                <img src='https://github.com/Mm-ne/proj/blob/main/img/option_list.png' className='features-img'/>
            </div>

        </div>



        <div className='sm-inv-container'>

            <div className='staff-management-container'>
                <h3>Staff Management</h3>
                <p className='staff-mang-parag'>
                    Customer profiles, Purchase orders, Unlimited staff,<br/>
                    Roles & Permissions,, Staff PINs.
                </p>
                <img src="https://github.com/Mm-ne/proj/blob/main/img/employe_management.png" />
            </div>

            <div className='inventory-container'>
                <h3>Inventory</h3>
                <p className='inventoery-parag'>
                    Unlimited products, Barcodes, Item variants, 
                    Item <br/> units, Low-stock alerts, Suppliers profile.
                </p>
                <img src="https://github.com/Mm-ne/proj/blob/main/img/products-en.png" />
            </div>
        
        </div>

        <div className='rprt-stats-container'>

            <div className='rprt-stats-text'>
                <h3>Reports & Statistics</h3>
                <p className='rprt-stats-parag'>
                    Customer profiles, Purchase orders, Unlimited staff,<br/>
                    Roles & Permissions,, Staff PINs.
                </p>
                
            </div>

            <div className='rprt-stats-img-div'>
              
                <img src="https://github.com/Mm-ne/proj/blob/main/img/analytics-en.png" className='rprt-stats-img' />
            </div>
        
        </div>
        

    </div>
    
  
  )
}
