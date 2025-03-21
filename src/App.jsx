import { Route, Router, Routes } from "react-router-dom"
import Home from "./component/Home"
import Login from "./component/Login"
import Chat from './component/Chat'
import PageNotFound from "./component/PageNotFound"


function App() {

  return (
    <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/chat/:id" element={<Chat></Chat>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>

    </>
  )
}

export default App



function ProtectedRoute() {
  return (
    <div>ProtectedRoute</div>
  )
}


