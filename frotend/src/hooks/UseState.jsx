import React, { useState } from 'react'

const UseState = () => {
    // let a =10
    let [a,setA] =useState(10)
    console.log(a);
    
    const inc =()=>{
       setA(++a)
        console.log(a); 
    }
    const dec =()=>{
        setA(--a)
    }
    const AddbyValue=(n)=>{
        setA(a+n)
    }
  return (
    <>
    <div>UseState :{a}</div>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrement</button>
    <button onClick={()=>AddbyValue(50)}>Add by 50</button>
    </>
  )
}

export default UseState