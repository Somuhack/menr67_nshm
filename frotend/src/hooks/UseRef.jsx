import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const inputref =useRef()
   useEffect(()=>{
    if(inputref.current){
        inputref.current.focus()
    }
   },[])
  return (
   <>
    <div>UseRef</div>
    <input ref={inputref}/>
    <button>submit</button>
   
   </>
  )
}

export default UseRef