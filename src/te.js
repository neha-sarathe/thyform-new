import logo from './logo.svg';
import styled from "styled-components";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './vendors/feather/feather.css'
import './vendors/mdi/css/materialdesignicons.min.css'
import './vendors/ti-icons/css/themify-icons.css'
import './vendors/typicons/typicons.css'
import './vendors/simple-line-icons/css/simple-line-icons.css'
import './vendors/css/vendor.bundle.base.css'
import './css/vertical-layout-light/style.css'
import './App.scss'
import Setting from './pages/jotform/Setting'
import Publish from './pages/jotform/Publish'
// import Build from './pages/'
import Allform from './pages/Allform'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidbar from './Sidbar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Charts from './Charts';
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
  console.log(window.location.pathname, 'window.location.pathname')
  return (
    <>
      {/* {
        window.location.pathname == '/login' ? '' : <><JotformNav /></>
      } */}
    {
        window.location.pathname === '/dashboard' || window.location.pathname 
        === '/charts' || window.location.pathname === '/morris' ? <><Navbar /><Sidbar/></> : ''
      }
      {
        window.location.pathname === '/jotform' || window.location.pathname === '/setting' || window.location.pathname === '/publish' || window.location.pathname === '/settingform' || window.location.pathname
          === '/Setting_email' || window.location.pathname === '/Condition' || window.location.pathname
          === '/thankyoupage' || window.location.pathname === '/mobilenotification' || window.location.pathname
          === '/Assign' || window.location.pathname === '/Email' || window.location.pathname === '/Prefill' ||
          window.location.pathname === '/Pdf' ? <><JotformNav /></> : ''
      }
      {/* {
        window.location.pathname == '/setting' || 'Setting_email' || 'Condition' || 'thankyoupage' || 'mobilenotification' ? <><JotformNav /></> : ''
      } */}
      {/* {
        window.location.pathname == '/publish' || 'Assign' || 'Email' || 'Prefill' || 'Pdf' ? <><JotformNav /></> : ''
      } */}
      {
        window.location.pathname === '/dashboard' || window.location.pathname === '/jotform' || '/setting'
          || '/publish' || window.location.pathname === '/charts' ? <>
          <Router>
              
            {/* {localStorage.getItem('token') ? <Navbar /> : ''}
            {localStorage.getItem('token') ? <Dark /> : ''}
            {localStorage.getItem('token') ? <Sidbar /> : ''} */}
            {/* <Navbar />
        <Dark />
        <Sidbar /> */}
            <Dark />
            {/* <JotformNav /> */}
            {/* {
          window.location.pathname == "/dashboard" ? <JotformNav /> : ''
        } */}
            <Routes>
              <Route path='/allform' element={<Allform />} />
              <Route path='/jotform' element={<Jotform />} />
              <Route path='/allform' element={<Allform />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/" element={<Register />} />
              <Route path='/login' element={<Login />} />
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
              <Route path='/morris' element={<Morris />} />
            </Routes>
          </Router></> : <>
          <div class="container-scroller">
            <div class="container-fluid page-body-wrapper">
              {
                console.log('aaaaaaaaaaaaa', window.location.pathname)
              }
              {/* {window.location.pathname == '/dashboard' || window.location.href == '/chart' ? <Navbar /> : 'aadfsdfdsf'}
            {window.location.pathname == '/dashboard' || window.location.href == '/chart' ? <Dark /> : ''}
            {window.location.pathname == '/dashboard' || window.location.href == '/chart' ? <Sidbar /> : 'fdsfsd>'} */}
              <Router>
                {/* <Navbar />
        <Dark />
        <Sidbar /> */}
                {/* {window.location.pathname === '/dashboard' || window.location.href == '/chart' ? <Sidbar /> : 'sddsdds'} */}
                <Routes>
                  <Route path='/allform' element={<Allform />} />
                  <Route path='/jotform' element={<Jotform />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/charts" element={<Charts />} />
                  <Route path="/" element={<Register />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/publish' element={<Publish />} />
                  <Route path='/setting' element={<Setting />} />
                  <Route path='/morris' element={<Morris />} />
                </Routes>
              </Router>
            </div>
            {/* <!-- page-body-wrapper ends --> */}
          </div>
          {/* <!-- container-scroller --> */}
          {/* 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 */}</>
      }

    </>
  );
}

export default App;
