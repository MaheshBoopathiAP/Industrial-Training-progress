import React, { useEffect, useState } from 'react'

function HooksEx() {
    const [count,setCount]=useState(0)
    let inc=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        setCount(count+9999999999999)
})


let incre=()=>{
    setCount(count+5)
}
  return (
   <>
        <h1>{count}</h1>
   <hr></hr>
        <button onClick={inc}>ClickMe +1</button>
        <hr></hr>
        <button onClick={()=>{
    setCount(count-1)}}>ClickMe -1</button>
        <hr></hr>
        <button onClick={incre}>ClickMe +5</button>

    </>
        
  )
}

export default HooksEx