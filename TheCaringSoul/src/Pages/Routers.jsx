import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContainer from '../Components/LandingPage/MainContainer'
import Navbar from '../Components/LandingPage/Navbar'
import ServiceContainer from '../Components/BookServices/MainContainer'

export default function Routers() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<MainContainer/>} />
        <Route path='/book/service' element={<ServiceContainer/>}/>
      </Routes>
      
    </div>
  )
}
