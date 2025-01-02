import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from '../Components/LandingPage/MainContainer';
import Navbar from '../Components/LandingPage/Navbar';
import ServiceContainer from '../Components/BookServices/MainContainer';
import ShowServices from '../Components/BookServices/ShowServices';
export default function PageRouters() {
  return (
    <div className='bg-amour'>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/book/service' element={<ServiceContainer />} />
        <Route path='/show/service' element={<ShowServices />} />
        
      </Routes>
    </div>
  );
}
