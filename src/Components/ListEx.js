
 import React from 'react'
 
 export default function ListEx() {
    const cars=[{model:"Lambo",id:1},{model:"Audi",id:2},{model:"Gtr",id:3},{model:"Bmw",id:4},{model:"RR",id:5}];
   return (
    <>
     <h1>{cars.map((val)=><li key={val.id}>{val.model}</li>)}</h1>
     </>
   )
 }
 
