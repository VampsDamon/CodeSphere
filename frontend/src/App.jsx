import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Layouts/Headers/Header"
import Courses from "./components/Courses/Courses"
import Footer from "./components/Layouts/Footer/Footer"
import LogIn from "./components/auth/LogIn"
import Register from "./components/auth/Register"
import ForgetPassword from "./components/auth/ForgetPassword"
function App() {
 

  return (
   <Router>
    <Header/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/courses" element={<Courses/>} />
       <Route path="/login" element={<LogIn/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/forgetPassword" element={<ForgetPassword/>} />
       <Route path="/resetPassword/:token" element={<ForgetPassword/>} />
     </Routes>
     <Footer/>
   </Router>
  )
}

export default App
