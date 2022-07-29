import React, { useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Settingform from './Settingform';
import Thankyoupage from './Thankyoupage';


 const Publish = () => {
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
   <div class="page-wrapper chiller-theme toggled ">
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
          {/* pehle wali list start */}
           {/* <li className='list-sidebar-jotform'>
            <Link to="/setting-form">
           <div className='jotform-sidebar'>
           { <FiSettings className='i'/> }<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="94.1" y1="161.9" x2="161.9" y2="94" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><path d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path><path d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path></svg>
             <div>
             <span className='sidebars-name text-white'>
             <Link to='/Settingform'>QUICK SHARE</Link>
               </span>
             <p>Direct form link and social share.</p>
             </div>
           </div>
            </Link>
          </li>  */}
          {/* end list */}
          
         {/* new list start */}
         <div className='quick list-sidebar-jotform py-3 '>
                <Link to='/publish'>
            <ul className='d-flex '>
              <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="94.1" y1="161.9" x2="161.9" y2="94" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><path d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path><path d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path></svg></li>
              <li className='share'>
                <h6 className='text-white fw-semibold '>QUICK SHARE</h6>
                 <p className='text-white font_r fw-7'>Direct form link and social share.</p>
              </li>
            </ul>
              </Link>
         </div>
         
         <div className='quick list-sidebar-jotform py-3'>
                <Link to='/Assign'>
            <ul className='d-flex '>
              <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M64,140a7.9,7.9,0,0,1-8,8H12a8.2,8.2,0,0,1-7.2-4.4,8.2,8.2,0,0,1,.8-8.4A67.8,67.8,0,0,1,33,113.5a40,40,0,1,1,66.3-37,8.1,8.1,0,0,1-3.8,8.4,64.3,64.3,0,0,0-27.8,33.8A61.6,61.6,0,0,0,64,140Zm186.4-4.8A67.8,67.8,0,0,0,223,113.5a40,40,0,1,0-66.3-37,8.1,8.1,0,0,0,3.8,8.4,64,64,0,0,1,27.8,33.8A61.6,61.6,0,0,1,192,140a7.9,7.9,0,0,0,8,8h44a8,8,0,0,0,6.4-12.8Zm-93.2,42.9a48,48,0,1,0-58.4,0,72.1,72.1,0,0,0-35.6,34.4,7.8,7.8,0,0,0,.5,7.7,7.8,7.8,0,0,0,6.7,3.8H185.6a7.8,7.8,0,0,0,6.7-3.8,7.8,7.8,0,0,0,.5-7.7A72.1,72.1,0,0,0,157.2,178.1Z"></path></svg></li>
              <li className='share'>
                <h6 className='text-white fw-semibold '>ASSIGN FORM</h6>
                <p className='text-white fw-7 font_r'>Assign your forms to others.</p>
              </li>
            </ul>
                </Link>
         </div>
         <div className='quick list-sidebar-jotform py-3'>
                <Link to= '/Email'>
            <ul className='d-flex '>
              <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg></li>
              <li className='share'>
                <h6 className='text-white fw-semibold '>EMAIL</h6>
                <p className='text-white fw-7 font_r'>Reminders and  instant sharing.</p>
              </li>
            </ul>
                </Link>
         </div>
         <div className='quick list-sidebar-jotform py-3'>
                <Link to='/Prefill'>
            <ul className='d-flex '>
              <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M88,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm128,56H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM56,56H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Z"></path></svg></li>
              <li className='share'>
                <h6 className='text-white fw-semibold '>PREFILL</h6>
                <p className='text-white fw-7 font_r'>Pre-populate your forms.</p>
              </li>
            </ul>
                </Link>
         </div>
         <div className='quick list-sidebar-jotform py-3'>
                <Link to = '/Pdf'>
            <ul className='d-flex '>
              <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M64,160H48a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H56V176h8a8,8,0,0,1,0,16Zm132-16v12h16a8,8,0,0,1,0,16H196v12a8,8,0,0,1-16,0V168a8,8,0,0,1,8-8h28a8,8,0,0,1,0,16Zm-68-16H114a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h14a32,32,0,0,0,0-64Zm0,48h-6V176h6a16,16,0,0,1,0,32ZM48,136H208a8,8,0,0,0,8-8V88a8.1,8.1,0,0,0-2.3-5.7l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88A8,8,0,0,0,48,136ZM152,44l44,44H152Z"></path></svg></li>
              <li className='share'>
                <h6 className='text-white fw-semibold '>PDF</h6>
                <p className='text-white fw-7 font_r'>Download fillable PDF.</p>
              </li>
            </ul>
                </Link>
         </div>
         

          {/* new list end */}

          {/* <li className='list-sidebar-jotform'>
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

          </li>
          <li className='list-sidebar-jotform'>
            <Link to="/setting-form">
           <div className='jotform-sidebar'>
           <FiSettings className='i'/>
             <div>
              <Link to='/thankyoupage'>
             <span className='sidebars-name'>Thank You Page</span>
             </Link>
             <p>Shown after form submit.</p>
             </div>
           </div>
           
            </Link>

          </li>
          <li>
            <a href="#">
              <i class="fa fa-folder"></i>
              <span>Examples</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
    <div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
        <span class="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
        <span class="badge badge-pill badge-success notification">7</span>
      </a>
      <a href="#">
        <i class="fa fa-cog"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href="#">
        <i class="fa fa-power-off"></i>
      </a>
    </div>
  </nav>
  <main class="page-content">
    {/* <Settingform /> */}
{/* <Thankyoupage /> */}  
{/* main container */}
<div class="container ">
  <div class="row felx align-items-center justify-content-center">
      {/* main div start */}
    <div class="col- col_6">
      <div className='d-flex justify-content-between pt-2 mt-5 big_div '>
      <div>
    <ul className='d-flex align-items-center pt-3'>
  <li className=' class_i  fw-bold fs-4'>
    !
  </li>
  <li className='fs-7 text-white font_comb'>
  Please sign up to publish your form.
  </li>
</ul>
</div>
<div className=' p-3 pt-2'>
  <button className='rounded px-2  border-white' >
    <p className='text-black fw-bold pt-1'>Sign Up Now -  <span className='text-black fw-light'>its free!</span></p>
  </button>
</div>
</div>
{/* Direct link div start */}
<div className='main_w'>
<div className=' underline d-flex align-items-center '>
 <li className='class_g text-white fw-bold fs-4 rounded'>
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="94.1" y1="161.9" x2="161.9" y2="94" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><path d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path><path d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path></svg>
  </li>
  <li className='fs-6 text-black mt-5  map'>
  <h5 className='fs-8 heading_5'>DIRECT LINK OF YOUR FORM</h5>
  <p className='paragraph '>Your form is securely published and ready to use at this address.</p>
  </li>
</div>
</div>
{/* direct link div end */}
{/* form div start*/}

<form className='bg-white shadow-sm p-4 rounded-1'>
  <fieldset>
    <div className='d-flex align-items-center justify-content-between'>
      <div className='d-flex '>
        <li className='link'>
            <h6 className='fw-Semibold text-black mt-1'>LINK TO SHARE</h6> 
          </li>
        <li> 
          <ul className='d-flex border border-success border-1 rounded-pill border_width '>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM100,52a28,28,0,0,1,56,0V80H100Z"></path></svg></li>
            <li className='pb'>Public Form</li>
          </ul>
        </li>
      </div>  
      <div>
        <ul className='d-flex align-items-center justify-content-center'>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4370df" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M237.5,104.3a8,8,0,0,0-4-5.3L209.7,85.8q-1.9-3.9-4.2-7.5l.4-27.2a8.3,8.3,0,0,0-2.6-6.1,112,112,0,0,0-41.1-23.7,8.1,8.1,0,0,0-6.6.8l-23.3,14c-2.9-.1-5.7-.1-8.6,0l-23.3-14a8.1,8.1,0,0,0-6.6-.8A111.1,111.1,0,0,0,52.7,45.1a7.9,7.9,0,0,0-2.6,6l.5,27.2c-1.6,2.4-3,4.9-4.4,7.5L22.5,99a7.7,7.7,0,0,0-4,5.3,111.4,111.4,0,0,0,0,47.4,8,8,0,0,0,4,5.3l23.8,13.2a69.3,69.3,0,0,0,4.3,7.5l-.5,27.2a8.3,8.3,0,0,0,2.6,6.1,112.9,112.9,0,0,0,41.1,23.7,8.1,8.1,0,0,0,6.6-.8l23.3-14h8.6l23.4,14a7.3,7.3,0,0,0,4.1,1.2,10,10,0,0,0,2.4-.4,111.1,111.1,0,0,0,41.1-23.8,7.9,7.9,0,0,0,2.6-6l-.4-27.2c1.5-2.4,2.9-4.9,4.3-7.5L233.6,157a7.9,7.9,0,0,0,3.9-5.3A111.4,111.4,0,0,0,237.5,104.3ZM172,128a44,44,0,1,1-44-44A44,44,0,0,1,172,128Z"></path></svg>
          </li>
          <li className='fs-6 fw-semibold setting'>Settings</li>
        </ul>
      </div>
    </div>
    
    <div class="mb-3">
      {/* <label for="disabledTextInput" class="form-label">Disabled input</label> */}
      <input type="text" id="disabledTextInput" class="form-control" placeholder="https://www.jotform.com/build/221860994544061/publish"/>
    </div>
    <div class="d-flex justify-content-end border_details">
     <button className='bg-success rounded-3 border-white py-2 px-3 text-white'>
      COPY LINK
     </button>
     <button className='bg-primary rounded-3 border-white py-2 px-3 text-white'>
     OPEN IN NEW TAB
     </button>
    </div>
    <div className='bg-black _border'></div>
    <div className='d-flex align-items-center justify-content-start mt-5'>
      <div className='d-flex '>
        <li className='link'>
            <h6 className='fw-Semibold text-black mt-1'>INVITE BY EMAIL </h6> 
          </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" className='bg-white shadow-sm rounded-circle' width="16" height="16" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M207.4,115.1A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l72-72a8.1,8.1,0,0,1,11.4,0l72,72A8.4,8.4,0,0,1,207.4,115.1Z"></path></svg>
        </li>
      </div>
      
      
    </div>
    <div>
    <div class="mt-3">
      {/* <label for="disabledTextInput" class="form-label">Disabled input</label> */}
      <input type="text" id="disabledTextInput" class="form-control" placeholder="https://www.jotform.com/build/221860994544061/publish"/>
    </div>
    </div>
    
  </fieldset>
</form>

{/* form div end */}

{/* two blocks div start*/}
<div className='bg-white p-4 mt-4 rounded-1'>
  <div className='d-flex align-items-center justify-content-between '>
    <li>
   <h6 className='fw-bold'>SHARE FORM</h6>
   <p className='font'>Share your form link in various social posts and through  email.</p>  
    </li>
    <li>
    <button className='bg-info rounded-3 border-white py-2 px-3 text-white _option'>
      SHARE OPTIONS
     </button>
    </li>
  </div>
</div>
{/* 2nd block div */}
<div className='bg-white p-4 mt-4 rounded-1'>
  <div className='d-flex align-items-center justify-content-between '>
    <li>
   <h6 className='fw-bold'>CREATE APP</h6>
   <p className='font'>Create an app to store all of your form in one place and easily share them with others. start with this form!</p>  
    </li>
    <li>
    <button className='bg-danger rounded-3 border-white py-2 px-3 text-white _option'>
      CREATE APP
     </button>
    </li>
  </div>
</div>
    </div>
    {/* main div end */}
    <div class="col-3">
      </div>
    <div class="col-3">
      </div>
      
  </div>
  </div>

  </main>
  
</div>
<div>
  
</div>
</main>

</>
  )
}
export default Publish;