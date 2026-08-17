import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Login = lazy(()=> import('../pages/auth/Login'))
const Register = lazy(()=> import('../pages/auth/Register'))
const ForgetPassword = lazy(()=> import('../pages/auth/ForgetPassword'))

const Home = lazy(()=> import('../pages/comman/Home'))
const About = lazy(()=> import('../pages/comman/About'))

const AppRouter = () => {
  return (
      <Routes>
            
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgot-password" element={<ForgetPassword/>} />


          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
  )
}

export default AppRouter