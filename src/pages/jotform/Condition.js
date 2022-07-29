import React, { useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Settingform from './Settingform';
import Thankyoupage from './Thankyoupage';
import condition_icon from '../../images/contion_icon.svg';
import Mobile_icon from '../../images/Mobile_icon.svg';
import Sa_accordian from '../../images/Sa_accordian.svg';
import condition from '../../images/condition_icon.svg';
import dropdown from '../../images/dropdown.svg';
import Option from './Option';
 const Condition = () => {
 useEffect(()=>{
    $(".sidebar-dropdown > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if (
          $(this)
            .parent()
            .hasClass("active")
        ) {
          $(".sidebar-dropdown").removeClass("active");
          $(this)
            .parent()
            .removeClass("active");
        } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this)
            .next(".sidebar-submenu")
            .slideDown(200);
          $(this)
            .parent()
            .addClass("active");
        }
      });
      
      $("#close-sidebar").click(function() {
        $(".page-wrapper").removeClass("toggled");
      });
      $("#show-sidebar").click(function() {
        $(".page-wrapper").addClass("toggled");
      });
      
 },[])

  return (
   <>
   <main>
   <div class="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i class="fas fa-bars"></i>
  </a>
  <nav id="sidebarsetting" class="sidebar-wrapper2">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <a href="#">pro sidebar</a>
        <div id="close-sidebar">
          <i class="fas fa-times"></i>
        </div>
      </div>
      {/* <div class="sidebar-header">
        <div class="user-pic">
          <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
            alt="User picture"/>
        </div>
        <div class="user-info">
          <span class="user-name">Jhon
            <strong>Smith</strong>
          </span>
          <span class="user-role">Administrator</span>
          <span class="user-status">
            <i class="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
      </div> */}

      {/* <div class="sidebar-search">
        <div>
          <div class="input-group">
            <input type="text" class="form-control search-menu" placeholder="Search..."/>
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
   */}
      <div class="sidebar-menu">
        <ul>
          {/* <li class="header-menu">
            <span>General</span>
          </li> */}
          {/* <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-tachometer-alt"></i>
              <span>Dashboard</span>
              <span class="badge badge-pill badge-warning">New</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="#">Dashboard 1
                    <span class="badge badge-pill badge-success">Pro</span>
                  </a>
                </li>
                <li>
                  <a href="#">Dashboard 2</a>
                </li>
                <li>
                  <a href="#">Dashboard 3</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-shopping-cart"></i>
              <span>E-commerce</span>
              <span class="badge badge-pill badge-danger">3</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="#">Products

                  </a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Credit cart</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="far fa-gem"></i>
              <span>Components</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="#">General</a>
                </li>
                <li>
                  <a href="#">Panels</a>
                </li>
                <li>
                  <a href="#">Tables</a>
                </li>
                <li>
                  <a href="#">Icons</a>
                </li>
                <li>
                  <a href="#">Forms</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-chart-line"></i>
              <span>Charts</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="#">Pie chart</a>
                </li>
                <li>
                  <a href="#">Line chart</a>
                </li>
                <li>
                  <a href="#">Bar chart</a>
                </li>
                <li>
                  <a href="#">Histogram</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-globe"></i>
              <span>Maps</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="#">Google maps</a>
                </li>
                <li>
                  <a href="#">Open street map</a>
                </li>
              </ul>
            </div>
          </li> */}
          {/* <li class="header-menu">
            <span>Extra</span>
          </li> */}
          {/* <li>
            <a href="#">
              <i class="fa fa-book"></i>
              <span>Documentation</span>
              <span class="badge badge-pill badge-primary">Beta</span>
            </a>
          </li> */}
          {/* <li className='list-sidebar-jotform '>
            <Link to="/setting-form">
           <div className='jotform-sidebar'>
           <FiSettings className='i'/>
             <div>
             <span className='sidebars-name'>
             <Link to='/Settingform'>Setting Form</Link>
               </span>
             <p>Form status and properties.</p>
             </div>
           </div>
           
            </Link>

          </li> */}
            <div className='quick list-sidebar-jotform py-3 '>
                <Link to="/settingform">
            <ul className='d-flex '>
              <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="44" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><path d="M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.2-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path></svg></li>
              <li className='share'>
                <h6 className='text-white fw-semibold '>SETTING FORM</h6>
                 <p className='text-white font_r fw-7'>Form status and properties</p>
              </li>
            </ul>
              </Link>
         </div> 
            <div className='quick list-sidebar-jotform py-3 '>
                <Link to="/thankyoupage">
            <ul className='d-flex '>
              <li className=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path></svg>
                </li>
              <li className='share'>
                <h6 className='text-white fw-semibold '>THANK YOU PAGE</h6>
                 <p className='text-white font_r fw-7'>Shown after form submit.</p>
              </li>
            </ul>
              </Link>
         </div> 
         <div className='quick list-sidebar-jotform py-3'>
          <Link to="/Setting_email">
               <ul className='d-flex '>
              <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg></li>
              <li className='share'>
                <h6 className='text-white fw-semibold '>EMAIL</h6>
                <p className='text-white fw-7 font_r'>Reminders and  instant sharing.</p>
              </li>
            </ul>
          </Link>
            </div>
            <div className='quick list-sidebar-jotform py-3'>
               <ul className='d-flex '>
              <li className=''>
              <img src={condition_icon} height ="24px" alt = "manual"/>
               </li>
                <li className='share'>
                <h6 className='text-white fw-semibold '>CONDITIONS</h6>
                <p className='text-white fw-7 font_r'>Create conditional logic.</p>
              </li>
             </ul>
             </div>
            <div className='quick list-sidebar-jotform py-3'>
               <ul className='d-flex '>
              <li className=''>
              <img src={Mobile_icon} height ="28px" alt = "Mobile_icon"/>
               </li>
                <li className='share'>
                <h6 className='text-white fw-semibold '>MOBILE NOTIFICATION</h6>
                <p className='text-white fw-7 font_r'>Customize your app notification</p>
              </li>
             </ul>
             </div>
             </ul>
      </div>
    </div>
   
  </nav>
  <main class="page-content">
  <div class="container ">
  <div class="row felx align-items-center justify-content-center">
      {/* main div start */}
    <div class="col- col_6">
      
{/* Direct link div start */}
<div className='main_w'>
<div className=' underline d-flex align-items-center '>
 <li className='conduct py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
 <img src={condition_icon} height ="18px" alt = "manual"/>

  </li>
  <li className='fs-6 text-black mt-5 pb-2 map'>
  <h5 className='fs-8 heading_5 remider' >NEW CONDITION</h5>
  <p className='paragraph '>Select a suitable condition type below to add a new condition.</p>
  </li>
</div>
</div>
{/* direct link div end */}
{/* form div start*/}
<div class="accordion" id="accordionExample">
  <div class="accordion-item standard">
    <div className='d-flex Main_bg justify-content-between align-items-center border border-black px-3 py-3'>
    <div class="accordion-header" id="headingOne">
    <div className=''>
      <div className='d-flex '>
        <li className='shown px-2 rounded-1'>
        <svg xmlns="http://www.w3.org/2000/svg"  className='mt-2' width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>
        </li>
        <li className='mx-4 '>
       <h5 className='remider fw-bold .showhover'>SHOW / HIDE FIELD</h5>
       <p className='remider fs_6 showhover'>Change visibility of field(s) depending on `IF` State conditions.</p>
        </li>
      </div>
     </div>
      
    </div>
     {/* <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
     <li className='mt-2 enda'>
    <img src={dropdown} height ="13px" className='dropi' alt = "manual"/> 
  </li>
  </div>
</div>
 </div>
  {/* second card start */}
  <div class="accordion mt-3" id="accordionExample">
  <div class="accordion-item standard">
    <div className='d-flex Main_bg justify-content-between align-items-center px-3 py-3'>
    <div class="accordion-header" id="headingOne">
    <div className=''>
      <div className='d-flex '>
        <li className='shown px-2 rounded-1'>
        <svg xmlns="http://www.w3.org/2000/svg"  className='mt-2' width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>
        </li>
        <li className='mx-4 '>
       <h5 className='remider fw-bold .showhover'>SHOW / HIDE FIELD</h5>
       <p className='remider fs_6 showhover'>Change visibility of field(s) depending on `IF` State conditions.</p>
        </li>
      </div>
     </div>
      
    </div>
     {/* <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
     <li className='mt-2 enda'>
    <img src={dropdown} height ="13px" className='dropi' alt = "manual"/> 
  </li>
  </div>
  {/* second card start */}
    
  {/* second card end */}
</div>
 </div>
  {/* second card end */}
    </div>
    <div class="col-3">
  </div>
<div class="col-3">
</div>
 </div>
  </div>
 </main>
  </div>
</main>

</>
  )
}
export default Condition;