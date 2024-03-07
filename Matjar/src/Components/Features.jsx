import React from 'react'

export default function Features() {
  return (
    <div className='features-wraper'>

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
            <img src='./img/option_list.png' className='features-img'/>
        </div>
        

    </div>
    
  
  )
}
