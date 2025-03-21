import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setIsLoggedIn}) {
  const navigate = useNavigate()
        const handleClick = ()=>{
          navigate('/')
          setIsLoggedIn(true)
    }
  return (
    <div>
        <p>Login Page</p>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login