import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min';
import $ from "jquery";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';
export const Navbar = ({ darkmodes, setDarkmodes,setMinimizemob }) => {
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
    if ($("#timepicker-example").length) {
      $('#timepicker-example').datetimepicker({
        format: 'LT'
      });
    }
    if ($(".color-picker").length) {
      $('.color-picker').asColorPicker();
    }
    if ($("#datepicker-popup").length) {
      $('#datepicker-popup').datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
      });
    }
    if ($("#inline-datepicker").length) {
      $('#inline-datepicker').datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
      });
    }
    if ($(".datepicker-autoclose").length) {
      $('.datepicker-autoclose').datepicker({
        autoclose: true
      });
    }
    if ($('input[name="date-range"]').length) {
      $('input[name="date-range"]').daterangepicker();
    }
    if ($('.input-daterange').length) {
      $('.input-daterange input').each(function () {
        $(this).datepicker('clearDates');
      });
      $('.input-daterange').datepicker({});
    }
    if ($("#datepicker-popup").length) {
      $('#datepicker-popup').datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
      });
      $("#datepicker-popup").datepicker("setDate", "0");
    }
    e(".dropdown-toggle").click(function () {
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
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [check, setCheck] = useState(false);
  const onCheck = () => {
    setCheck(prevCheck => !prevCheck);
  }
  console.log('check6666', check)
  useEffect(() => {
    // 👇 add class to body element
    if (check) {
      document.body.classList.add('sidebar-icon-only');
    }
    else {
      document.body.classList.remove('sidebar-icon-only');
    }


    // 👇️ removing classes from body element
    // document.body.classList.remove('my-class-3');
  }, [check]);
  const onCheckmobile = () => {
    setMinimizemob(prevCheck => !prevCheck);
  }
  return (
    <>
      <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
        <div class={"text-center navbar-brand-wrapper d-flex align-items-center justify-content-start " + (darkmodes ? "text-white body-dark bg-mini-dark" : "text-dark body-light bg-mini-light")}>
          <div class="me-3">
            <button onClick={onCheck} class={"navbar-toggler  align-self-center " + (darkmodes ? "text-white " : "text-dark ") + (check ? "sidebar-icon-only " : " ")} type="button" data-bs-toggle="minimize" >
              <FiAlignJustify />
            </button>
          </div>
          <div>
            <Link class="navbar-brand brand-logo" to="/dashboard">
              <img src="../../images/Logo.png" alt="logo" />
            </Link>
            <Link class="navbar-brand brand-logo-mini" to="/dashboard">
              <img src="/images/Logo.png" alt="logo" />
            </Link>
          </div>
        </div>
        <div class={"navbar-menu-wrapper d-flex align-items-top " + (darkmodes ? "text-white body-dark" : "text-dark body-light")}>
          <ul class="p-0">
            <li class="nav-item font-weight-semibold d-none d-lg-block ms-0">
              <h3 class="welcome-text" style={{ color: '#808191' }}>Good Morning, <span class={"text-black fw-bold " + (darkmodes ? "text-white " : "text-dark ")}>John Doe</span></h3>
              <h6 class="welcome-sub-text" style={{ color: '#808191' }}>Your performance summary this week </h6>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">

            <li class="nav-item d-none d-lg-block">
              <div id="datepicker-popup" className={"input-group date datepicker navbar-date-picker " + (darkmodes ? "navbar-date-picker-dark" : "navbar-date-picker-light")}>
                <span class="input-group-addon input-group-prepend border-right">
                  <span class={" input-group-text  " + (darkmodes ? "text-white" : "text-dark")}><FaRegCalendarAlt className={'icondate' + (darkmodes ? "text-white" : "text-dark")} /></span>
                </span>
                <input type="text" class="form-control input_date" />
              </div>
              {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
            </li>
            <li class="nav-item d-none d-lg-block">
              <div id="create-form" class="create-form">
                <a href='/jotform' class=""> <button className='create-form-btn'>Create Form</button></a>
              </div>
            </li>
            <li class="nav-item d-none d-lg-block">
              <div id="create-form" class="create-form">
                <a href="/allform/allform"  >
             {/* <RiLayoutGridLine
                className={"name-icon" + (darkmodes ? "text-white " : "text-dark ")} /> */}
             <button className='create-form-btn'>All Forms</button>
              {/* <i className="menu-arrow "></i> */}
           
              </a>
              </div>
            </li>
         
            {/* <li class="nav-item dropdown">
              <a class="nav-link count-indicator" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                <i class={"icon-mail icon-lg " + (darkmodes ? "text-white" : "text-dark")}></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                <a class="dropdown-item py-3 border-bottom">
                  <p class="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                  <span class="badge badge-pill badge-primary float-right">View all</span>
                </a>
                <a class="dropdown-item preview-item py-3">
                  <div class="preview-thumbnail">
                    <i class="mdi mdi-alert m-auto text-primary"></i>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject fw-normal text-dark mb-1">Application Error</h6>
                    <p class="fw-light small-text mb-0"> Just now </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item py-3">
                  <div class="preview-thumbnail">
                    <i class="mdi mdi-settings m-auto text-primary"></i>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject fw-normal text-dark mb-1">Settings</h6>
                    <p class="fw-light small-text mb-0"> Private message </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item py-3">
                  <div class="preview-thumbnail">
                    <i class="mdi mdi-airballoon m-auto text-primary"></i>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject fw-normal text-dark mb-1">New user registration</h6>
                    <p class="fw-light small-text mb-0"> 2 days ago </p>
                  </div>
                </a>
              </div>
            </li> */}
            {/* <li class="nav-item dropdown">
              <a class="nav-link count-indicator" id="countDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className={"icon-bell " + (darkmodes ? "text-white" : "text-dark")}></i>
                <span class="count"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="countDropdown">
                <a class="dropdown-item py-3">
                  <p class="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                  <span class="badge badge-pill badge-primary float-right">View all</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="../../images/faces/face10.jpg" alt="image" class="img-sm profile-pic" />
                  </div>
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                    <p class="fw-light small-text mb-0"> The meeting is cancelled </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="../../images/faces/face12.jpg" alt="image" class="img-sm profile-pic" />
                  </div>
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                    <p class="fw-light small-text mb-0"> The meeting is cancelled </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="../../images/faces/face1.jpg" alt="image" class="img-sm profile-pic" />
                  </div>
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                    <p class="fw-light small-text mb-0"> The meeting is cancelled </p>
                  </div>
                </a>
              </div>
            </li> */}
            <li class="nav-item dropdown d-none d-lg-block user-dropdown">
              <a class="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="img-xs rounded-circle" src="../../images/faces/face8.jpg" alt="Profile image" /> </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <div class="dropdown-header text-center">
                  <img class="img-md rounded-circle" src="../../images/faces/face8.jpg" alt="Profile image" />
                  <p class="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                  
                  <Link to="/myprofile" className="dropdown-item">Profile Settings</Link>
                  <Link to="#" className="dropdown-item">Upgrade</Link>
                 
                  {/* <p class="fw-light text-muted mb-0">allenmoreno@gmail.com</p> */}
               
                {/* <a class="dropdown-item"><i class="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> My Profile <span class="badge badge-pill badge-danger">1</span></a>
                <a class="dropdown-item"><i class="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i> Messages</a>
                <a class="dropdown-item"><i class="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i> Activity</a>
                <a class="dropdown-item"><i class="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i> FAQ</a> */}
                <button className="dropdown-item" onClick={() => { localStorage.clear(); navigate("/"); window.location.reload(); }}><i class="dropdown-item-icon mdi mdi-power text-primary"></i>Sign Out</button>
                </div>
              </div>
            </li>
          </ul>
          <button onClick={onCheckmobile} className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
            <FiAlignJustify />
          </button>
        </div>
      </nav></>
  )
}
export default Navbar;