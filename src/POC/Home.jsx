import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home({setIsLoggedIn}) {
  const navigate = useNavigate()
    const handleClick = ()=>{

      navigate('/login')
    setIsLoggedIn(false)
}
  return (
    <div>
      <p>Home Page</p>
      <button onClick={handleClick}>Login out</button>
    </div>
  )
}

export default Home