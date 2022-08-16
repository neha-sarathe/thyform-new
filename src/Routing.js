import React, { useEffect } from 'react';

import Setting from './pages/jotform/Setting'
import Publish from './pages/jotform/Publish'
// import Build from './pages/'
import Allform from './pages/Allform'
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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
function Routing() {
  const [user, setUser] = React.useState('');
  // const [jotform, setJotform] = React.useState('jotform');
  // const [register, setregister] = React.useState("/");
  console.log(user, 'user9999')
  useEffect(() => {
    const token_get = localStorage.getItem('user')
    if (token_get) {
      setUser(token_get)
    }

  }, [])
  const handleLogin = () => localStorage.setItem('user', 'token');
  const handleLogout = () => setUser('');
  console.log(window.location.pathname, 'window.location.pathname')

  return (
    <>
      {user && (window.location.pathname === '/dashboard') || (window.location.pathname === "/charts") || (window.location.pathname
        === "/morris") ? (
        <>  <div class="container-scroller">
          <div class="container-fluid page-body-wrapper">
            <Router>
              <Sidbar /><Navbar /> <Dark />
              <Routes>

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/morris" element={<Morris />} />
                {/* <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                /> */}
              </Routes>
            </Router>

          </div></div>
        </>
      ) : user && window.location.pathname === '/allform' ? (<Router>
        <Routes>
          <Route path='/allform' element={<Allform />} />
        </Routes>
      </Router>

      ) : window.location.pathname === "/jotform"
        || window.location.pathname === "/publish" || window.location.pathname === "/setting" || window.location.pathname
        === "/Newform" || window.location.pathname === "/Settingform" || window.location.pathname === "/Setting_email"
        || window.location.pathname === "/thankyoupage" || window.location.pathname === "/Assign"
        || window.location.pathname === "/Email" || window.location.pathname === "/Prefill"
        || window.location.pathname === "/Pdf" || window.location.pathname === "/Condition"
        || window.location.pathname === "/mobilenotification" ? (

        <Router>
          <JotformNav />
          <Routes>
            {/* <Route path='/allform' element={<Allform />} /> */}
            <Route path='/jotform' element={<Jotform />} />
            <Route path='/publish' element={<Publish />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/Newform' element={<CustomToolbar />} />
            <Route path='/Settingform' element={<Settingform />} />
            <Route path='/Setting_email' element={<Setting_email />} />
            <Route path='/thankyoupage' element={<Thankyoupage />} />

            <Route path='/Assign' element={<Assign />} />
            <Route path='/Email' element={<Email />} />
            <Route path='/Prefill' element={<Prefill />} />
            <Route path='/Pdf' element={<Pdf />} />
            <Route path='/Condition' element={<Condition />} />
            <Route path='/mobilenotification' element={<MobileNotification />} />
            <Route path='/Auto' element={<Auto />} />
            <Route path='/Rept' element={<Rept />} />
            <Route path='/Option' element={<Option />} />
          
          </Routes>

        </Router>

      ) : window.location.pathname === '/phone' ? (<Router>
<TabList/>
        <Routes>

          <Route path='/phone' element={<Phone />} />
        </Routes>
      
      </Router>

      )
        : window.location.pathname === '/' || window.location.pathname === "/login" ? (<Router>
          <Routes>
            {/* <Route path='/allform' element={<Allform />} />
            <Route path='/jotform' element={<Jotform />} /> */}
            <Route path="/" element={<Register />} />
            <Route path='/login' element={<Login setUser={handleLogin} />} />
            {/* <Route path='/publish' element={<Publish />} /> */}
            {/* <Route
            path="/"
            element={<Navigate to="/" replace />}
          /> */}
          </Routes> </Router>
        ) : ''}</>
  );
}

export default Routing;