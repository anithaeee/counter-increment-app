import React from 'react'
import '../counter-increment/counter.css';
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.css'; 
import { useState } from 'react';
 const Counter = () => {
    const [count ,setcount] = useState(0)
    
  return (
    <div className="container my-5">
        <div className='text-center my-5'>
            <div className='card-body'>
                <h1>counter app</h1>
                <div className='my-5'>
                    <h2>{count}</h2>
                    <button className='btn btn-primary mx-3' onClick={()=>setcount(count+1)}>increment</button>
                    <button className='btn btn-primary mx-3' onClick={()=>setcount(count-1)}>decrement</button>
                    <button className='btn btn-primary mx-3' onClick={()=>setcount(0)}>reset</button>
                </div>
            </div>
        </div>
   
    </div>
  )
  }
export default Counter;