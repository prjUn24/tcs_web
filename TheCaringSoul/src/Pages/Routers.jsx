import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContainer from '../Components/LandingPage/MainContainer'
import Navbar from '../Components/LandingPage/Navbar'
import ServiceContainer from '../Components/BookServices/MainContainer'
import About from '../Components/LandingPage/About'
import Services from '../Components/LandingPage/Services'
import FAQ from '../Components/LandingPage/FAQ'

export default function Routers() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<MainContainer/>} />
        <Route path='/book/service' element={<ServiceContainer/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
      
    </div>
  )
}
