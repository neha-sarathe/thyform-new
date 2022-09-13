import React, { useEffect, useRef } from 'react'
import $ from 'jquery'
import { FiAlignJustify, FiStar } from "react-icons/fi";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Link } from 'react-router-dom';
import Dark from '../DarkAuth';
import Navbarallform from './Navbarallform'
import AllformNav from './AllformNav';
const Allform = ({ darkmodes, setDarkmodes }) => {
  // const dropdownRef = useRef(null);
  // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  // const onClick = () => setIsActive(!isActive);
  // console.log(isActive,' setIsActive(!isActive)')
  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebars').toggleClass('active');
    });
  });

  $(document).ready(function (e) {
    function t(t) {
      e(t).bind("click", function (t) {
        t.preventDefault();
        e(this).parent().fadeOut()
      })
    }
    e(".dropdown-toggle").on("click", function () {
      var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
      e(".button-dropdown .dropdown-menu").hide();
      e(".button-dropdown .dropdown-toggle").removeClass("actives1");
      if (t) {
        e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("actives1")
        e(this).parents(".button-dropdown").children(".dropdown-menu").css("display", "flex");
      }
    });
    e(document).bind("click", function (t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("actives1");
    })
  });

  return (
    <>
      {/* <Dark darkmodes={darkmodes} setDarkmodes={setDarkmodes}/> */}
      <div className="wrapper">
        <AllformNav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
        <div style={{ width: '100%' }}>

          <div id="content" className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>

            <Navbarallform darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
            <h1 className='text-center'> All Forms</h1>
            {/* <div class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">


              <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul class="navform navbar-nav ml-auto align-items-center">
                  <li class="nav-item active p-3 formlink">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </li>
                  <li class="nav-item ps-4 formlink">
                    <FiStar style={{ fontSize: '22px' }} />
                  </li>
                  <li class="nav-item ps-3 formlink">
                    <a class="nav-link a" href="#">Page</a>
                  </li>
                  <li class="nav-item ps-3 formlink">
                    <h4>Form</h4>
                    <p>one submission Created on Jun 28, 2022</p>
                  </li>
                </ul>
                <ul class="navform navbar-nav ml-auto align-items-center right-nav">
                  <li class="nav-item active ps-3 formlink">
                    <a href='/dashboard' class="nav-link-hover">analytics</a>
                  </li>
                  <li className="nav-item ps-3 formlink">
                    <Link className="nav-link-hover" to='/'>Inbox</Link>
                  </li>
                  <li class="nav-item ps-3 formlink">
                    {/* <button onClick={onClick} className="menu-trigger1">
          <span>more</span>
          
        </button>
        <div
         style={{display:'flex'}}
          ref={dropdownRef}
          className={`menus1 ${isActive ? "actives" : "inactive"}`}
        >
          <ul>
          <li>
          PUBLISH
            </li>
           
            <li>
              <a href="#">Publish Form</a>
            </li>
            <li>
              <a href="#">Share as Template</a>
            </li>
            <li>
              <a href="#">Assign Form</a>
            </li>
            <li>
              <a href="#">Create Prefill</a>
            </li>
            <li>
              <a href="#">Create an App</a>
            </li>
            
          </ul>
          <ul>
          <li>
           DATA
            </li>
            <li>
              <a href="#">Submissions</a>
            </li>
            <li>
              <a href="#">Inbox</a>
            </li>
            <li>
              <a href="#">Form Analytics</a>
            </li>
            <li>
              <a href="#">Create Report</a>
            </li>
            <li>
              <a href="#">Create PDF Document</a>
            </li>
           
            <li>
              <a href="#"> Create Approval Flow</a>
            </li>
          </ul>
          <ul>
          <li>
           FORM
            </li>
            <li>
              <a href="#">Edit</a>
            </li>
            <li>
              <a href="#">Edit</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Rename</a>
            </li>
            <li>
              <a href="#">Clone</a>
            </li>
            <li>
              <a href="#">Disable</a>
            </li>
            <li>
              <a href="#">Revision History</a>
            </li>
            <li>
              <a href="#">Archive</a>
            </li>
            <li>
              <a href="#">Delete</a>
            </li>
          </ul>
        </div> */}
            {/*    <ul class="navform">

                      <li class="button-dropdown formlink">
                        <a href="javascript:void(0)" class="dropdown-toggle drop">
                          More <span>▼</span>
                        </a>
                        <div class="dropdown-menu largest-list">
                          <ul>
                            <li>
                              <a href="#" className='drop'>  PUBLISH</a>
                            </li>

                            <li>
                              <a href="#" className='drop'>Publish Form</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Share as Template</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Assign Form</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Create Prefill</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Create an App</a>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <a href="#" className='drop'>  DATA</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Submissions</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Inbox</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Form Analytics</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Create Report</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Create PDF Document</a>
                            </li>

                            <li>
                              <a href="#" className='drop'> Create Approval Flow</a>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <a href="#" className='drop'>  FORM</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Edit</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Edit</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Settings</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Rename</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Clone</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Disable</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Revision History</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Archive</a>
                            </li>
                            <li>
                              <a href="#" className='drop'>Delete</a>
                            </li>
                          </ul>
                        </div>


                      </li>


                    </ul>
                  </li>

                </ul>
              </div>
            </div>
          </div> */}


            {/* <div class="line"></div> */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Allform;