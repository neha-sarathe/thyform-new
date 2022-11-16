import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import condition_icon from '../../images/contion_icon.svg';
import Mobile_icon from '../../images/Mobile_icon.svg';
import Sa_accordian from '../../images/Sa_accordian.svg';
import condition from '../../images/condition_icon.svg';
import dropdown from '../../images/dropdown.svg';
import Option from './Option';
import SettingSidebar from './SettingSidebar';
import { FaCalculator, FaStarOfLife, FaShare, FaCheckCircle, FaEnvelope } from "react-icons/fa";
// import Showfield from '../../Condition/Showfield';

const Condition = ({ darkmodes, setDarkmodes, jottoggled, setJottoggled }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  {/* useEffect(() => {
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
*/}
  return (
    <>
      <SettingSidebar jottoggled={jottoggled} darkmodes={darkmodes} setJottoggled={setJottoggled} />
      {/* Condition page */}
      <main className={"page-content " + (darkmodes ? "text-white bg-dark condition-height" : "text-dark body-light condition-height")}>
        <div className="container ">
          <div className="row felx align-items-center justify-content-center">
            {/* main div start */}
            <div className="col_6 set_margin">

              {/* Direct link div start */}
              <div className='main_w'>
                <div className=' underline d-flex align-items-center '>
                  <li className='bg-icon-color py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                    <img src={condition_icon} height="18px" alt="manual" />

                  </li>
                  <li className='fs-6 text-black mt-5 pb-2 map'>
                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white" : "text-dark ")} >NEW CONDITION</h5>
                    <p className={'paragraph ' + (darkmodes ? "text-white" : "text-dark ")}>Select a suitable condition type below to add a new condition.</p>
                  </li>
                </div>
              </div>
              {!show ? (
                <>
                  <button className="btn-block" type="button" onClick={() => {
                    setShow(true);
                  }}>
                    <div className='d-flex justify-content-center align-items-center py-2 border-theme'>
                      <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc143c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>
                      </div>
                      <div>
                        <h5 className='fw-bold heading_css pt-2'>Add a new condition</h5>
                      </div>
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <button className="back-btn-in mb-4 " onClick={() => {
                    setShow(false);
                  }}>   <i className='fa fa-arrow-left text-white'></i>
                  </button>
                  {/* direct link div end */}
                  {/* form div start*/}
                  <div className="accordion" id="accordionExample">
                    <div className={"accordion-item standard " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white show-hov")}>
                      <Link className={darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white "} to="/showfield">
                        <div className='d-flex Main_bg justify-content-between align-items-center border border-black px-3 py-3'>
                          <div className="accordion-header" id="headingOne">

                            <div className=''>
                              <div className='d-flex '>
                                <li className='shown px-2 rounded-1'>
                                  <svg xmlns="http://www.w3.org/2000/svg" className='mt-2' width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>
                                </li>

                                <li className='mx-4 '>

                                  <h5 className='heading_5 remider fw-bold'>SHOW / HIDE FIELD</h5>
                                  <p className='remider fs_6'>Change visibility of field(s) depending on `IF` State conditions.</p>

                                </li>

                              </div>
                            </div>

                          </div>
                          {/* <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                          <li className='mt-2 enda'>
                            <img src={dropdown} height="13px" className='dropi' alt="manual" />
                          </li>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* second card start */}
                  <div className="accordion mt-3" id="accordionExample">
                    <div className={"accordion-item standard " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                      <Link className={darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white "} to="/updatefield">
                        <div className='d-flex Main_bg justify-content-between align-items-center border border-black px-3 py-3'>
                          <div className="accordion-header" id="headingOne">
                            <div className=''>
                              <div className='d-flex '>
                                <li className='shown px-2 rounded-1 calculater'>
                                  <FaCalculator />
                                </li>
                                <li className='mx-4 '>
                                  <h5 className='heading_5 remider fw-bold .showhover'>UPDATE / CALCULATE FIELD</h5>
                                  <p className='remider fs_6 showhover'>Use values from fields to do complex calculations.</p>
                                </li>
                              </div>
                            </div>
                          </div>
                          {/* <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                          <li className='mt-2 enda'>
                            <img src={dropdown} height="13px" className='dropi' alt="manual" />
                          </li>
                        </div>
                      </Link>
                      {/* second card start */}

                      {/* second card end */}
                    </div>
                  </div>
                  {/* second card end */}
                  <div className="accordion mt-3" id="accordionExample">
                    <div className={"accordion-item standard " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                      <Link className={darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white "} to="/enablefield">
                        <div className='d-flex Main_bg justify-content-between align-items-center border border-black px-3 py-3'>
                          <div className="accordion-header" id="headingOne">
                            <div className=''>
                              <div className='d-flex '>
                                <li className='shown px-2 rounded-1 calculater'>
                                  <FaStarOfLife />
                                </li>
                                <li className='mx-4 '>
                                  <h5 className='heading_5 remider fw-bold .showhover'>ENABLE / REQUIRE FIELD</h5>
                                  <p className='remider fs_6 showhover'>Require, Disable and Set Content Mask on a field.</p>
                                </li>
                              </div>
                            </div>
                          </div>
                          {/* <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                          <li className='mt-2 enda'>
                            <img src={dropdown} height="13px" className='dropi' alt="manual" />
                          </li>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="accordion mt-3" id="accordionExample">
                    <div className={"accordion-item standard " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                      <Link className={darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white "} to="/skippage">
                        <div className='d-flex Main_bg_green justify-content-between align-items-center border border-black px-3 py-3'>
                          <div className="accordion-header" id="headingOne">
                            <div className=''>
                              <div className='d-flex '>
                                <li className='shown px-2 rounded-1 calculater skip-icon-color'>
                                  <FaShare />
                                </li>
                                <li className='mx-4 '>
                                  <h5 className='heading_5 remider fw-bold'>SKIP TO / HIDE A PAGE</h5>
                                  <p className='remider fs_6'>Allow users to jump to a part of your form according to their choices.</p>
                                </li>
                              </div>
                            </div>
                          </div>
                          {/* <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                          <li className='mt-2 enda'>
                            <img src={dropdown} height="13px" className='dropi' alt="manual" />
                          </li>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="accordion mt-3" id="accordionExample">
                    <div className={"accordion-item standard " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                      <Link className={darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white "} to="/changethanks">
                        <div className='d-flex Main_bg_green justify-content-between align-items-center border border-black px-3 py-3'>
                          <div className="accordion-header" id="headingOne">
                            <div className=''>
                              <div className='d-flex '>
                                <li className='shown px-2 rounded-1 calculater skip-icon-color'>
                                  <FaCheckCircle />
                                </li>
                                <li className='mx-4 '>
                                  <h5 className='heading_5 remider fw-bold '>CHANGE “THANK YOU” PAGE</h5>
                                  <p className='remider fs_6'>Change "Thank You Page" action according to the form submission.</p>
                                </li>
                              </div>
                            </div>

                          </div>
                          {/* <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                          <li className='mt-2 enda'>
                            <img src={dropdown} height="13px" className='dropi' alt="manual" />
                          </li>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="accordion mt-3" id="accordionExample">
                    <div className={"accordion-item standard " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                      <Link className={darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white "} to="/changeemail">
                        <div className='d-flex Main_bg_violet justify-content-between align-items-center border border-black px-3 py-3'>
                          <div className="accordion-header" id="headingOne">
                            <div className=''>
                              <div className='d-flex '>
                                <li className='shown px-2 rounded-1 calculater email-icon-color'>
                                  <FaEnvelope />
                                </li>
                                <li className='mx-4 '>
                                  <h5 className='heading_5 remider fw-bold '>CHANGE E-MAIL RECIPIENT</h5>
                                  <p className='remider fs_6'>Redirect your e-mail alerts according to the form entry.</p>
                                </li>
                              </div>
                            </div>

                          </div>
                          {/* <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                          <li className='mt-2 enda'>
                            <img src={dropdown} height="13px" className='dropi' alt="manual" />
                          </li>
                        </div>
                      </Link>
                    </div>
                  </div>
                </>
              )}

              {/* <div className='main_w'>
                <div className=' underline d-flex align-items-center '>

                  <li className='shown px-2 rounded-1 mt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='mt-2 mb-2' width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>
                  </li>

                  <li className='fs-6 text-black mt-5 pb-2 map'>
                    <h5 className={'remider fw-bold .showhover ' + (darkmodes ? "text-white" : "text-dark ")}>SHOW / HIDE FIELD</h5>
                    <p className={'paragraph ' + (darkmodes ? "text-white" : "text-dark ")}>Change visibility of field(s) depending on `IF` State conditions.</p>
                  </li>
                </div>
              </div>
              <div className={"condition-div " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
              <div class="row mainsetting-div">
              <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                <li>
                <h2 className="form-setting-title mt-2">If</h2>
                
                </li>
                <li className='width_show_field'>
                
                  <select className="form-setting-input" name="cars" id="cars">
                    <option value="volvo">Please select a field</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                
                </li>
              </div>
            </div>
            </div>
            <div className={"condition-div mt-2 " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
              <div class="row mainsetting-div">
              <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                <li>
                <h2 className="form-setting-title mt-2">Do</h2>
                
                </li>
                <li className='width_show_field'>
                
                  <select className="form-setting-input" name="cars" id="cars">
                    <option value="volvo">Please select condition action</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                
                </li>
              </div>
            </div>
            </div> */}

            </div>
            <div className="col-3">
            </div>
            <div className="col-3">
            </div>
          </div>
        </div>
      </main>


    </>
  )
}
export default Condition;