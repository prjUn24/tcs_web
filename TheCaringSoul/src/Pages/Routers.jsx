import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContainer from '../Components/LandingPage/MainContainer'

export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainContainer/>} />
      </Routes>
      
    </div>
  )
}
