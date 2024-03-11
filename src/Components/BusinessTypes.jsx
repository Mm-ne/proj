/* eslint-disable no-unused-vars */
import React from 'react'

export default function BusinessTypes() {
  return (
    <div id='business-types' className='business-types-wrapper'>
        <div className='business-img-wraper'>
            <div className='business-img-div'>
                <img src="https://i.postimg.cc/k4y2SXY6/Column.png" />
                <p>Built for all kinds<br/>of retailers.</p>
            </div>
        </div>
        <div className='business-types-div'>
            <table className='busines-types-table'>

                <tr className='table-tr-1'>
                    <td>Grocery</td>
                    <td>Electronics</td>
                    <td>Fashion</td>
                    <td>Jewelry</td>
                </tr>
                <tr className='table-tr-2'>
                    <td>Appliances</td>
                    <td>Home & Deco</td>
                    <td> Care & Beauty</td>
                    <td>Retail</td>
                </tr>
            </table>

        </div>
    </div>
  )
}
