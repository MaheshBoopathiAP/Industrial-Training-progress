import React from 'react'
import { useState } from 'react'

function LoginEx() {
    const [userName,setuserName]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)
     
    const formHandler=(event)=>
    {
        event.preventDefault()
        if(userName.length===0 && password.length===0)
        {
          setError(true)
        }
        if(userName==="Admin" && password==="Admin"){
        const loginObj={
         name:userName,
         pwd:password
        }
        console.log(loginObj)
       alert(JSON.stringify(loginObj))
      }
    }
  return (
<div>
    <h3>Login Page</h3>

<form onSubmit={formHandler}>
    Username : <input type="text" value={userName} placeholder="User Name" onChange={(e)=>setuserName(e.target.value)}/><br/>
    <div> {error && userName.length===0?
    <label style ={{color:'red'}}>Username id required</label> :""}
    </div>
    Password : <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <div>
    {error && password.length===0?
    <label style ={{color:'red'}}>password id required</label> :""}
    </div>
    <button type="submit">Login</button>
</form>
</div>
  )
}

export default LoginEx