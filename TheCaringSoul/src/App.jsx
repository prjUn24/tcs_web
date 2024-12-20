
import './index.css'

import { Routes, Route, Navigate } from 'react-router-dom';
import PageRouters from './Pages/Routers'; 
import Login from './Components/AuthPages/Login';
import SignUp from './Components/AuthPages/SignUp';
import ForgotPassword from './Components/AuthPages/ForgotPassword';

function App() {
  return (
    <Routes>
      <Route path='*' element={<PageRouters />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
    </Routes>
  );
}

export default App;
