import { Navigate, Route, Router, Routes } from "react-router-dom"
import Home from "./component/Home"
import Login from "./component/Login"
import Chat from './component/Chat'
import PageNotFound from "./component/PageNotFound"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null)

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User signed in:", user);
setIsLoggedIn(user);
  } else {
    console.log("User signed out");
    setIsLoggedIn(null);
  }
})
return () => unsubscribe(); // Clean up the listener

},[])


  return (
    <>

      <Routes>
        <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
          <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} ></Home>
        </ProtectedRoute>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/chat/:id" element={
          <ProtectedRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
            <Chat></Chat>
          </ProtectedRoute>
        }>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>

    </>
  )
}

export default App



function ProtectedRoute({isLoggedIn, children }) {

  if (isLoggedIn) {
    return children
  }
  else {
    return <Navigate to='/login'></Navigate>
  }

}


