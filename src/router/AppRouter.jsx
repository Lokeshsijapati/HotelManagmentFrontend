import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Login = lazy(()=> import('../pages/auth/Login'))
const Register = lazy(()=> import('../pages/auth/Register'))
const ForgetPassword = lazy(()=> import('../pages/auth/ForgetPassword'))
const Home = lazy(()=> import('../pages/common/Home'))
const RoomsAndSuits = lazy(()=> import('../pages/common/RoomsAndSuits'))
const RoomPage = lazy(()=> import('../pages/common/RoomPage'))
const About = lazy(()=> import('../pages/common/About'))
const Contact = lazy(()=> import('../pages/common/Contact'))

const Footer = lazy(()=> import('../ui/Footer'))
const Navbar = lazy(()=> import('../ui/Navbar'))




const AppRouter = () => {
  return (
      <>
        <div className="">
          <Navbar/>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/rooms/:id" element={<RoomPage/>} />
                <Route path="/forgot-password" element={<ForgetPassword/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/rooms-suites" element={<RoomsAndSuits/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
          <Footer/>
        </div>
      </>
  )
}

export default AppRouter