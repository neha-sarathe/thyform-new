import React, { useState, useEffect } from 'react'
import SettingSidebar from '../pages/jotform/SettingSidebar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navform from '../pages/jotform/Navform';
import { useNavigate } from 'react-router-dom';

const Notification = ({ darkmodes, setDarkmodes, jottoggled, setJottoggled }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <SettingSidebar darkmodes={darkmodes} setDarkmodes={setDarkmodes} jottoggled={jottoggled} setJottoggled={setJottoggled} />

      {/* Setting_email page */}

      <main className={"page-content setting-email  " + (darkmodes ? "text-white body-dark" : "text-dark body-light")}>
        <div className="container">
          <div className="row felx align-items-center justify-content-center">
            {/* main div start */}
            <div className="col-md-10  set_margin">
              <button className=" back-btn-in mt-4" onClick={() => {
                navigate("/setting/settingemail")
              }}>   <i className='fa fa-arrow-left text-white'></i>
              </button>
              {/* Direct link div start */}
              <div className='main_w'>
                <div className=' underline d-flex align-items-center '>
                  <li className='bg-primary py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg>
                  </li>
                  <li className='fs-6 text-black mt-5 pb-2 map'>
                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark")} >
                      NOTIFICATION 1</h5>
                    <p className='paragraph '>Receive an email when someone fills your form.</p>
                  </li>
                </div>
              </div>
              <div className={"accordion-item standard p-3 " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>

                <Tabs
                  defaultActiveKey="email"
                  id="fill-tab-example"
                  fill
                  className={"mb-3 " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")}
                >
                  <Tab eventKey="email" title="EMAIL" >

                    <div class="row mainsetting-div">
                      <div class="form-group col-md-12 mt-3">
                        <h2 className="form-setting-title">Email Subject*</h2>
                        <div>
                          <input type="text" className="form-setting-input" />
                        </div>
                      </div>
                    </div>
                    <div class="row mainsetting-div">
                      <div class="form-group col-md-12 mt-3">
                        <h2 className="form-setting-title">Email Content*</h2>
                      </div>
                    </div>
                    <Navform placeholder={"Write something or insert a heart  ♥"} />
                    <button className="notify-btn mb-4 mt-5 float-left">
                      TEST EMAIL
                    </button>
                    <button className="notify-btn mb-4 mt-5 float-right">
                      SAVE
                    </button>
                  </Tab>

                  <Tab eventKey="recipient" title="RECIPIENTS">
                    <div class="row mainsetting-div">
                      <div class="form-group col-md-12 mt-3">
                        <h2 className="form-setting-title">Sender Name</h2>
                        <div>
                          <select className="form-setting-input" name="cars" id="cars">
                            <option value="volvo">Please Select</option>
                            <option value="saab">Example</option>

                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row mainsetting-div">
                      <div class="form-group col-md-12 mt-3">
                        <h2 className="form-setting-title">Reply-to Email</h2>
                        <div>
                          <select className="form-setting-input" name="cars" id="cars">
                            <option value="volvo">Please Select</option>
                            <option value="saab">Example</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row mainsetting-div">
                      <div class="form-group col-md-12 mt-3">
                        <h2 className="form-setting-title">Recipient Email*</h2>
                        <div>
                          <input type="text" className="form-setting-input" />
                        </div>
                      </div>
                    </div>
                    <button className="notify-btn mb-4 mt-5 float-left">
                      TEST EMAIL
                    </button>
                    <button className="notify-btn mb-4 mt-5 float-right">
                      SAVE
                    </button>
                  </Tab>

                  <Tab eventKey="advanced" title="ADVANCED">
                    <div class="row mainsetting-div">
                      <div class="form-group col-md-12 mt-3">
                        <h2 className="form-setting-title">Send Email On</h2>
                        <p className="form-setting-para">
                          Recipients can get a new email every time the form submission is edited.
                        </p>
                        <label className="float-none d-flex align-items-start mt-4">
                          <input
                            type="checkbox"
                            // defaultChecked={checked}
                            // onChange={handleCheckbox}
                            className="mx-3"
                          />
                          <div>
                            <h6 className="fw-bold">Send email on form submitted.</h6>
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
                            <h6 className="fw-bold">Send email on form edited.</h6>
                          </div>
                        </label>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center justify-content-between '>
                      <div className='main_w'>
                        <div className=' underline d-flex align-items-center py-2 mx-2 '>
                          <li className='fs-6 text-black map'>
                            <h6 className={'fw-bold heading_5 remider ' + (darkmodes ? "text-white" : "text-dark ")}>Send Uploads as Attachment</h6>
                            <p className="form-setting-para">By enabling Send Uploads as Attachment option,
                              you will receive submission uploads of your form in your notification email.</p>
                          </li>
                        </div>
                      </div>
                      <div>
                        <ul className='d-flex align-items-center justify-content-center'>
                          <li className='mt-2'>
                            <div id="app-cover1">
                              <div class="row row1">


                                <div class="toggle-button-cover">

                                  <div class="button1 r" id="button-3">
                                    <input type="checkbox" class="checkbox1" />
                                    <div class="knobs1"></div>
                                    <div class="layer1"></div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </li>
                        </ ul>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center justify-content-between '>
                      <div className='main_w'>
                        <div className=' underline d-flex align-items-center py-2 mx-2 '>
                          <li className='fs-6 text-black map'>
                            <h6 className={'fw-bold heading_5 remider ' + (darkmodes ? "text-white" : "text-dark ")}>PDF Attachment</h6>
                            <p className="form-setting-para">Select PDF Documents you would like to attach to email.</p>
                          </li>
                        </div>
                      </div>
                      <div>
                        <ul className='d-flex align-items-center justify-content-center'>
                          <li className='mt-2'>
                            <div id="app-cover1">
                              <div class="row row1">


                                <div class="toggle-button-cover">

                                  <div class="button1 r" id="button-3">
                                    <input type="checkbox" class="checkbox1" />
                                    <div class="knobs1"></div>
                                    <div class="layer1"></div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </li>
                        </ ul>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center justify-content-between '>
                      <div className='main_w'>
                        <div className=' underline d-flex align-items-center py-2 mx-2 '>
                          <li className='fs-6 text-black map'>
                            <h6 className={'fw-bold heading_5 remider ' + (darkmodes ? "text-white" : "text-dark ")}>Hide Empty Fields</h6>
                            <p className="form-setting-para">By enabling Hide Empty Fields option, empty fields won’t be visible in received emails.</p>
                          </li>
                        </div>
                      </div>
                      <div>
                        <ul className='d-flex align-items-center justify-content-center'>
                          <li className='mt-2'>
                            <div id="app-cover1">
                              <div class="row row1">


                                <div class="toggle-button-cover">

                                  <div class="button1 r" id="button-3">
                                    <input type="checkbox" class="checkbox1" />
                                    <div class="knobs1"></div>
                                    <div class="layer1"></div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </li>
                        </ ul>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center justify-content-between '>
                      <div className='main_w'>
                        <div className=' underline d-flex align-items-center py-2 mx-2 '>
                          <li className='fs-6 text-black map'>
                            <h6 className={'fw-bold heading_5 remider ' + (darkmodes ? "text-white" : "text-dark ")}>Update Email</h6>
                            <p className="form-setting-para">While this option is disabled, changes on the form will not affect the email content.</p>
                          </li>
                        </div>
                      </div>
                      <div>
                        <ul className='d-flex align-items-center justify-content-center'>
                          <li className='mt-2'>
                            <div id="app-cover1">
                              <div class="row row1">


                                <div class="toggle-button-cover">

                                  <div class="button1 r" id="button-3">
                                    <input type="checkbox" class="checkbox1" />
                                    <div class="knobs1"></div>
                                    <div class="layer1"></div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </li>
                        </ ul>
                      </div>
                    </div>
                    <hr />
                    <div class="row mainsetting-div">
                      <div class="form-group col-md-12 mt-3">
                        <h2 className="form-setting-title">Sender Email</h2>
                        <p className="form-setting-para">Users can receive emails using your own SMTP server instead of Jotform's servers.</p>
                        <div>
                          <select className="form-setting-input" name="cars" id="cars">
                            <option value="volvo">Please Select</option>
                            <option value="saab">+Add New Email Address</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="notify-btn mb-4 mt-5 float-left">
                      TEST EMAIL
                    </button>
                    <button className="notify-btn mb-4 mt-5 float-right">
                      SAVE
                    </button>
                  </Tab>
                </Tabs>

              </div>


            </div>

          </div>
        </div>
      </main>


    </>
  )
}

export default Notification