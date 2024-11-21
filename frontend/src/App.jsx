import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Layouts/Headers/Header"
import Courses from "./components/Courses/Courses"
import Footer from "./components/Layouts/Footer/Footer"
import LogIn from "./components/auth/LogIn"
import Register from "./components/auth/Register"
import ForgetPassword from "./components/auth/ForgetPassword"
import Contact from "./components/Contact/Contact"
import RequestCourse from "./components/RequestCourse/RequestCourse"
import About from "./components/About/About"
import Subscibe from "./components/Payments/Subscibe"
import PaymentSucess from "./components/Payments/PaymentSucess"
import PaymentFail from "./components/Payments/PaymentFail"
import NotFound from "./components/Layouts/NotFound/NotFound"
import CoursePage from "./components/CoursePage/CoursePage"
import Profile from "./components/Profile/Profile"
import ChangePassword from "./components/Profile/ChangePassword"
import UpdateProfile from "./components/Profile/UpdateProfile"
import Dashboard from "./components/Admin/Dashboard/Dashboard"
import CreateCourse from "./components/Admin/CreateCourse/CreateCourse"
import AdminCourses from "./components/Admin/AdminCourses/AdminCourses"
import Users from "./components/Admin/Users/Users"

function App() {
    // window.addEventListener("contextmenu",e=>event.preventDefault()) 

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/requestCourse" element={<RequestCourse />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword/:token" element={<ForgetPassword />} />
        <Route path="/subscribe" element={<Subscibe />} />
        <Route path="/paymentSuccess" element={<PaymentSucess />} />
        <Route path="/paymentFail" element={<PaymentFail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />

        {/* ******* Admin Routes ****** */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createCourse" element={<CreateCourse />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/users" element={<Users />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App
