import React from 'react'
import { FiSettings } from "react-icons/fi";
import $ from "jquery";
const Dark = ({ darkmodes, setDarkmodes }) => {
  console.log(darkmodes, 'darkmodes')
  $(function () {
    $(".nav-settings").on("click", function () {
      // $("#right-sidebar").toggleClass("open");
      $("#right-sidebar").addClass("open");
    });
    $(".settings-close").on("click", function () {
      $("#right-sidebar,#theme-settings").removeClass("open");
    });

    $("#settings-trigger").on("click", function () {
      // $("#theme-settings").toggleClass("open");
      $("#theme-settings").addClass("open");
    });


    //background constants
    var body_classes = "body-light body-dark ";
    var summarychart_classes = "Summary-status-dark Summary-status-light bg-primary";
    var calender_classes = "body-dark-calander body-light-calander"
    var percent_classes = "percent-dark percent-light";
    var chart_classes = "dash-chart-dark dash-chart-light ";
    var chart1_classes = "chart-bg-dark chart-bg-light"
    var navbar_classes = "navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink";
    var sidebar_classes = "sidebar-light sidebar-dark";
    var chart_title_classes = "title-light-color  title-dark-color"
    var $body = $("body");

    //sidebar backgrounds
    $("#sidebar-light-theme").on("click", function () {
      $body.removeClass(sidebar_classes);
      $body.addClass("sidebar-light");
      $(".sidebar-bg-options").removeClass("selected");
      $(this).addClass("selected");
    });
    $("#sidebar-dark-theme").on("click", function () {
      $body.removeClass(sidebar_classes);
      $body.addClass("sidebar-dark");
      $(".sidebar-bg-options").removeClass("selected");
      $(this).addClass("selected");
    });


    //Navbar Backgrounds
    $(".tiles.primary").on("click", function () {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-primary");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
    });
    $(".tiles.success").on("click", function () {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-success");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
    });
    $(".tiles.warning").on("click", function () {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-warning");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
    });
    $(".tiles.danger").on("click", function () {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-danger");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
    });
    $(".tiles.light").on("click", function () {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-light");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
    });
    $(".tiles.info").on("click", function () {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-info");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
    });
    $(".tiles.dark").on("click", function () {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-dark");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
    });
    $(".tiles.default").on("click", function () {
      $(".navbar").removeClass(navbar_classes);
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
    });
    $(".tiles.default").on("click", function () {
      $(".navbar").removeClass(navbar_classes);
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
    });

    // $(".color-theme.default").click(function () {
    //   $(".color-theme.default").attr({
    //     "href": "https://www.bootstrapdash.com/demo/star-admin2-pro/template/demo/vertical-default-light/index.html",
    //     "title": "Light"
    //   });
    // });
    // $(".color-theme.dark").click(function () {
    //   $(".color-theme.dark").attr({
    //     "href": "https://www.bootstrapdash.com/demo/star-admin2-pro/template/demo/vertical-default-dark/index.html",
    //     "title": "Dark"
    //   });
    // });
    // $(".color-theme.brown").click(function () {
    //   $(".color-theme.brown").attr({
    //     "href": "https://www.bootstrapdash.com/demo/star-admin2-pro/template/demo/vertical-default-brown/index.html",
    //     "title": "Brown"
    //   });
    // });
    // $('[data-bs-toggle="minimize"]').on("click", function () {
    //   if (($("#root").hasClass('sidebar-toggle-display')) || ($("#root").hasClass('sidebar-absolute'))) {
    //     $("#root").removeClass("sidebar-icon-only");
    //     $("#root").addClass('sidebar-hidden');
    //   } else {
    //     $("#root").removeClass('sidebar-hidden');
    //     $("#root").addClass('sidebar-icon-only');
    //   }
    // });
 
    // container-scroller
    // $(".color-theme.primary").on("click", function () {
    //   $(".navbar").removeClass(navbar_classes);
    //   $(".navbar").addClass("navbar-primary");
    //   $(".tiles").removeClass("selected");
    //   $(this).addClass("selected");


    // });
    // $(".color-theme.success").on("click", function () {
    //   $(".navbar").removeClass(navbar_classes);
    //   $(".navbar").addClass("navbar-success");
    //   $(".tiles").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    // $(".color-theme.warning").on("click", function () {
    //   $(".navbar").removeClass(navbar_classes);
    //   $(".navbar").addClass("navbar-warning");
    //   $(".tiles").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    // $(".color-theme.danger").on("click", function () {
    //   $(".navbar").removeClass(navbar_classes);
    //   $(".navbar").addClass("navbar-danger");
    //   $(".tiles").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    // $(".color-theme.light").on("click", function () {
    //   $(".navbar").removeClass(navbar_classes);
    //   $(".navbar").addClass("navbar-light");
    //   $(".tiles").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    // $(".color-theme.brown").on("click", function () {
    //   $(".navbar").removeClass(navbar_classes);
    //   $(".navbar").addClass("navbar-info");
    //   $(".tiles").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    // $(".color-theme.dark").on("click", function () {
    //   $(".navbar").removeClass(navbar_classes);
    //   $(".navbar").addClass("navbar-dark");
    //   $(".tiles").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    // $(".color-theme.default").on("click", function () {
    //   $(".navbar").removeClass(navbar_classes);
    //   $(".tiles").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    //   $(".color-theme.default").on("click" , function(){
    //     $(".navbar").removeClass(navbar_classes);
    //     $(".tiles").removeClass("selected");
    //     $(this).addClass("selected");
    //   });


    //   side
    // $(".color-theme.primary").on("click" , function(){
    //     $body.removeClass(sidebar_classes);
    //     $body.addClass("sidebar-light");
    //     $(".sidebar-bg-options").removeClass("selected");
    //     $(this).addClass("selected");


    //   });
    //   $(".color-theme.success").on("click" , function(){
    //     $body.removeClass(sidebar_classes);
    //   $body.addClass("sidebar-dark");
    //   $(".sidebar-bg-options").removeClass("selected");
    //   $(this).addClass("selected");
    //   });
    //   $(".color-theme.warning").on("click" , function(){
    //     $(".navbar").removeClass(navbar_classes);
    //     $(".navbar").addClass("navbar-warning");
    //     $(".tiles").removeClass("selected");
    //     $(this).addClass("selected");
    //   });
    //   $(".color-theme.danger").on("click" , function(){
    //     $(".navbar").removeClass(navbar_classes);
    //     $(".navbar").addClass("navbar-danger");
    //     $(".tiles").removeClass("selected");
    //     $(this).addClass("selected");
    //   });
    //   $(".color-theme.light").on("click" , function(){
    //     $(".navbar").removeClass(navbar_classes);
    //     $(".navbar").addClass("navbar-light");
    //     $(".tiles").removeClass("selected");
    //     $(this).addClass("selected");
    //   });
    // $(".color-theme.brown").on("click", function () {
    //   $body.removeClass(navbar_classes);
    //   $body.addClass("navbar-info");
    //   $(".sidebar-bg-options").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    // $(".color-theme.dark").on("click", function () {
    //   $body.removeClass(body_classes);
    //   $body.addClass("body-dark");
    //   $(".sidebar-bg-options").removeClass("selected");
    //   $(this).addClass("selected");
    // });chart_title_classes
    // $(".color-theme.dark").on("click", function () {
    //   $(".container-scroller").removeClass(body_classes);
    //   $(".card-rounded").removeClass(chart_classes);
    //   $(".pie-chart").removeClass(chart_classes);
    //   $(".navbar-brand-wrapper").removeClass(body_classes)
    //   $(".bar-card").removeClass(chart_classes);
    //   $(".rate-percentage").removeClass(percent_classes);
    //   $(".chart-dark-bg").removeClass(chart1_classes);
    //   $(".card-title").removeClass(chart_title_classes);
    //   $(".navbar-toggler").removeClass(percent_classes)
    //   $(".Summary-status").removeClass(summarychart_classes);
    //   $(".navbar-date-picker").removeClass(calender_classes);
    //   $(".sidebar").removeClass(body_classes)
    //   $(".container-scroller").addClass("body-dark");
    //   $(".navbar-date-picker").addClass("body-dark-calander");
    //   $(".card-rounded").addClass("dash-chart-dark");
    //   $(".bar-card").addClass("dash-chart-dark");
    //   $(".pie-chart").addClass("dash-chart-dark");
    //   $(".rate-percentage").addClass("percent-light");
    //   $(".sidebar").addClass("body-dark")
    //   $(".navbar-toggler").addClass("percent-light");
    //   $(".Summary-status").addClass("Summary-status-dark")
    //   $(".chart-dark-bg").addClass("chart-bg-dark");
    //   $(".card-title").addClass("title-light-color");
    //   $(".sidebar-bg-options").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    // $(".color-theme.dark").on("click", function () {
    //   $body.removeClass(sidebar_classes);
    //   $body.addClass("sidebar-dark");
    //   $(".sidebar-bg-options").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    // $(".color-theme.default").on("click", function () {
    //   $body.removeClass(sidebar_classes);
    //   $body.addClass("sidebar-light");
    //   $(".sidebar-bg-options").removeClass("selected");
    //   $(this).addClass("selected");
    // });
    // chart-dark-bg  chart-bg-dark chart-bg-light 

    // $(".color-theme.default").on("click", function () {
    //   $(".container-scroller").removeClass(body_classes);
    //   $(".card-rounded").removeClass(chart_classes);
    //   $(".bar-card").removeClass(chart_classes);
    //   $(".pie-chart").removeClass(chart_classes);
    //   $(".card-title").removeClass(chart_title_classes);
    //   $(".rate-percentage").removeClass(percent_classes)
    //   $(".chart-dark-bg").removeClass(chart1_classes)
    //   $(".navbar-toggler").removeClass(percent_classes)
    //   $(".navbar-brand-wrapper").removeClass(body_classes)
    //   $(".sidebar").removeClass(body_classes)
    //   $(".Summary-status").removeClass(summarychart_classes);
    //   $(".navbar-date-picker").removeClass(calender_classes);
    //   $(".container-scroller").addClass("body-light");
    //   $(".sidebar").addClass("body-light")
    //   $(".card-rounded").addClass("dash-chart-light");
    //   $(".bar-card").addClass("dash-chart-light");
    //   $(".pie-chart").addClass("dash-chart-light");
    //   $(".card-title").addClass("title-dark-color");
    //   $(".chart-dark-bg").addClass("chart-bg-light")
    //   $(".rate-percentage").addClass("percent-dark");
    //   $(".Summary-status").addClass("bg-primary");
    //   $(".navbar-date-picker").addClass("body-light-calander");
    //   $(".navbar-toggler").addClass("percent-dark")
    //   $(".sidebar-bg-options").removeClass("selected");
    //   $(this).addClass("selected");
    // });


  });

  const handleMode = () => {
    setDarkmodes(true)
  }

  const handletheme = () => {
    setDarkmodes(false)
  }
  return (
    <>
      <div class="theme-setting-wrapper">
        <div id="settings-trigger"><FiSettings class="text-white" /></div>
        <div id="theme-settings" className={"settings-panel "+ (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
          <i class="settings-close ti-close"></i>
          <p class="settings-heading">SIDEBAR SKINS</p>
          <div class="sidebar-bg-options selected" id="sidebar-light-theme"><div class="img-ss rounded-circle bg-light border me-3"></div>Light</div>
          <div class="sidebar-bg-options" id="sidebar-dark-theme"><div class="img-ss rounded-circle bg-dark border me-3"></div>Dark</div>
          <p class="settings-heading mt-2">HEADER SKINS</p>
          <div class="color-tiles mx-0 px-4">
            <div class="tiles success"></div>
            <div class="tiles warning"></div>
            <div class="tiles danger"></div>
            <div class="tiles info"></div>
            <div class="tiles dark"></div>
            <div class="tiles default"></div>
          </div>
          <p class="settings-heading mt-2">THEMES</p>
          <div class="color-themes mx-0 px-4">
            <div class="color-theme default" onClick={handletheme} ></div>
            <div class="color-theme dark" onClick={handleMode} ></div>
            {/* <div  class="color-theme brown"></div> */}
          </div>
        </div>
      </div>
      <div id="right-sidebar" class="settings-panel">
        <i class="settings-close ti-close"></i>
        <ul class="nav nav-tabs border-top" id="setting-panel" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="todo-tab" data-bs-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="chats-tab" data-bs-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
          </li>
        </ul>
        <div class="tab-content" id="setting-content">
          <div class="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
            <div class="add-items d-flex px-3 mb-0">
              <form class="form w-100">
                <div class="form-group d-flex">
                  <input type="text" class="form-control todo-list-input" placeholder="Add To-do" />
                  <button type="submit" class="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                </div>
              </form>
            </div>
            <div class="list-wrapper px-3">
              <ul class="d-flex flex-column-reverse todo-list">
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" />
                      Team review meeting at 3.00 PM
                    </label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" />
                      Prepare for presentation
                    </label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" />
                      Resolve all the low priority tickets due today
                    </label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li class="completed">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" checked />
                      Schedule meeting for next week
                    </label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li class="completed">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" checked />
                      Project review
                    </label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
              </ul>
            </div>
            <h4 class="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
            <div class="events pt-4 px-3">
              <div class="wrapper d-flex mb-2">
                <i class="ti-control-record text-primary me-2"></i>
                <span>Feb 11 2018</span>
              </div>
              <p class="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
              <p class="text-gray mb-0">The total number of sessions</p>
            </div>
            <div class="events pt-4 px-3">
              <div class="wrapper d-flex mb-2">
                <i class="ti-control-record text-primary me-2"></i>
                <span>Feb 7 2018</span>
              </div>
              <p class="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
              <p class="text-gray mb-0 ">Call Sarah Graves</p>
            </div>
          </div>
          {/* <!-- To do section tab ends --> */}
          <div class="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
            <div class="d-flex align-items-center justify-content-between border-bottom">
              <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
              <small class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">See All</small>
            </div>
            <ul class="chat-list">
              <li class="list active">
                <div class="profile"><img src="/images/faces/face1.jpg" alt="image" /><span class="online"></span></div>
                <div class="info">
                  <p>Thomas Douglas</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">19 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="/images/faces/face2.jpg" alt="image" /><span class="offline"></span></div>
                <div class="info">
                  <div class="wrapper d-flex">
                    <p>Catherine</p>
                  </div>
                  <p>Away</p>
                </div>
                <div class="badge badge-success badge-pill my-auto mx-2">4</div>
                <small class="text-muted my-auto">23 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="/images/faces/face3.jpg" alt="image" /><span class="online"></span></div>
                <div class="info">
                  <p>Daniel Russell</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">14 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="/images/faces/face4.jpg" alt="image" /><span class="offline"></span></div>
                <div class="info">
                  <p>James Richardson</p>
                  <p>Away</p>
                </div>
                <small class="text-muted my-auto">2 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="/images/faces/face5.jpg" alt="image" /><span class="online"></span></div>
                <div class="info">
                  <p>Madeline Kennedy</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">5 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="../../images/faces/face6.jpg" alt="image" /><span class="online"></span></div>
                <div class="info">
                  <p>Sarah Graves</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">47 min</small>
              </li>
            </ul>
          </div>
          {/* <!-- chat tab ends --> */}
        </div>
      </div>
    </>
  )
}

export default Dark;