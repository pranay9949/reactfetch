import React, { useEffect, useState } from 'react';
import './index.css';



const ShowDetails=(props)=>{
   const {msgItem}=props
   const{price_change_percentage_24h}=msgItem
   const clrChange=price_change_percentage_24h>=0?"clr-p":"clr-n"
    return(
    <div>

   
   <div className="sub-cont">
    <div className='img-element'>
   <img src={msgItem.image}/>
    <p>{msgItem.name}</p>
    </div>
    <p>{msgItem.symbol.toUpperCase()}</p>
    <p>${msgItem.current_price}</p>
    <p>${msgItem.total_volume}</p>
    <p className={clrChange}>{msgItem.price_change_percentage_24h}%</p>
    <p>Mkt Cap:{msgItem.market_cap}</p>

   
   </div>
   <div className='under-line'>

   </div>
   </div>
    )
}

export default ShowDetails