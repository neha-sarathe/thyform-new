import React, { useState } from 'react'
import PreviewNav from './PreviewNav'
import {
  AiOutlineDesktop,
  AiOutlineTablet,
  AiOutlineMobile,

} from "react-icons/ai";

import { BsArrowUpRightSquare } from "react-icons/bs";
import { IoIosTabletLandscape, IoIosTabletPortrait } from "react-icons/io";
import $ from 'jquery'
// import DeviceEmulator from 'react-device-emulator';
// import 'react-device-emulator/lib/styles/style.css';
// import { MarvelDevices } from "react-css-devices";
// import Device from "react-device-frame";
export const Phone = ({ checked, setChecked, darkmodes, setDarkmodes }) => {
  const [potrait, setPotrait] = useState('portrait')
  const [landscape, setLandScape] = useState();
  const [show, setShow] = useState(true);
  const handleMobile = () => {
    setShow(true);
  };
  const handleTable = () => {
    setShow(false);
  };
  const content = (
    <div>
      <p>this is content</p>
      <p>wahtever you want to have in here is fine</p>

    </div>
  );
  const potraitChange = () => {
    // document.getElementsByClassName('mobile-view').style.width=
    // $(function () {
    //     $(".svg-tab").click(function () {



    //         $('.mobile-view').css("width", '372px');


    //     });
    // });
    setPotrait('portrait')
  }
  const LandscapeChange = () => {
    setPotrait('')
    console.log(landscape, ' ffffffffffffffffff')
    // $(function () {
    //     $(".svg-tab").click(function () {



    //         $('.mobile-view').css("width", '700px');


    //     });
    // });
    setLandScape('landscape');
  }


  return (
    <>
      <div> <PreviewNav checked={checked} setChecked={setChecked} darkmodes={darkmodes} setDarkmodes={setDarkmodes} /></div>

      <div style={{ paddingTop: "57px" }} className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>  <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="formpage_container">
            <h6 className={"mt-3  " + (darkmodes ? "text-white " : "text-dark ")}>ORIENTATION</h6>
            <div>
              <span className="incon-container" onClick={handleMobile}>
                <AiOutlineMobile className="formpage_icon-tabland" />
              </span>
              <span className="incon-container-right" onClick={handleTable}>
                <AiOutlineMobile className="formpage_icon-mobhori" />
              </span>
            </div>
            {show ? (
              <div className="formpage_desktop-mob">
                <div className="mobile-border">
                  <div className="mobile_heading">
                    <h1 className={darkmodes ? "text-dark" : "text-dark"}>Heading</h1>
                  </div>
                  <form>
                    <div class="row jumbotron pt-3 ml-0 mr-0">
                      <div class="col-sm-6 form-group">
                        <label for="name-f">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          name="fname"
                          id="name-f"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div class="col-sm-6 form-group">
                        <label for="name-l">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          name="lname"
                          id="name-l"
                          placeholder=" Last Name"
                          required
                        />
                      </div>
                      <div class="col-sm-6 form-group">
                        <label for="email">Phone Number</label>
                        <input
                          type="number"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Phone Number."
                          required
                        />
                      </div>
                      <div class="col-sm-6 form-group">
                        <label for="email">Date</label>
                        <input
                          type="date"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Date."
                          required
                        />
                      </div>
                      <div class="col-sm-6 form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Email."
                          required
                        />
                      </div>

                    </div>
                  </form>
                </div>

                <h1>
                  {" "}
                  <span class="dot"></span>
                </h1>
              </div>
            ) : (
              <div className="formpage_desktop-mob-hor">
                <h1 className="vertical-tab-button">
                  <span class="dot-mobvertical"></span>
                </h1>
                {/* <iframe name="my-iframe" target="my-iframe"> */}
                <div className="mob-border-vertical" target="my-iframe">
                  <div className="vertical-align-mob">
                    <div className="desktop_heading">
                      <h1 className={darkmodes ? "text-dark" : "text-dark"}>Heading</h1>
                    </div>
                    <form className="form_data">
                      <div className="row mobile_input">
                        <div className="col-md-6">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control input_field_mob"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-md-6 ">
                          <label className='ms-2'>Last Name</label>
                          <input
                            type="text"
                            className="form-control input_field_mob"
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="col-md-6 mt-3">
                          <label className='ms-2'>Phone Number</label>
                          <input
                            type="number"
                            className="form-control input_field_mob"
                            placeholder='Phone Number'
                          />
                        </div>
                        <div className="col-md-6 mt-3 ">
                          <label>Date</label>
                          <input
                            type="Date"
                            className="form-control input_field_mob"
                            placeholder="Date"
                          />
                        </div>
                        <div className="col-md-12 mt-3">
                          <label className="ms-2 mb-1">Email</label>
                          <input
                            type="email"
                            className="form-control input_field_mob"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      {/* <div className="row mobile_input">
                    
                   </div> */}
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <div className='mobile-view'><div className='form-head-mobile'><h4 className='form-text-mobile'>Form</h4></div><div><div className='form-btn-mobile'><button className='btn  w-100 btn-submit-mobile'>Submit</button></div></div></div> */}

        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <div className="formpage_container">
          <h6 className="mt-3">ORIENTATION</h6>
          <div>
            <span className="incon-container" onClick={handleMobile}>
              <IoIosTabletPortrait className="formpage_icon-tabland" />
            </span>
            <span className="incon-container-right" onClick={handleTable}>
              <IoIosTabletLandscape className="formpage_icon-tabland" />
            </span>
          </div>
          {show ? (
            <div className="formpage_desktop-tab">
              <div className="tab-border">
                <div className="desktop_heading">
                  <h1 className={darkmodes ? "text-dark" : "text-dark"}>Heading</h1>
                </div>
                <form className="form_data">
                  <div className="row desktop_input">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control input_field"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control input_field"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <label>Phone Number</label>
                      <input
                        type="number"
                        className="form-control input_field"
                        placeholder='Phone Number'
                      />
                    </div>
                    <div className="col-md-6 mt-3 ">
                      <label>Date</label>
                      <input
                        type="Date"
                        className="form-control input_field"
                        placeholder="Date"
                      />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label c>Email</label>
                      <input
                        type="email"
                        className="form-control input_field"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  {/* <div className="row desktop_input">
                                        
                                    </div> */}
                </form>
              </div>
              <h1>
                {" "}
                <span class="dot"></span>
              </h1>
            </div>
          ) : (
            <div className="formpage_desktop-tab1-horizontal">
              <h1 className="vertical-tab-button">
                <span class="dot-vertical"></span>
              </h1>
              <div className="tab-border-vertical " target="my-iframe">
                <div className="vertical-align">
                  <div className="desktop_heading">
                    <h1 className={darkmodes ? "text-dark" : "text-dark"}>Heading</h1>
                  </div>
                  <form className="form_data">
                    <div className="row desktop_input">
                      <div className="col-md-6">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control input_field-vertical"
                          placeholder="First name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Last Name</label>
                        <input
                          type="email"
                          className="form-control input_field-vertical"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          className="form-control input_field-vertical"
                          placeholder='Phone Number'
                        />
                      </div>
                      <div className="col-md-6 mt-3 ">
                        <label>Date</label>
                        <input
                          type="date"
                          className="form-control input_field-vertical "
                          placeholder="Date"
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label >Email</label>
                        <input
                          type="email"
                          className="form-control input_field-vertical"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    {/* <div className="row desktop_input">
                                        
                                        </div> */}
                  </form>
                </div>
              </div>
            </div>
          )}
        </div></div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><div className="formpage_container">
          <div className="formpage_desktop">
            <div className="desktop_heading ps-3">
              <h1 className={darkmodes ? "text-dark" : "text-dark"}>Heading</h1>
            </div>

            <form>
              <div class="row jumbotron me-0 mr-0 ml-0 ms-0 mt-3 container">
                <div class="col-sm-6 form-group">
                  <label for="name-f">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="fname"
                    id="name-f"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="name-l">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="lname"
                    id="name-l"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="email">Phone Number</label>
                  <input
                    type="number"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Phone Number."
                    required
                  />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="email">Date</label>
                  <input
                    type="date"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Date."
                    required
                  />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Email."
                    required
                  />
                </div>


                {/* <div class="col-sm-6 form-group"></div> */}
              </div>
            </form>

            {/* changes */}
          </div>
        </div></div>
      </div></div>
    </>
  )
}
