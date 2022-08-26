import React, { useEffect, useRef } from 'react'
import $ from 'jquery'
import { FiAlignJustify, FiStar } from "react-icons/fi";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Link } from 'react-router-dom';
import Dark from '../DarkAuth';
const Allform = ({darkmodes,setDarkmodes}) => {
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
    e(".dropdown-toggle").on("click",function () {
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
    <Dark darkmodes={darkmodes} setDarkmodes={setDarkmodes}/>
      <div class="wrapper">

        <nav id="sidebars" className={darkmodes ? "text-white body-dark border-end" : "text-dark body-light border-end"}>
          <div class={"sidebar-header "+ (darkmodes ? "text-white body-dark border-bottom" : "text-dark body-light border-bottom")}>
            <div className='allform-logo-div'>
              <a class="navbar-brand brand-logo" href="/dashboard">
                <img src="../../images/Logo.png" alt="logo" className='allform-logo' />
              </a>
            </div>
          </div>

          <ul class="list-unstyled components">
            <h4 className='side-head'>MY FORMS</h4>
            <hr></hr>
            <li>
              <button type="button" class={"btn "+ (darkmodes ? "text-white" : "text-dark ")} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                All Forms
              </button>
              {/* <Link to='/allform' class="">All Forms</Link> */}
              {/* <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul> */}

            </li>
            <hr></hr>
            <li>
              <a href='/dashboard' class="">Create a new folder</a>
              {/* <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul> */}

            </li>
            <hr></hr>

            {/* <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul> */}


            <li>
              <Link to='/' class="">ASSIGNED FORMS</Link>
              {/* <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul> */}

            </li>
            <hr></hr>


            <li>
              <Link to='/' class="">My Drafts</Link>
              {/* <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul> */}

            </li>

            <hr></hr>
            {/* <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li> */}
          </ul>

          {/* <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                </li>
            </ul> */}
        </nav>

        <div id="content"  className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>

          <nav class="navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0">
            <div class={"container-fluid  ps-1 container-home-header " + (darkmodes ? "text-white body-dark border-bottom" : "text-dark bg-primary border-bottom")}>

              {/* <button type="button" id="sidebarCollapse" class="btn btn-info">
                <FiAlignJustify />
              </button> */}
              {/* <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                fgdgf
              </button> */}

              {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                        </ul>
                    </div> */}
              <ul class="navform navbar-nav ml-auto align-items-center right-nav">
                <li class="nav-item active ps-3 formlink">
                  <a href='/dashboard' class="nav-link-hover anchor_text_color">analytics</a>
                </li>
                <li className="nav-item ps-3 formlink">
                  <Link className="nav-link-hover anchor_text_color" to='/'>Inbox</Link>
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
                  <ul class="navform">

                    <li class="button-dropdown formlink">
                      <a href="javascript:void(0)" class="dropdown-toggle drop">
                        More <span>▼</span>
                      </a>
                      <div class="dropdown-menu largest-list">
                        {/* <ul>
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
                        </ul> */}
                        <ul>
                          {/* <li>
                            <a href="#" className='drop'>  DATA</a>
                          </li>
                          <li>
                            <a href="#" className='drop'>Submissions</a>
                          </li>
                          <li>
                            <a href="#" className='drop'>Inbox</a>
                          </li> */}
                          <li>
                            <a href="#" className='drop'>Form Analytics</a>
                          </li>
                          {/* <li>
                            <a href="#" className='drop'>Create Report</a>
                          </li> */}
                          <li>
                            <a href="#" className='drop'>Create PDF Document</a>
                          </li>
                          {/* 
                          <li>
                            <a href="#" className='drop'> Create Approval Flow</a>
                          </li> */}
                        </ul>
                        {/* <ul>
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
                        </ul> */}
                      </div>


                    </li>


                  </ul>
                </li>

              </ul>

            </div>
          </nav>
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

    </>
  )
}
export default Allform;