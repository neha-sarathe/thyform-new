import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Navigate } from 'react-router-dom';
import styled from "styled-components";
import AllformNav from './pages/AllformNav';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './vendors/feather/feather.css'
// import './vendors/mdi/css/materialdesignicons.min.css'
import './vendors/ti-icons/css/themify-icons.css'
import './vendors/typicons/typicons.css'
import './vendors/simple-line-icons/css/simple-line-icons.css'
import './vendors/css/vendor.bundle.base.css'
import './css/vertical-layout-light/style.css'
import './App.scss'
import Setting from './pages/jotform/Setting'
import Publish from './pages/jotform/Publish'
// import Build from './pages/'
import Allform from './pages/Allform';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidbar from './Sidbar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Charts from './Charts'
import Register from './Register';
import Login from './userpages/Login'
import { ThemeProvider } from "styled-components";
import Dark from './Dark';
import Jotform from './pages/jotform/Jotform';
import JotformNav from './pages/JotformNav';
import CustomToolbar from './Newform';
import Settingform from './pages/jotform/Settingform';
import Thankyoupage from './pages/jotform/Thankyoupage';
import Assign from './pages/jotform/Assign';
import Email from './pages/jotform/Email';
import Prefill from './pages/jotform/Prefill';
import Pdf from './pages/jotform/Pdf';
import Setting_email from './pages/jotform/Setting_email';
import Condition from './pages/jotform/Condition';
import Auto from './pages/jotform/Auto';
import Rept from './pages/jotform/Rept';
import Option from './pages/jotform/Option';
import MobileNotification from './pages/jotform/MobileNotification';
import Morris from './Morris';
import PreviewNav from './pages/jotform/PreviewNav';
import { Phone } from './pages/jotform/Phone';
import Myform from './pages/Myform';
import Assignform from './pages/Assignform';
import Inbox from './pages/Inbox';
import { MyProfile } from './MyProfile';
import { Archive } from './pages/Archive';
import { Trash } from './pages/Trash';

import RegisterTwo from './userpages/RegisterTwo';
import RegisterThree from './userpages/RegisterThree';
import RegisterFour from './userpages/RegisterFour';
import PersonalDetails from './userpages/personaldetails/PersonalDetails';
import { FormAnalytics } from './FormAnalytics/FormAnalytics';
import UserForm from './userpages/personaldetails/UserForm';
import PaymentMode from './userpages/personaldetails/PaymentMode';
import PayProcedure from './userpages/personaldetails/PayProcedure';
const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}
function App() {
  const [checked, setChecked] = useState(true);
  const [user, setUser] = React.useState('');
  const [jotform, setJotform] = React.useState('jotform');
  const [jottoggled, setJottoggled] = useState(false);
  const [register, setregister] = React.useState("/");
  const [darkmode, setDarkmode] = useState(false);
  const [priceSelect, setPriceSelect] = useState('');
  const [toggle,setToggle] =useState('Monthly');
  useEffect(() => {
    const token_get = localStorage.getItem('user')
    if (token_get) {
      setUser(token_get)
    }

  }, [])
  const handleLogin = () => localStorage.setItem('user', 'token');
  const handleLogout = () => setUser('');

  return (
    <>
      {user && window.location.pathname === '/dashboard' || window.location.pathname === "/charts" || window.location.pathname
        === "/morris" || window.location.pathname === "/myprofile" ? (
        <>  <div class={"container-scroller" + (darkmode ? "text-white body-dark" : "text-dark body-light")}>
          <div class="container-fluid page-body-wrapper">
            <Router>
              <Sidbar darkmodes={darkmode} setDarkmodes={setDarkmode} /><Navbar darkmodes={darkmode} setDarkmodes={setDarkmode} /> <Dark darkmodes={darkmode} setDarkmodes={setDarkmode} />
              <Routes>

                <Route path="/dashboard" element={<Dashboard darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
                <Route path="/charts" element={<Charts darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
                <Route path="/morris" element={<Morris darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
                <Route path="/myprofile" element={<MyProfile darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
                {/* <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                /> */}
              </Routes>
            </Router>

          </div></div>
        </>
      ) : user && window.location.pathname === '/allform/allform' || window.location.pathname === '/allform/inbox'
        || window.location.pathname === '/allform/archive' || window.location.pathname === '/allform/trash' || window.location.pathname === "/allform/myform" || window.location.pathname
        === "/allform/assignform" || window.location.pathname === '/allform/formanalytics'
        ? (
          <Router>

            <Routes>
              <Route path='/allform/allform' element={<Allform darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/allform/myform' element={<Myform darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/allform/assignform' element={<Assignform darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/allform/inbox' element={<Inbox darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/allform/archive' element={<Archive darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/allform/trash' element={<Trash darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/allform/formanalytics' element={<FormAnalytics darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
            </Routes>
          </Router>

        ) : window.location.pathname === "/jotform"
          || window.location.pathname === "/publish/publish" || window.location.pathname === "/setting" || window.location.pathname
          === "/Newform" || window.location.pathname === "/setting/settingform" || window.location.pathname === "/setting/settingemail"
          || window.location.pathname === "/setting/thankyoupage" || window.location.pathname === "/publish/Assign"
          || window.location.pathname === "/publish/Email" || window.location.pathname === "/publish/Prefill"
          || window.location.pathname === "/publish/Pdf" || window.location.pathname === "/setting/condition"
          || window.location.pathname === "/setting/mobilenotification" ? (

          <Router>
            {checked ? <div className='d-flex fixed-top'><div className='jotlogo-width'>  <div className='allform-logo-div'>
              <a class="navbar-brand brand-logo" href="#">
                <img src="../../images/Logo.png" alt="logo" className='allform-logo' />
              </a>
            </div></div><div className=''><JotformNav checked={checked} setChecked={setChecked} darkmodes={darkmode} setDarkmodes={setDarkmode} /></div></div> : ''}
            {checked ? <Routes>
              {/* <Route path='/allform' element={<Allform />} /> */}
              <Route path='/jotform' element={<Jotform checked={checked} setChecked={setChecked} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/publish/publish' element={<Publish jottoggled={jottoggled} setJottoggled={setJottoggled} checked={checked} setChecked={setChecked} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/setting' element={<Setting jottoggled={jottoggled} setJottoggled={setJottoggled} checked={checked} setChecked={setChecked} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/Newform' element={<CustomToolbar jottoggled={jottoggled} setJottoggled={setJottoggled} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/setting/settingform' element={<Settingform jottoggled={jottoggled} setJottoggled={setJottoggled} checked={checked} setChecked={setChecked} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/setting/settingemail' element={<Setting_email jottoggled={jottoggled} setJottoggled={setJottoggled} checked={checked} setChecked={setChecked} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/setting/thankyoupage' element={<Thankyoupage jottoggled={jottoggled} setJottoggled={setJottoggled} checked={checked} setChecked={setChecked} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />

              <Route path='/publish/Assign' element={<Assign jottoggled={jottoggled} setJottoggled={setJottoggled} checked={checked} setChecked={setChecked} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/publish/Email' element={<Email jottoggled={jottoggled} setJottoggled={setJottoggled} checked={checked} setChecked={setChecked} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/publish/Prefill' element={<Prefill darkmodes={darkmode} setDarkmodes={setDarkmode} jottoggled={jottoggled} setJottoggled={setJottoggled} />} />
              <Route path='/publish/Pdf' element={<Pdf jottoggled={jottoggled} setJottoggled={setJottoggled} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/setting/condition' element={<Condition jottoggled={jottoggled} setJottoggled={setJottoggled} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/setting/mobilenotification' element={<MobileNotification jottoggled={jottoggled} setJottoggled={setJottoggled} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/Auto' element={<Auto jottoggled={jottoggled} setJottoggled={setJottoggled} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/Rept' element={<Rept jottoggled={jottoggled} setJottoggled={setJottoggled} darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
              <Route path='/Option' element={<Option jottoggled={jottoggled} setJottoggled={setJottoggled} />} />
              {/* <Route path='/phone' element={<Phone />} /> */}
            </Routes> : <Phone checked={checked} setChecked={setChecked} darkmodes={darkmode} setDarkmodes={setDarkmode} />
            }

          </Router>

        ) : window.location.pathname === "/" || window.location.pathname === '/register' || window.location.pathname === "/login" || window.location.pathname === "/registertwo" || window.location.pathname === "/registerthree" || window.location.pathname === "/registerfour" || window.location.pathname === "/personaldetails" || window.location.pathname === "/userform" || window.location.pathname === "/payprocedure" ? (<Router>
          <Routes>
            {/* <Route path='/allform' element={<Allform />} />
            <Route path='/jotform' element={<Jotform />} /> */}
             <Route path="/" element={<PaymentMode darkmodes={darkmode} setDarkmodes={setDarkmode} priceSelect={priceSelect} setPriceSelect={setPriceSelect}   toggle={toggle} setToggle={setToggle}/>} />
            <Route path="/register" element={<Register darkmodes={darkmode} setDarkmodes={setDarkmode}  priceSelect={priceSelect} setPriceSelect={setPriceSelect}/>} />
            <Route path="/registertwo" element={<RegisterTwo darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
            <Route path="/registerthree" element={<RegisterThree darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
            <Route path="/registerfour" element={<RegisterFour darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
            <Route path="/personaldetails" element={<PersonalDetails darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
            <Route path="/userform" element={<UserForm darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
            <Route path="/payprocedure" element={<PayProcedure darkmodes={darkmode} setDarkmodes={setDarkmode} />} />
            <Route path='/login' element={<Login setUser={handleLogin} darkmodes={darkmode} setDarkmodes={setDarkmode} usertoken={user} />} />


          </Routes> </Router>
        ) : ''}</>
  );
}

export default App;