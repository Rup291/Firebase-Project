import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login'
import Home from '../components/home/Home'
import Register from '../components/auth/Register'
import ForgetPassword from '../components/auth/ForgetPassword'

const RouteService:React.FC = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/forget-password" element={<ForgetPassword/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default RouteService