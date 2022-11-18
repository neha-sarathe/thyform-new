import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import condition_icon from '../../images/contion_icon.svg';
import Mobile_icon from '../../images/Mobile_icon.svg'
import SettingSidebar from "./SettingSidebar";
const Setting = ({ darkmodes, setDarkmodes, jottoggled, setJottoggled }) => {
  const [show, setShow] = useState(false);
  console.log("jottoggledqd", jottoggled)
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

    // $("#close-sidebar").click(function () {
    //   $(".page-wrapper").removeClass("toggled");
    // });
    // $("#show-sidebar").click(function () {
    //   $(".page-wrapper").addClass("toggled");
    // });

  }, [])

  return (
    <>

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
      {/*  <div class="sidebar-menu">
                <ul>
                  <li class="header-menu">
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

      {/* <li className='list-sidebar-jotform'>
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

          </li> */}


      <main className={"page-content " + (darkmodes ? "text-white bg-dark" : "text-dark bg-light")}>


        <SettingSidebar
          darkmodes={darkmodes}
          setDarkmodes={setDarkmodes}
          jottoggled={jottoggled}
          setJottoggled={setJottoggled}
        />

        {/*center content */}

        <div
          class={
            "container-fluid setting-form setting-form-mob " +
            (darkmodes ? "text-white bg-dark " : "text-dark bg-light ") +
            (jottoggled ? "" : "setting_form_ml setting_form_ml_mob ")
          }
        >
          <div className="settingform-main">
            {" "}
            <div className="form-setting-div">
              {" "}
              <div>
                <div className="form-setting-icon">
                  <FiSettings style={{ width: "25px", height: "auto" }} />
                </div>
              </div>
              <div className="form-set-right-div">
                <h2 className="form-setting-h1">FORM SETTINGS</h2>
                <p className="form-setting-p">
                  Change form status and properties.
                </p>
              </div>
            </div>
            <div
              className={
                "form-set-main-div form-set-main-div-mob " +
                (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")
              }
            >
              <div class="row mainsetting-div">
                <div class="form-group col-md-12 mt-3">
                  <h2 className="form-setting-title">Title</h2>
                  <p className="form-setting-para">
                    Enter a short, descriptive name for this form.
                  </p>

                  <div>
                    <input className={"form-setting-input " +
                      (darkmodes ? "text-white body-dark " : "text-dark body-light ")} />
                  </div>
                </div>
              </div>
              <hr />
              <div class="row mainsetting-div">
                <div class="form-group col-md-12 mt-3">
                  <h2 className="form-setting-title">Form Status</h2>
                  <p className="form-setting-para">
                    You can disable your form now, on a specific date, or when it
                    reaches a certain number of submissions.
                  </p>

                  <div>
                    <select className={"form-setting-input " + (darkmodes ? "select_dark  " : "text-dark body-light ")} name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              {!show ? (
                <button
                  className="show-more-btn"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  {" "}
                  Show More Options{" "}
                </button>
              ) : (
                <div
                  className={
                    "form-set-main-div form-set-main-div-mob " +
                    (darkmodes
                      ? "text-white dash-chart-dark"
                      : "text-dark bg-white")
                  }
                >
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                      <li>
                        <h2 className="form-setting-title">Form Warnings</h2>
                        <p className="form-setting-para">
                          Change the warning messages on your form.
                        </p>
                      </li>
                      <li>
                        <button className="btn btn-primary"> EDIT </button>
                      </li>
                    </div>
                  </div>
                  <hr />
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Form Language</h2>
                      <p className="form-setting-para">
                        Please select the language for your form.
                      </p>

                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">
                            Please select language
                          </option>
                          <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                      <li>
                        <h2 className="form-setting-title">Translations</h2>
                        <p className="form-setting-para">
                          Make your form available in multiple languages.
                        </p>
                      </li>
                      <li>
                        <button className="btn btn-primary"> EDIT </button>
                      </li>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Password Protection</h2>
                      <p className="form-setting-para">
                        Set a password to limit access to your forms.
                      </p>
                      <label className="float-none d-flex align-items-start mt-4">
                        <input
                          type="checkbox"
                          // defaultChecked={checked}
                          // onChange={handleCheckbox}
                          className="mx-3"
                        />
                        <div>
                          <h6 className="fw-bold">Enable Password Protection</h6>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Encrypt Form Data</h2>
                      <p className="form-setting-para">
                        Encrypt your form responses to store sensitive data
                        securely.{" "}
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">No</option>
                          <option value="saab">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                      <li>
                        <h2 className="form-setting-title">
                          Auto-Delete Form Submissions
                        </h2>
                        <p className="form-setting-para">
                          Delete form submissions after a certain period of time.
                        </p>
                      </li>
                      <li>
                        <button className="btn btn-primary"> ENABLE </button>
                      </li>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Continue Forms Later</h2>
                      <p className="form-setting-para">
                        Enable or disable autofill on your form.{" "}
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">Enabled</option>
                          <option value="saab">Disabled</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Require SSO</h2>
                      <p className="form-setting-para">
                        Add Single Sign-On (SSO) login to fill out the form.
                      </p>
                      <label className="float-none d-flex align-items-start mt-4">
                        <input
                          type="checkbox"
                          // defaultChecked={checked}
                          // onChange={handleCheckbox}
                          className="mx-3"
                        />
                        <div>
                          <h6 className="fw-bold">
                            Users need to login to view and submit the form
                          </h6>
                        </div>
                      </label>
                      <label className="float-none d-flex align-items-start mt-4">
                        <input
                          type="checkbox"
                          // defaultChecked={checked}
                          // onChange={handleCheckbox}
                          className="mx-3"
                        />
                        <div>
                          <h6 className="fw-bold">
                            Users can save drafts and continue later
                          </h6>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Unique Submission</h2>
                      <p className="form-setting-para">
                        Use cookies (loose check) or IP address (strict check) to
                        prevent multiple form submissions.{" "}
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">No Check</option>
                          <option value="saab">Enabled</option>
                          <option value="saab">Disabled</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Unique Question</h2>
                      <p className="form-setting-para">
                        Do not allow previously entered values.{" "}
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">No Check</option>
                          <option value="saab">Email</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Form Accessibility</h2>
                      <p className="form-setting-para">
                        Check your form's accessibility.
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">Disabled</option>
                          <option value="saab">Enabled</option>
                        </select>
                      </div>
                      <label className="float-none d-flex align-items-start mt-4">
                        <input
                          type="checkbox"
                          // defaultChecked={checked}
                          // onChange={handleCheckbox}
                          className="mx-3"
                        />
                        <div>
                          <h6 className="fw-bold">
                            Show the accessibility badge on the form.
                          </h6>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Page Title</h2>
                      <p className="form-setting-para">
                        Enter the title that will be used as HTML page title.
                      </p>
                      <div>
                        <input className={"form-setting-input " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")} />
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Send Post Data</h2>
                      <p className="form-setting-para">
                        Do you want to send HTTP POST data to the Thank-You page?
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">No</option>
                          <option value="saab">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">
                        Clear Hidden Field Values
                      </h2>
                      <p className="form-setting-para">
                        Do you want to clear the values of fields hidden by
                        conditional logic?
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">Clear on Submit</option>
                          <option value="saab">Clear on Being Hidden</option>
                          <option value="volvo">Don't Clear</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Highlight Effect</h2>
                      <p className="form-setting-para">
                        Enable or disable the yellow background highlight on input
                        fields.
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">Enabled</option>
                          <option value="saab">Disabled</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Form Layout</h2>

                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark" : "text-dark body-light")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">All questions on one page</option>
                          <option value="saab">Single question per page</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">
                        Show error navigation on forms
                      </h2>
                      <p className="form-setting-para">
                        Navigation between errors on form
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">No</option>
                          <option value="saab">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Prevent Cloning</h2>
                      <p className="form-setting-para">
                        Prevent other users from cloning this form.
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">No</option>
                          <option value="saab">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">
                        Allow Browser AutoComplete
                      </h2>
                      <p className="form-setting-para">
                        Allow browsers to store and autocomplete form fields.
                      </p>
                      <div>
                        <select
                          className={"form-setting-input " + (darkmodes ? "select_dark " : "text-dark body-light ")}
                          name="cars"
                          id="cars"
                        >
                          <option value="volvo">No</option>
                          <option value="saab">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button
                    className="show-more-btn"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    {" "}
                    Show Less{" "}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </main>

    </>
  )
}
export default Setting;