import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './index.css';
import ShowDetails from './ShowDetails';

const FetchDetails=()=>{

  const [message,setMessage]=useState([])

 useEffect(()=>{
    getMessage()
 },[])
   
    function getMessage(){
        console.log("hi")
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then((response)=>{
       setMessage(response.data)
    })
    .catch((err)=>console.log(err))
    }

 
  console.log(message)
 
    return(
    <div className='cont'>
    {message.map((msgItem)=>(
        <ShowDetails msgItem={msgItem}/>
    ))}
    </div>
    )
 }

export default FetchDetails