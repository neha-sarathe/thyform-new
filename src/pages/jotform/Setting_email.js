import React, { useState, useEffect } from 'react'
import { MdEmail } from "react-icons/md";
import { TbArrowBigRight } from "react-icons/tb";
import SettingSidebar from './SettingSidebar';
import { Link, useNavigate } from 'react-router-dom';

const Setting_email = ({ darkmodes, setDarkmodes, jottoggled, setJottoggled }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <SettingSidebar darkmodes={darkmodes} setDarkmodes={setDarkmodes} jottoggled={jottoggled} setJottoggled={setJottoggled} />

      {/* Setting_email page */}

      <main className={"page-content setting-email  " + (darkmodes ? "text-white bg-dark" : "text-dark bg-light")}>
        <div className="container">
          <div className="row felx align-items-center justify-content-center">
            {/* main div start */}
            <div className="col-sm-2 col-md-8 col-lg-8 col-xl-8 set_margin set_margin_mob">
              {/* Direct link div start */}
              <div className='main_w'>
                <div className=' underline d-flex align-items-center '>
                  <li className='bg-icon-color py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="#dc143c"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg>
                  </li>
                  <li className='fs-6 text-black mt-5 pb-2 map'>
                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark")} >NEW EMAIL</h5>
                    <p className='paragraph '>Please select an email type below to create your email.</p>
                  </li>
                </div>
              </div>
              {/* direct link div end */}
              {/* form div start*/}

              {/* <div className="accordion" id="accordionExample"> */}

              <div className={ (darkmodes ? "text-white dash-chart-dark" : "text-dark")}>
                {!show ? (
                  <>
                    <div>
                      <button className="btn-block" type="button" onClick={() => {
                        setShow(true);
                      }}>
                        <div className='d-flex justify-content-center align-items-center py-2 border-theme'>
                          <div className="accordion-header" id="headingOne">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc143c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>
                          </div>
                          <div>
                            <h5 className='fw-bold heading_css pt-2'>Add an email</h5>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className='p-4 text-center'>
                      <li>
                        <h5 className='fs-7 fw-bold heading_5 remider para-green'>You don't have any saved emails.</h5>
                        <p className='paragraph remider'>Create beautiful notification and autoresponder emails.</p>
                      </li>
                    </div>
                    {/*
                    <form className={' shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                      <fieldset>
                        <div className='d-flex align-items-center justify-content-between '>
                          <div className='main_w'>
                            <div className=' underline d-flex align-items-center py-2 mx-2 '>
                              <li>
                             
                              </li>
                              <li className='fs-6 text-black map'>
                                <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>AUTORESPONDER 1</h5>
                                <p className='paragraph remider'> <MdEmail color="green" />
                                  Jotform
                                  <TbArrowBigRight color="green" />
                                  Email
                                </p>
                              </li>
                            </div>
                          </div>
                          <div>
                            
                          </div>
                        </div>
                      </fieldset>
                      <div className='position-absolute bg-success'>

                      </div>
                    </form>
                    <form className={' shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                      <fieldset>
                        <div className='d-flex align-items-center justify-content-between '>
                          <div className='main_w'>
                            <div className=' underline d-flex align-items-center py-2 mx-2 '>
                              <li>
                               
                              </li>
                              <li className='fs-6 text-black map'>
                                <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>NOTIFICATION 1</h5>
                                <p className='paragraph remider'> <MdEmail color="green" />
                                  Jotform
                                  <TbArrowBigRight color="green" />
                                  Email
                                </p>
                              </li>
                            </div>
                          </div>
                          <div>

                          </div>
                        </div>
                      </fieldset>
                      <div className='position-absolute bg-success'>

                      </div>
                    </form>
                    <form className={' shadow-sm  rounded-1 p-3 position-relative mt-4 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                      <fieldset>
                        <div className='d-flex align-items-center justify-content-between '>
                          <div className='main_w'>
                            <div className=' underline d-flex align-items-center py-2 mx-2 '>
                              <li>
                             
                              </li>
                              <li className='fs-6 text-black map'>
                                <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>AUTORESPONDER 2</h5>
                                <p className='paragraph remider'> <MdEmail color="green" />
                                  Jotform
                                  <TbArrowBigRight color="green" />
                                  Email
                                </p>
                              </li>
                            </div>
                          </div>
                          <div>

                          </div>
                        </div>
                      </fieldset>
                      <div className='position-absolute bg-success'>

                      </div>
                    </form>
                    */}
                  </>
                ) : (
                  <>
                    <button className="back-btn-in mb-4 " onClick={() => {
                      setShow(false);
                    }}>   <i className='fa fa-arrow-left text-white'></i>
                    </button>
                    <Link className={darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white "} to="/notification">
                      <div className=''>
                        <form className={'shadow-sm  rounded-1 p-3 position-relative border '+(darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white ")}>
                          <fieldset>
                            <div className='d-flex align-items-center justify-content-between '>
                              <div className='main_w'>
                                <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                  <li className='background p-2 rounded-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M207.8,112a79.7,79.7,0,0,0-79.2-80H128a79.9,79.9,0,0,0-79.8,80c0,34.3-7.1,53.7-13,63.9a16.2,16.2,0,0,0-.1,16.1A15.9,15.9,0,0,0,49,200H88a40,40,0,0,0,80,0h39a15.9,15.9,0,0,0,13.9-8,16.2,16.2,0,0,0-.1-16.1C214.9,165.7,207.8,146.3,207.8,112ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224ZM224.9,73.3a9.3,9.3,0,0,1-3.5.8,7.9,7.9,0,0,1-7.2-4.5,97,97,0,0,0-35-38.8,8,8,0,0,1,8.5-13.6,111.7,111.7,0,0,1,40.8,45.4A8,8,0,0,1,224.9,73.3Zm-190.3.8a9.3,9.3,0,0,1-3.5-.8,8,8,0,0,1-3.6-10.7A111.7,111.7,0,0,1,68.3,17.2a8,8,0,0,1,8.5,13.6,97,97,0,0,0-35,38.8A7.9,7.9,0,0,1,34.6,74.1Z"></path></svg>
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-7 fw-bold heading_5 remider '+ (darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white ")}>NOTIFICATION EMAIL</h5>
                                    <p className={'paragraph remider '+ (darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white ")}>Receive an email when someone fills your form.</p>
                                  </li>
                                </div>
                              </div>
                              <div>
                                <ul className='d-flex align-items-center justify-content-center'>
                                  <li className='mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg>
                                  </li>
                                </ ul>
                              </div>
                            </div>
                          </fieldset>
                          <div className='position-absolute succes success-resp bg-opacity-75'>

                          </div>
                        </form>
                      </div>
                    </Link>
                    <Link className={darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white "} to="/autoresponder">
                      <div className='mt-4'>
                        <form className={'shadow rounded-1 p-3 position-relative border '+(darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white ")}>
                          <fieldset>
                            <div className='d-flex align-items-center justify-content-between '>
                              <div className='main_w'>
                                <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                  <li className='bg-success p-2 rounded-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M207.8,112a79.7,79.7,0,0,0-79.2-80H128a79.9,79.9,0,0,0-79.8,80c0,34.3-7.1,53.7-13,63.9a16.2,16.2,0,0,0-.1,16.1A15.9,15.9,0,0,0,49,200H88a40,40,0,0,0,80,0h39a15.9,15.9,0,0,0,13.9-8,16.2,16.2,0,0,0-.1-16.1C214.9,165.7,207.8,146.3,207.8,112ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224ZM224.9,73.3a9.3,9.3,0,0,1-3.5.8,7.9,7.9,0,0,1-7.2-4.5,97,97,0,0,0-35-38.8,8,8,0,0,1,8.5-13.6,111.7,111.7,0,0,1,40.8,45.4A8,8,0,0,1,224.9,73.3Zm-190.3.8a9.3,9.3,0,0,1-3.5-.8,8,8,0,0,1-3.6-10.7A111.7,111.7,0,0,1,68.3,17.2a8,8,0,0,1,8.5,13.6,97,97,0,0,0-35,38.8A7.9,7.9,0,0,1,34.6,74.1Z"></path></svg>
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-7 fw-bold heading_5 remider '+(darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white ")}>AUTORESPONDER EMAIL</h5>
                                    <p className={'paragraph remider '+(darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white ")}>Send autoresponder email to the person who fills your form. </p>
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
                          <div className='position-absolute bg-success ut success-resp'>

                          </div>
                        </form>
                      </div>
                    </Link>
                  </>)
                }
                {/* </div> */}
              </div>
              {/*
<form className='bg-white shadow  rounded-1  position-relative mt-4'>
  <fieldset>
    <div className='d-flex align-items-center justify-content-between pb-1'>
    <div className='main_w '>
<div className=' underline d-flex align-items-center  mx-2 '>
  <li className='fs-6 text-black map pt-4'>
  <h5 className='fs-7 fw-bold heading_5 remider  autom'>AUTORESPONDER 1</h5>
<div>
  <div className='d-flex'>
    <li className='d-flex align-items-center '>
      <div >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Jotform</h6>
      </div>
    </li>
    <li>
    <div className='d-flex mx-2 '>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M132.9,231.4A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l96,96a8.1,8.1,0,0,1,0,11.4l-96,96A8.4,8.4,0,0,1,132.9,231.4Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Email</h6>
      </div>
      </div> 
    </li>
  </div>
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
  </li>
  </div>
  </div>
    <div className='mainpage'>
    <ul className='d-flex align-items-center justify-content-center m-4  '>
         <li className='bg_succes p-2 rounded-1'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"></path></svg>
         </li>  
         <li className='bg_succes p-2 rounded-1 mx-2'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
         </li>
         </ul>
      </div>
    </div>
     </fieldset>
      <div className='position-absolute bg_succes ut'>
    </div>
</form>
 <form className='bg-white shadow  rounded-1  position-relative mt-4'>
  <fieldset>
    <div className='d-flex align-items-center justify-content-between pb-1'>
    <div className='main_w '>
<div className=' underline d-flex align-items-center  mx-2 '>
  <li className='fs-6 text-black map pt-4'>
  <h5 className='fs-7 fw-bold heading_5 remider  autom'>CLONE  OF AUTORESPONDER 1</h5>
<div>
  <div className='d-flex'>
    <li className='d-flex align-items-center '>
      <div >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Jotform</h6>
      </div>
    </li>
    <li>
    <div className='d-flex mx-2'>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M132.9,231.4A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l96,96a8.1,8.1,0,0,1,0,11.4l-96,96A8.4,8.4,0,0,1,132.9,231.4Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Email</h6>
      </div>
      </div> 
    </li>
  </div>
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
  </li>
  </div>
  </div>
    <div className='mainpage'>
    <ul className='d-flex align-items-center justify-content-center m-4  '>
         <li className='bg_succes p-2 rounded-1'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"></path></svg>
         </li>  
         <li className='bg_succes p-2 rounded-1 mx-2'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
         </li>
         </ul>
      </div>
    </div>
     </fieldset>
      <div className='position-absolute bg_succes ut'>
    </div>
</form>
 <form className='bg-white shadow  rounded-1  position-relative mt-4'>
  <fieldset>
    <div className='d-flex align-items-center justify-content-between pb-1'>
    <div className='main_w '>
<div className=' underline d-flex align-items-center  mx-2 '>
  <li className='fs-6 text-black map pt-4'>
  <h5 className='fs-7 fw-bold heading_5 remider  autom'>CLONE OF CLONE OF AUTORESPONDER 1</h5>
<div>
  <div className='d-flex'>
    <li className='d-flex align-items-center '>
      <div >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Jotform</h6>
      </div>
    </li>
    <li>
    <div className='d-flex mx-2'>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M132.9,231.4A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l96,96a8.1,8.1,0,0,1,0,11.4l-96,96A8.4,8.4,0,0,1,132.9,231.4Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Email</h6>
      </div>
      </div> 
    </li>
  </div>
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
  </li>
  </div>
  </div>
    <div className='mainpage'>
    <ul className='d-flex align-items-center justify-content-center m-4  '>
         <li className='bg_succes p-2 rounded-1'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"></path></svg>
         </li>  
         <li className='bg_succes p-2 rounded-1 mx-2'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
         </li>
         </ul>
      </div>
    </div>
     </fieldset>
      <div className='position-absolute bg_succes ut'>
    </div>
</form>
 <form className='bg-white shadow  rounded-1  position-relative mt-4'>
  <fieldset>
    <div className='d-flex align-items-center justify-content-between pb-1'>
    <div className='main_w '>
<div className=' underline d-flex align-items-center  mx-2 '>
  <li className='fs-6 text-black map pt-4'>
  <h5 className='fs-7 fw-bold heading_5 remider  autom fw-semibold'>CLONE OF CLONE OF CLONE OF AUTORESPONDER 1</h5>
<div>
  <div className='d-flex'>
    <li className='d-flex align-items-center '>
      <div >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Jotform</h6>
      </div>
    </li>
    <li>
    <div className='d-flex mx-2'>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M132.9,231.4A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l96,96a8.1,8.1,0,0,1,0,11.4l-96,96A8.4,8.4,0,0,1,132.9,231.4Z"></path></svg>
      </div>
      <div className='mt-2'>
        <h6 className='heading_6'>Email</h6>
      </div>
      </div> 
    </li>
  </div>
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
  </li>
  </div>
  </div>
    <div className='mainpage'>
    <ul className='d-flex align-items-center justify-content-center m-4  '>
         <li className='bg_succes p-2 rounded-1'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"></path></svg>
         </li>  
         <li className='bg_succes p-2 rounded-1 mx-2'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
         </li>
         </ul>
      </div>
    </div>
     </fieldset>
      <div className='position-absolute bg_succes ut'>
    </div>
        </form> 
        */}
              {/* </div> */}
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
export default Setting_email;