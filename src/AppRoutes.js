import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allform from './pages/Allform'
import Sidbar from './Sidbar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Chart from './Charts'
import Register from './Register';
import Settingform from './pages/jotform/Settingform';
import Login from './userpages/Login'
import { ThemeProvider } from "styled-components";
import Dark from './Dark';
import Jotform from './pages/jotform/Jotform';
import JotformNav from './pages/JotformNav';
import Setting from './pages/jotform/Setting'
import Publish from './pages/jotform/Publish'
export const AppRoutes = () => {
  return (
    <BrowserRouter>
   
     <Routes>
         <Route path='/allform' element={<Allform />} />
         <Route path='/jotform' element={<Jotform />} />
         <Route path='/allform' element={<Allform />} />
         <Route path='/jotform' element={<Jotform />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chart" element={<Chart />} />
         <Route path="/" element={<Register />} />
         <Route path='/login' element={<Login />} />
         <Route path='/publish' element={<Publish />} />
         <Route path='/setting' element={<Settingform />} />
        
     </Routes>
   </BrowserRouter>
  )
}
