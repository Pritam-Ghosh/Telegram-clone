
import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from './Home'


function ProtectedRoute({isLoggedin,children}) {
    // const isLoggedin = props.isLoggedin
    // const children = props.children
    if(isLoggedin){
       return children
    }
    else{
        return <Navigate to='/login'/>
    }

}

export default ProtectedRoute