import React, { useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Settingform from './Settingform';
import Thankyoupage from './Thankyoupage';
import condition_icon from '../../images/contion_icon.svg';
import Mobile_icon from '../../images/Mobile_icon.svg';
import Sa_accordian from '../../images/Sa_accordian.svg';
import email_icon_1 from '../../images/email_icon_1.svg';
 const Auto = () => {
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
    <div class="col-10">
      
{/* Direct link div start */}
<div className='main_w'>
<div className=' underline d-flex align-items-center px-5'>
 <li className='primar  px-2 mt-4  text-white fw-bold fs-4 rounded-circle'>
 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#4cc256" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M228.4,89.3l-96-64a8.2,8.2,0,0,0-8.8,0l-96,64A7.9,7.9,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A7.9,7.9,0,0,0,228.4,89.3ZM40,200V111.5l65.9,47a7.9,7.9,0,0,0,4.6,1.5h35a7.9,7.9,0,0,0,4.6-1.5l65.9-47V200Z"></path></svg>
  </li>
  <li className='fs-6 text-black mt-5 pb-2 map'>
 <div className='d-flex '>
  <h5 className='fs-8 heading_5 remider' >CLONE OF CLONE OF AUTORESPONDER 1 </h5>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='mx-2' fill="#0d0808" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"></path></svg>
 </div>
  <p className='paragraph '>Send autoresponder email to the person who fills your form.</p>
  </li>
</div>
</div>
<div>
<nav class="nav  flex-column flex-sm-row bg-white mx-5 px-5 border border-black py-2">
  <a class="flex-sm-fill text-sm-center nav-link px-4 text-black text_design" aria-current="page" href="#">EMAIL</a>
  <a class="flex-sm-fill text-sm-center nav-link text-black" href="#">RECIPIENTS</a>
  <a class="flex-sm-fill text-sm-center nav-link text-black" href="#">ADVANCED</a>
</nav>
<div className='mx-5 bg-white py-5' >
 <div className='mx-4 mt-3'>
  <div className='d-flex justify-content-between'>
    <li className='d-flex'> 
      <h6>
        Sender Name
      </h6>
    </li>
    <li>
        </li>
  </div>
  <div className='mt-2'>
  <input class="form-control " type="text" placeholder="Jotform" aria-label=" example"/>
    
  </div>
  
 </div>
 <div className='mx-4 mt-5'>
  <div className='d-flex justify-content-between'>
    <li className='d-flex'> 
      <h6>
        Reply-to Email
      </h6>
    </li>
    <li>
        </li>
  </div>
  <div className='mt-2'>
  <input class="form-control " type="text" placeholder="noreply@jotform.com" aria-label=" example"/>
    
  </div>
  
 </div>
 <div className='mx-4 mt-5'>
  <div className='d-flex justify-content-between'>
    <li className='d-flex'> 
    <li className='d-flex'> 
      <h6>
      Recipient Email
      </h6>
      <svg xmlns="http://www.w3.org/2000/svg" className='pb-1' width="12" height="12" fill="#f31212" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59.4-4.1-22-55.5A16.4,16.4,0,0,0,128,16h0a16.4,16.4,0,0,0-15.2,10.4L90.4,82.2,31.4,86A16.5,16.5,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.4,38.4L53.9,207a18.5,18.5,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.5,16.5,0,0,0,15.8-20.8l-14.3-58.1L234,115.5A16.8,16.8,0,0,0,239.2,97.4Z"></path></svg>
    </li>
    </li>
    <li>
        </li>
  </div>
  <div className='mt-2 position-relative'>
  <input class="form-control " type="text" placeholder="Email" aria-label=" example"/>
    <div className='position-absolute new_icon_3'>
    <img src={email_icon_1} height ="10px" alt = "manual"/>

    </div>
    <div className='bg-black position-absolute  border-setup'>

    </div>
  </div>
  
 </div>
</div>
</div>
{/* direct link div end */}
{/* form div start*/}

    </div>
    <div class="col-1">
  </div>
<div class="col-1">
</div>
 </div>
  </div>
 </main>
  </div>
</main>

</>
  )
}
export default Auto;