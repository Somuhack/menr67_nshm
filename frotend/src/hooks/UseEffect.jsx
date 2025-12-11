import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(5)
    const [count2,setCount2]=useState(5)
    useEffect(()=>{
        console.log("Helllo Guys");
    })
  return (
    <>
    <div>UseEfcect:{count}:{count2}</div>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button onClick={()=>setCount2(count2-1)}>count 2</button>
    
    </>
  )
}

export default UseEffect
// 1.Any tings add in page the useEffect called it self imidiatly