import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Settingform from './Settingform';
import Thankyoupage from './Thankyoupage';
import images from '../../images/checklist.png';
import manual from '../../images/manual.svg';
import form from '../../images/form.svg'
import table from '../../images/table.svg'
import unknown from '../../images/unknown.svg'
import airtable from '../../images/airtable.svg'
import pipedrive from '../../images/pipedrive.svg'
import monday from '../../images/monday.svg'
import salesforce from '../../images/salesforce.svg'
import hubspot from '../../images/hubspot.svg'
import PublishSidebar from './PublishSidebar';
import { TiPlusOutline } from "react-icons/ti";

const Prefill = ({ darkmodes, setDarkmodes }) => {
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
  const [show, setShow] = useState(false);
  const [formShow, setFormShow] = useState(false);
  const [tableShow, setTableShow] = useState(false);
  const [ssoShow, setSsoShow] = useState(false);
  const [airShow, setAirShow] = useState(false);
  const [pipeShow, setPipeShow] = useState(false);
  const [mondayShow, setMondayShow] = useState(false);
  const [saleShow, setSaleShow] = useState(false);
  const [hubShow, setHubShow] = useState(false);

  return (
    <>
      <PublishSidebar darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
      <main>
        <div className="page-wrapper chiller-theme toggled ">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i className="fas fa-bars"></i>
          </a>

          <main className={"page-content " + (darkmodes ? "text-white body-dark" : "text-dark body-light")}>
            {/* <Settingform /> */}
            {/* <Thankyoupage /> */}
            {/* main container */}
            <div className="container ml_contain">
              <div className="row felx align-items-center justify-content-center">
                {/* main div start */}
                {!show && !formShow && !tableShow && !ssoShow && !airShow && !pipeShow
                  && !mondayShow && !saleShow && !hubShow ? (
                  <>
                    <div className="col- col_6">
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
                          <li className='bg-secondary py- px-2 mt-4  text-white fw-bold fs-4 rounded'>
                            <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M88,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm128,56H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM56,56H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Z"></path></svg></li>

                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")} >PREFILL</h5>
                            <p className='paragraph '>Pre-populate your forms with data one of the following sources.</p>
                          </li>
                        </div>
                      </div>
                      {/* direct link div end */}
                      {/* form div start*/}

                      <form className={' shadow-sm  rounded-1 p-3 position-relative ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between '>
                            <button className="border border-white p-0 text-left " type="button" onClick={() => {
                              setShow(true);
                            }}>
                              <div className='main_w'>

                                <div className={'underline d-flex align-items-center py-2 mx-2 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                                  <li>
                                    <img src={manual} height="40px" alt="manual" />
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>MANUAL PREFILL</h5>
                                    <p className='paragraph remider'>Fill in specific fields on your form before sharing it with users.</p>
                                  </li>
                                </div>
                              </div>
                            </button>

                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li className='mt-3'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <div className='position-absolute bg-warning'>

                        </div>
                      </form>
                      {/* 1st div end */}


                      <form className={' shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between '>
                            <button className="border border-white p-0 text-left" type="button" onClick={() => {
                              setFormShow(true);
                            }}>
                              <div className='main_w'>
                                <div className={'underline d-flex align-items-center py-2 mx-2 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                                  <li>
                                    <img src={form} height="40px" alt="form" />
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>FORM PREFILL</h5>
                                    <p className='paragraph remider'>Use submission info from another to pre-populate this form.</p>
                                  </li>
                                </div>
                              </div>
                            </button>
                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li className='mt-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <div className='position-absolute bg-info'>

                        </div>
                      </form>
                      {/* form div end */}
                      <form className={' shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between '>
                            <button className="border border-white p-0 text-left " type="button" onClick={() => {
                              setTableShow(true);
                            }}>
                              <div className='main_w'>
                                <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                  <li>
                                    <img src={table} height="40px" alt="table" />
                                  </li>

                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>TABLE PREFILL</h5>
                                    <p className='paragraph remider'>Use data from tables to pre-populate your form.</p>
                                  </li>
                                </div>
                              </div>
                            </button>
                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li className='mt-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <div className='position-absolute bg-success'>

                        </div>
                      </form>
                      <form className={' shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between '>
                            <button className="border border-white p-0 text-left " type="button" onClick={() => {
                              setSsoShow(true);
                            }}>
                              <div className='main_w'>
                                <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                  <li>
                                    <img src={unknown} height="40px" alt="sso" />
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>SSO PREFILL</h5>
                                    <p className='paragraph remider'>Autofill your form with information from your Single Sign-On provider.</p>
                                  </li>
                                </div>
                              </div>
                            </button>
                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li className='mt-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <div className='position-absolute bg-success bg-opacity-75'>

                        </div>
                      </form>
                      <form className={' shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between '>
                            <button className="border border-white p-0 text-left " type="button" onClick={() => {
                              setAirShow(true);
                            }}>
                              <div className='main_w'>
                                <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                  <li>
                                    <img src={airtable} height="40px" alt="manual" />
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>AIRABLE PREFILL</h5>
                                    <p className='paragraph remider'>Use Airable records to pre-populate your form fields.</p>
                                  </li>
                                </div>
                              </div>
                            </button>
                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li className='mt-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <div className='position-absolute bg-primary bg-opacity-10'>

                        </div>
                      </form>
                      <form className={' shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between '>
                            <button className="border border-white p-0 text-left " type="button" onClick={() => {
                              setPipeShow(true);
                            }}>
                              <div className='main_w'>
                                <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                  <li>
                                    <img src={pipedrive} height="40px" alt="manual" />
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>PIPEDRIVE PREFILL</h5>
                                    <p className='paragraph remider'>Pre-populate your from with data from your Pipedeive CRM.</p>
                                  </li>
                                </div>
                              </div>
                            </button>
                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li className='mt-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <div className='position-absolute bg-secondary'>

                        </div>
                      </form>
                      <form className={' shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between '>
                            <button className="border border-white p-0 text-left " type="button" onClick={() => {
                              setMondayShow(true);
                            }}>
                              <div className='main_w'>
                                <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                  <li>
                                    <img src={monday} height="40px" alt="manual" />
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>MONDAY.COM PREFILL</h5>
                                    <p className='paragraph remider'>Use monday.com task information to pre-populate form fields.</p>
                                  </li>
                                </div>
                              </div>
                            </button>
                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li className='mt-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <div className='position-absolute bg-black opacity-75'>

                        </div>
                      </form>
                      <form className={'shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between '>
                            <button className="border border-white p-0 text-left " type="button" onClick={() => {
                              setSaleShow(true);
                            }}>
                              <div className='main_w'>
                                <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                  <li>
                                    <img src={salesforce} height="40px" alt="manual" />
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>SALESFORCE PREFILL</h5>
                                    <p className='paragraph remider'>Pre-populate your form with data from your Salesform account.</p>
                                  </li>
                                </div>
                              </div>
                            </button>
                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li className='mt-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <div className='position-absolute bg-info opacity-50'>

                        </div>
                      </form>
                      <form className={' shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between '>
                            <button className="border border-white p-0 text-left " type="button" onClick={() => {
                              setHubShow(true);
                            }}>
                              <div className='main_w'>
                                <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                  <li>
                                    <img src={hubspot} height="40px" alt="manual" />

                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>HUBSPOT PREFILL</h5>
                                    <p className='paragraph remider'>Pre-populate your form with data from your Hubspot CRM.</p>
                                  </li>
                                </div>
                              </div>
                            </button>
                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li className='mt-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <div className='position-absolute bg-danger '>

                        </div>
                      </form>

                      {/* two blocks div start*/}
                    </div>
                  </>
                ) : show ? (
                  <>
                    {/* main div end */}
                    <div className='col_6'>
                      <div className='main_w'>
                        <button className=" back-btn-in mt-5" onClick={() => {
                          setShow(false);
                        }}>   <i className='fa fa-arrow-left text-white'></i>
                        </button>
                        <div className=' underline d-flex align-items-center '>
                          <li className='py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                            <img src={manual} height="40px" alt="manual" />

                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>MANUAL PREFILL</h5>
                            <p className='paragraph remider'>Fill in specific fields on your form before sharing it with users.</p>
                          </li>
                        </div>
                        <div className='d-flex justify-content-center align-items-center py-2 border border-primary'>
                          <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4811df" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>
                          </div>
                          <div>
                            <h5 className='fw-bold heading pt-2'>Add a New Prefill</h5>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className='text-center mt-2'>
                        <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>Your prefills will be listed here.</h5>
                        <button className='bg-primary rounded-3 border-white py-2 px-3 text-white mt-2'>
                          <TiPlusOutline className='mb-1' />
                          Add a New Prefill
                        </button>
                      </div>
                    </div>
                  </>
                ) : formShow ? (
                  <>
                    <div className='col_6'>
                      <div className='main_w'>
                        <button className=" back-btn-in mt-5" onClick={() => {
                          setFormShow(false);
                        }}>   <i className='fa fa-arrow-left text-white'></i>
                        </button>
                        <div className=' underline d-flex align-items-center '>
                          <li className='py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                            <img src={form} height="40px" alt="form" />

                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>FORM PREFILL</h5>
                            <p className='paragraph remider'>Use submission info from another to pre-populate this form.</p>
                          </li>
                        </div>
                      </div>
                      <div className={"accordion-item standard p-3" + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <div className='p-4'>
                          <h2 className="form-setting-title">Select a Form</h2>
                          <div>
                            <select class="form-select" aria-label="Default select example">
                              <option selected>Select a form to get data from</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : tableShow ? (
                  <>
                    <div className='col_6'>
                      <div className='main_w'>
                        <button className=" back-btn-in mt-5" onClick={() => {
                          setTableShow(false);
                        }}>   <i className='fa fa-arrow-left text-white'></i>
                        </button>
                        <div className=' underline d-flex align-items-center '>
                          <li className='py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                            <img src={table} height="40px" alt="table" />

                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>TABLE PREFILL</h5>
                            <p className='paragraph remider'>Use data from tables to pre-populate your form.</p>
                          </li>
                        </div>
                      </div>
                      <div className={"accordion-item standard p-3" + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                          <div className='p-4'>
                            <h2 className="form-setting-title">Select a Form</h2>
                            <div>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>Select a form to get data from</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                              </select>
                            </div>
                          </div>
                        </div>
                    </div>

                  </>
                ) : ssoShow ? (
                  <>
                    <div className='col_6'>
                      <div className='main_w'>
                        <button className=" back-btn-in mt-5" onClick={() => {
                          setSsoShow(false);
                        }}>   <i className='fa fa-arrow-left text-white'></i>
                        </button>
                        <div className=' underline d-flex align-items-center '>
                          <li className='py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                            <img src={unknown} height="40px" alt="sso" />

                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>SSO PREFILL</h5>
                            <p className='paragraph remider'>Autofill your form with information from your Single Sign-On provider.</p>
                          </li>
                        </div>
                      </div>
                      <div className={"accordion-item standard p-3" + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                          <div className='p-4'>
                          <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>Enable SSO Prefill</h5>
                            <p className='paragraph remider'>Activating prefill will enable SSO protection.</p>
                            
                          </div>
                        </div>
                    </div>
                  </>
                ) : airShow ? (
                  <>
                    <div className='col_6'>
                      <div className='main_w'>
                        <button className=" back-btn-in mt-5" onClick={() => {
                          setAirShow(false);
                        }}>   <i className='fa fa-arrow-left text-white'></i>
                        </button>
                        <div className=' underline d-flex align-items-center '>
                          <li className='py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                            <img src={airtable} height="40px" alt="airtable" />

                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>AIRABLE PREFILL</h5>
                            <p className='paragraph remider'>Use Airable records to pre-populate your form fields.</p>
                          </li>
                        </div>
                      </div>
                      <div className={"accordion-item standard p-3" + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <div className='p-4'>
                          <p className='paragraph remider pb-2'>Airtable is a spreadsheet-database platform that makes it easier for teams to organize their work and collaborate online</p>
                          <p className='paragraph remider pb-2'>With Jotform's Airtable Prefill feature, you can automatically pre-populate form fields with data from your Airtable account.</p>
                          <p className='paragraph remider'>Simply match form fields with the Airtable data you would like to use to pre-populate your form, then share your unique prefilled form URL with each contact.</p>
                          <hr />
                          <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>Authentication</h5>
                          <p className='paragraph remider'>Authenticate your Airtable account to create a prefilled form.</p>
                          <div className='d-flex justify-content-between'>
                            <input type="text" className="authenticate-input" />
                            <button className='bg-primary rounded-3 border-white py-2 px-3 text-white mt-2'>AUTHENTICATE</button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </>
                ) : pipeShow ? (
                  <>
                    <div className='col_6'>
                      <div className='main_w'>
                        <button className=" back-btn-in mt-5" onClick={() => {
                          setPipeShow(false);
                        }}>   <i className='fa fa-arrow-left text-white'></i>
                        </button>
                        <div className=' underline d-flex align-items-center '>
                          <li className='py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                            <img src={pipedrive} height="40px" alt="airtable" />

                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>PIPEDRIVE PREFILL</h5>
                            <p className='paragraph remider'>Pre-populate your from with data from your Pipedeive CRM.</p>
                          </li>
                        </div>
                      </div>
                      <div className={"accordion-item standard p-3" + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <div className='p-4'>
                          <p className='paragraph remider pb-2'>Pipedrive is a sales CRM and project management platform designed to help businesses be more productive and boost revenue.</p>
                          <p className='paragraph remider pb-2'>With Jotform's Pipedrive Prefill feature, you can automatically pre-populate form fields with data from your Pipedrive account.</p>
                          <p className='paragraph remider'>Simply match form fields with the Pipedrive data you would like to use to pre-populate your form, then share your unique prefilled form URL with each contact.</p>
                          <hr />
                          <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>Authentication</h5>
                          <p className='paragraph remider'>Authenticate your Pipedrive account to create a prefilled form.</p>
                          <div className='d-flex justify-content-between'>
                            <input type="text" className="authenticate-input" />
                            <button className='bg-primary rounded-3 border-white py-2 px-3 text-white mt-2'>AUTHENTICATE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : mondayShow ? (
                  <>
                    <div className='col_6'>
                      <div className='main_w'>
                        <button className=" back-btn-in mt-5" onClick={() => {
                          setMondayShow(false);
                        }}>   <i className='fa fa-arrow-left text-white'></i>
                        </button>
                        <div className=' underline d-flex align-items-center '>
                          <li className='py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                            <img src={monday} height="40px" alt="airtable" />

                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>MONDAY.COM PREFILL</h5>
                            <p className='paragraph remider'>Use monday.com task information to pre-populate form fields.</p>
                          </li>
                        </div>
                      </div>
                      <div className={"accordion-item standard p-3" + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <div className='p-4'>
                          <p className='paragraph remider pb-2'>monday.com is a productivity and work management software solution that enables more efficient marketing, sales, and customer service.</p>
                          <p className='paragraph remider pb-2'>With Jotform's monday.com Prefill feature, you can automatically pre-populate form fields with contact or lead data from your monday.com account.</p>
                          <p className='paragraph remider'>Simply match form fields with the monday.com data you would like to use to pre-populate your form, then share your unique prefilled form URL with each contact.</p>
                          <hr />
                          <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>Authentication</h5>
                          <p className='paragraph remider'>Authenticate your monday.com account to create a prefilled form.</p>
                          <div className='d-flex justify-content-between'>
                            <input type="text" className="authenticate-input" />
                            <button className='bg-primary rounded-3 border-white py-2 px-3 text-white mt-2'>AUTHENTICATE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : saleShow ? (
                  <>
                    <div className='col_6'>
                      <div className='main_w'>
                        <button className=" back-btn-in mt-5" onClick={() => {
                          setSaleShow(false);
                        }}>   <i className='fa fa-arrow-left text-white'></i>
                        </button>
                        <div className=' underline d-flex align-items-center '>
                          <li className='py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                            <img src={salesforce} height="40px" alt="salesforce" />

                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>SALESFORCE PREFILL</h5>
                            <p className='paragraph remider'>Pre-populate your form with data from your Salesform account.</p>
                          </li>
                        </div>
                      </div>
                      <div className={"accordion-item standard p-3" + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <div className='p-4'>
                          <p className='paragraph remider pb-2'>Salesforce offers free CRM software and tools for more efficient marketing, sales, and customer service.</p>
                          <p className='paragraph remider pb-2'>Salesforce Prefill Connector pre-populates your form fields with your Salesforce data. You can use the Salesforce objects below to prefill your form.</p>
                          <ul>
                            <li>Contacts</li>
                            <li>Leads</li>
                          </ul>
                          <p className='paragraph remider'>Map your form fields to the Salesforce data you would like to use to pre-populate your form, and create a unique prefilled form URL for each contact.</p>
                          <hr />
                          <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>Authentication</h5>
                          <p className='paragraph remider'>Authenticate your Salesforce account to create a prefilled form.</p>
                          <div className='d-flex justify-content-between'>
                            <input type="text" className="authenticate-input" />
                            <button className='bg-primary rounded-3 border-white py-2 px-3 text-white mt-2'>AUTHENTICATE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='col_6'>
                      <div className='main_w'>
                        <button className=" back-btn-in mt-5" onClick={() => {
                          setHubShow(false);
                        }}>   <i className='fa fa-arrow-left text-white'></i>
                        </button>
                        <div className=' underline d-flex align-items-center '>
                          <li className='py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                            <img src={hubspot} height="40px" alt="salesforce" />

                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>HUBSPOT PREFILL</h5>
                            <p className='paragraph remider'>Pre-populate your form with data from your Hubspot CRM.</p>
                          </li>
                        </div>
                      </div>
                      <div className={"accordion-item standard p-3" + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <div className='p-4'>
                          <p className='paragraph remider pb-2'>HubSpot offers free CRM software and tools for more efficient marketing, sales, and customer service.</p>
                          <p className='paragraph remider pb-2'>The HubSpot Prefill Connector will pre-populate your form fields with your HubSpot data. You can use the HubSpot objects below to prefill your form.</p>
                          <ul>
                            <li>Contacts</li>
                            <li>Companies</li>
                          </ul>
                          <p className='paragraph remider'>You can map your form fields to the HubSpot data you would like to use for prefill and create a unique prefilled form URL for each contact or company.</p>
                          <hr />
                          <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>Authentication</h5>
                          <p className='paragraph remider'>Authenticate your HubSpot account to create a prefilled form.</p>
                          <div className='d-flex justify-content-between'>
                            <input type="text" className="authenticate-input" />
                            <button className='bg-primary rounded-3 border-white py-2 px-3 text-white mt-2'>AUTHENTICATE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
                }
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
export default Prefill;