import React, { useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Settingform from './Settingform';
import Thankyoupage from './Thankyoupage';
import condition_icon from '../../images/contion_icon.svg';
import Mobile_icon from '../../images/Mobile_icon.svg'
import Sa_accordian from '../../images/Sa_accordian.svg'
const Setting = () => {
  useEffect(() => {
    $(".sidebar-dropdown > a").click(function () {
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

    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });

  }, [])

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
                    <ul className='d-flex '>
                      <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg></li>
                      <li className='share'>
                        <h6 className='text-white fw-semibold '>EMAIL</h6>
                        <p className='text-white fw-7 font_r'>Reminders and  instant sharing.</p>
                      </li>
                    </ul>
                  </div>
                  <div className='quick list-sidebar-jotform py-3'>
                    <ul className='d-flex '>
                      <li className=''>
                        <img src={condition_icon} height="24px" alt="manual" />
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
                        <img src={Mobile_icon} height="28px" alt="Mobile_icon" />
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
                      <li className='bg-primary py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg>
                      </li>
                      <li className='fs-6 text-black mt-5 pb-2 map'>
                        <h5 className='fs-8 heading_5 remider' >NEW EMAIL</h5>
                        <p className='paragraph '>Please select an email type below to create your email.</p>
                      </li>
                    </div>
                  </div>
                  {/* direct link div end */}
                  {/* form div start*/}
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item standard">
                      <div className='d-flex justify-content-center align-items-center py-2 border border-primary'>
                        <div class="accordion-header" id="headingOne">
                          <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4811df" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>
                          </button>
                        </div>
                        <div>
                          <h5 className='fw-bold heading pt-2'>Add an email</h5>
                        </div>
                      </div>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        {/* first man div start  */}
                        <div className=''>
                          <form className='bg-white shadow-sm  rounded-1 p-3 position-relative'>
                            <fieldset>
                              <div className='d-flex align-items-center justify-content-between '>
                                <div className='main_w'>
                                  <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                    <li className='background p-2 rounded-2'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M207.8,112a79.7,79.7,0,0,0-79.2-80H128a79.9,79.9,0,0,0-79.8,80c0,34.3-7.1,53.7-13,63.9a16.2,16.2,0,0,0-.1,16.1A15.9,15.9,0,0,0,49,200H88a40,40,0,0,0,80,0h39a15.9,15.9,0,0,0,13.9-8,16.2,16.2,0,0,0-.1-16.1C214.9,165.7,207.8,146.3,207.8,112ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224ZM224.9,73.3a9.3,9.3,0,0,1-3.5.8,7.9,7.9,0,0,1-7.2-4.5,97,97,0,0,0-35-38.8,8,8,0,0,1,8.5-13.6,111.7,111.7,0,0,1,40.8,45.4A8,8,0,0,1,224.9,73.3Zm-190.3.8a9.3,9.3,0,0,1-3.5-.8,8,8,0,0,1-3.6-10.7A111.7,111.7,0,0,1,68.3,17.2a8,8,0,0,1,8.5,13.6,97,97,0,0,0-35,38.8A7.9,7.9,0,0,1,34.6,74.1Z"></path></svg>
                                    </li>
                                    <li className='fs-6 text-black map'>
                                      <h5 className='fs-7 fw-bold heading_5 remider'>NOTIFICATION EMAIL</h5>
                                      <p className='paragraph remider'>Receive an email when someone fills your form.</p>
                                    </li>
                                  </div>
                                </div>
                                <div>
                                  <ul className='d-flex align-items-center justify-content-center'>
                                    <li className='mt-2'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                    </li>
                                  </ ul>
                                </div>
                              </div>
                            </fieldset>
                            <div className='position-absolute succes bg-opacity-75'>

                            </div>
                          </form>
                        </div>
                        {/* first man div end  */}
                        <div className='mt-4'>
                          <form className='bg-white shadow  rounded-1 p-3 position-relative '>
                            <fieldset>
                              <div className='d-flex align-items-center justify-content-between '>
                                <div className='main_w'>
                                  <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                    <li className='bg-success p-2 rounded-2'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M207.8,112a79.7,79.7,0,0,0-79.2-80H128a79.9,79.9,0,0,0-79.8,80c0,34.3-7.1,53.7-13,63.9a16.2,16.2,0,0,0-.1,16.1A15.9,15.9,0,0,0,49,200H88a40,40,0,0,0,80,0h39a15.9,15.9,0,0,0,13.9-8,16.2,16.2,0,0,0-.1-16.1C214.9,165.7,207.8,146.3,207.8,112ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224ZM224.9,73.3a9.3,9.3,0,0,1-3.5.8,7.9,7.9,0,0,1-7.2-4.5,97,97,0,0,0-35-38.8,8,8,0,0,1,8.5-13.6,111.7,111.7,0,0,1,40.8,45.4A8,8,0,0,1,224.9,73.3Zm-190.3.8a9.3,9.3,0,0,1-3.5-.8,8,8,0,0,1-3.6-10.7A111.7,111.7,0,0,1,68.3,17.2a8,8,0,0,1,8.5,13.6,97,97,0,0,0-35,38.8A7.9,7.9,0,0,1,34.6,74.1Z"></path></svg>
                                    </li>
                                    <li className='fs-6 text-black map'>
                                      <h5 className='fs-7 fw-bold heading_5 remider'>AUTORESPONDER EMAIL</h5>
                                      <p className='paragraph remider'>Send autoresponder email to the person who fills your form. </p>
                                    </li>
                                  </div>
                                </div>
                                <div>
                                  <ul className='d-flex align-items-center justify-content-center'>
                                    <li className='mt-2'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </fieldset>
                            <div className='position-absolute bg-success ut'>

                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/*
<form className='bg-white shadow  rounded-1  position-relative mt-4'>
  <fieldset>
    <div className='d-flex align-items-center justify-content-between pb-1'>
    <div className='main_w '>
<div className=' underline d-flex align-items-center  mx-2 '>
  <li className='fs-6 text-black map pt-4'>
  <h5 className='fs-7 fw-bold heading_5 remider  autom'>AUTORESPONDER 1</h5>
<div>
  <div className='d-flex'>
    <li className='d-flex align-items-center '>
      <div >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Jotform</h6>
      </div>
    </li>
    <li>
    <div className='d-flex mx-2 '>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M132.9,231.4A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l96,96a8.1,8.1,0,0,1,0,11.4l-96,96A8.4,8.4,0,0,1,132.9,231.4Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Email</h6>
      </div>
      </div> 
    </li>
  </div>
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
  </li>
  </div>
  </div>
    <div className='mainpage'>
    <ul className='d-flex align-items-center justify-content-center m-4  '>
         <li className='bg_succes p-2 rounded-1'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"></path></svg>
         </li>  
         <li className='bg_succes p-2 rounded-1 mx-2'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
         </li>
         </ul>
      </div>
    </div>
     </fieldset>
      <div className='position-absolute bg_succes ut'>
    </div>
</form>
 <form className='bg-white shadow  rounded-1  position-relative mt-4'>
  <fieldset>
    <div className='d-flex align-items-center justify-content-between pb-1'>
    <div className='main_w '>
<div className=' underline d-flex align-items-center  mx-2 '>
  <li className='fs-6 text-black map pt-4'>
  <h5 className='fs-7 fw-bold heading_5 remider  autom'>CLONE  OF AUTORESPONDER 1</h5>
<div>
  <div className='d-flex'>
    <li className='d-flex align-items-center '>
      <div >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Jotform</h6>
      </div>
    </li>
    <li>
    <div className='d-flex mx-2'>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M132.9,231.4A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l96,96a8.1,8.1,0,0,1,0,11.4l-96,96A8.4,8.4,0,0,1,132.9,231.4Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Email</h6>
      </div>
      </div> 
    </li>
  </div>
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
  </li>
  </div>
  </div>
    <div className='mainpage'>
    <ul className='d-flex align-items-center justify-content-center m-4  '>
         <li className='bg_succes p-2 rounded-1'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"></path></svg>
         </li>  
         <li className='bg_succes p-2 rounded-1 mx-2'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
         </li>
         </ul>
      </div>
    </div>
     </fieldset>
      <div className='position-absolute bg_succes ut'>
    </div>
</form>
 <form className='bg-white shadow  rounded-1  position-relative mt-4'>
  <fieldset>
    <div className='d-flex align-items-center justify-content-between pb-1'>
    <div className='main_w '>
<div className=' underline d-flex align-items-center  mx-2 '>
  <li className='fs-6 text-black map pt-4'>
  <h5 className='fs-7 fw-bold heading_5 remider  autom'>CLONE OF CLONE OF AUTORESPONDER 1</h5>
<div>
  <div className='d-flex'>
    <li className='d-flex align-items-center '>
      <div >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Jotform</h6>
      </div>
    </li>
    <li>
    <div className='d-flex mx-2'>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M132.9,231.4A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l96,96a8.1,8.1,0,0,1,0,11.4l-96,96A8.4,8.4,0,0,1,132.9,231.4Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Email</h6>
      </div>
      </div> 
    </li>
  </div>
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
  </li>
  </div>
  </div>
    <div className='mainpage'>
    <ul className='d-flex align-items-center justify-content-center m-4  '>
         <li className='bg_succes p-2 rounded-1'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"></path></svg>
         </li>  
         <li className='bg_succes p-2 rounded-1 mx-2'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
         </li>
         </ul>
      </div>
    </div>
     </fieldset>
      <div className='position-absolute bg_succes ut'>
    </div>
</form>
 <form className='bg-white shadow  rounded-1  position-relative mt-4'>
  <fieldset>
    <div className='d-flex align-items-center justify-content-between pb-1'>
    <div className='main_w '>
<div className=' underline d-flex align-items-center  mx-2 '>
  <li className='fs-6 text-black map pt-4'>
  <h5 className='fs-7 fw-bold heading_5 remider  autom fw-semibold'>CLONE OF CLONE OF CLONE OF AUTORESPONDER 1</h5>
<div>
  <div className='d-flex'>
    <li className='d-flex align-items-center '>
      <div >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Jotform</h6>
      </div>
    </li>
    <li>
    <div className='d-flex mx-2'>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M132.9,231.4A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l96,96a8.1,8.1,0,0,1,0,11.4l-96,96A8.4,8.4,0,0,1,132.9,231.4Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Email</h6>
      </div>
      </div> 
    </li>
  </div>
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
  </li>
  </div>
  </div>
    <div className='mainpage'>
    <ul className='d-flex align-items-center justify-content-center m-4  '>
         <li className='bg_succes p-2 rounded-1'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"></path></svg>
         </li>  
         <li className='bg_succes p-2 rounded-1 mx-2'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
         </li>
         </ul>
      </div>
    </div>
     </fieldset>
      <div className='position-absolute bg_succes ut'>
    </div>
        </form> 
        */}
                  </div>
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
export default Setting;