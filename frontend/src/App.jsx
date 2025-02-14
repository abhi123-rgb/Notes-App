import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'
import NotFound from './pages/NotFound/NotFound';
import ManagerDashboard from './pages/Manager/ManagerDashboard';
import Unauthorized from './pages/NotFound/Unauthorized';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Navigate to="/login" replace={true} />}> </Route>
        <Route path='/dashboard' element={<Home />} />
        <Route path='/managerdash' element={<ManagerDashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App