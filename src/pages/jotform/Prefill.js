import React, { useEffect } from 'react'
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
const Prefill = () => {
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
      <PublishSidebar />
      <main>
        <div className="page-wrapper chiller-theme toggled ">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i className="fas fa-bars"></i>
          </a>

          <main className="page-content">
            {/* <Settingform /> */}
            {/* <Thankyoupage /> */}
            {/* main container */}
            <div className="container ml_contain">
              <div className="row felx align-items-center justify-content-center">
                {/* main div start */}
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
                        <h5 className='fs-8 heading_5 remider' >PREFILL</h5>
                        <p className='paragraph '>Pre-populate your forms with data one of the following sources.</p>
                      </li>
                    </div>
                  </div>
                  {/* direct link div end */}
                  {/* form div start*/}

                  <form className='bg-white shadow-sm  rounded-1 p-3 position-relative'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between '>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center py-2 mx-2 '>
                            <li>
                              <img src={manual} height="40px" alt="manual" />
                            </li>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>MANUAL PREFILL</h5>
                              <p className='paragraph remider'>Fill in specific fields on your form before sharing it with users.</p>
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
                    <div className='position-absolute bg-warning'>

                    </div>
                  </form>
                  {/* 1st div end */}


                  <form className='bg-white shadow-sm  rounded-1 p-3 position-relative mt-4'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between '>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center py-2 mx-2 '>
                            <li>
                              <img src={form} height="40px" alt="manual" />
                            </li>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>FORM PREFILL</h5>
                              <p className='paragraph remider'>Use submission info from another to pre-populate this form.</p>
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
                    <div className='position-absolute bg-info'>

                    </div>
                  </form>
                  {/* form div end */}
                  <form className='bg-white shadow-sm  rounded-1 p-3 position-relative mt-4'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between '>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center py-2 mx-2 '>
                            <li>
                              <img src={table} height="40px" alt="manual" />
                            </li>

                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>TABLE PREFILL</h5>
                              <p className='paragraph remider'>Use data from tables to pre-populate your form.</p>
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
                    <div className='position-absolute bg-success'>

                    </div>
                  </form>
                  <form className='bg-white shadow-sm  rounded-1 p-3 position-relative mt-4'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between '>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center py-2 mx-2 '>
                            <li>
                              <img src={unknown} height="40px" alt="manual" />

                            </li>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>SSO PREFILL</h5>
                              <p className='paragraph remider'>Autofill your form with information from your Single Sign-On provide.</p>
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
                    <div className='position-absolute bg-success bg-opacity-75'>

                    </div>
                  </form>
                  <form className='bg-white shadow-sm  rounded-1 p-3 position-relative mt-4'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between '>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center py-2 mx-2 '>
                            <li>
                              <img src={airtable} height="40px" alt="manual" />
                            </li>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>AIRABLE PREFILL</h5>
                              <p className='paragraph remider'>Use Airable records to pre-populate your form fields.</p>
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
                    <div className='position-absolute bg-primary bg-opacity-10'>

                    </div>
                  </form>
                  <form className='bg-white shadow-sm  rounded-1 p-3 position-relative mt-4'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between '>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center py-2 mx-2 '>
                            <li>
                              <img src={pipedrive} height="40px" alt="manual" />
                            </li>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>PIPEDRIVE PREFILL</h5>
                              <p className='paragraph remider'>Pre-populate your from with data from your Pipedeive CRM.</p>
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
                    <div className='position-absolute bg-secondary'>

                    </div>
                  </form>
                  <form className='bg-white shadow-sm  rounded-1 p-3 position-relative mt-4'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between '>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center py-2 mx-2 '>
                            <li>
                              <img src={monday} height="40px" alt="manual" />
                            </li>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>MONDAY.COM PREFILL</h5>
                              <p className='paragraph remider'>Use monday.com task information to pre-populate form fields.</p>
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
                    <div className='position-absolute bg-black opacity-75'>

                    </div>
                  </form>
                  <form className='bg-white shadow-sm  rounded-1 p-3 position-relative mt-4'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between '>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center py-2 mx-2 '>
                            <li>
                              <img src={salesforce} height="40px" alt="manual" />
                            </li>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>SALESFORCE PREFILL</h5>
                              <p className='paragraph remider'>Pre-populate your form with data from your Salesform account.</p>
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
                    <div className='position-absolute bg-info opacity-50'>

                    </div>
                  </form>
                  <form className='bg-white shadow-sm  rounded-1 p-3 position-relative mt-4'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between '>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center py-2 mx-2 '>
                            <li>
                              <img src={hubspot} height="40px" alt="manual" />

                            </li>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>HUMSPOT PREFILL</h5>
                              <p className='paragraph remider'>Pre-populate your form with data from your Hubspot CRM.</p>
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
                    <div className='position-absolute bg-danger '>

                    </div>
                  </form>

                  {/* two blocks div start*/}
                </div>
                {/* main div end */}
                <div className="col-3">
                </div>
                <div className="col-3">
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
export default Prefill;