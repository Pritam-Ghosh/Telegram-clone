import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute';
import Chat from './Chat';


function Routing() {
    
const [isLoggedin,setIsLoggedIn] = useState(true);
    return (
        <>
            <Routes>
                <Route path="/" element={<ProtectedRoute isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}>
                    <Home isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}></Home>
                </ProtectedRoute>} />
                <Route path="/chat/:id" element={<ProtectedRoute isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}>
                    <Chat></Chat>
                </ProtectedRoute>} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
            </Routes>

        </>
    )
}

export default Routing

