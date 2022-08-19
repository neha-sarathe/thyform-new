import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiExternalLink } from "react-icons/fi";
import {
  AiOutlineDesktop,
  AiOutlineTablet,
  AiOutlineMobile,

} from "react-icons/ai";

import { BsArrowUpRightSquare } from "react-icons/bs";

const PreviewNav = ({ checked, setChecked }) => {
  const [preview, setpreview] = useState(true);
  const [active, setActive] = useState("desktop");
  const [show, setShow] = useState(true);
  const handleMobile = () => {
    setShow(true);
  };
  const handleTable = () => {
    setShow(false);
  };
  const handleChange = (e) => {
    const { checked } = e.target
    setChecked(checked)

  }
  return (
    <>
      <div className="formpage_nav">
        <div className="formpage_first_div">
          <div>
            <input className="formpage_input" />
            <span className="icon-span">
              <FiExternalLink className="send_icon" />
            </span>
          </div>
          <div className="fill-form">Fill Form</div>
        </div>
        <div className="formpage_item">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item tab-list" role="presentation">
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg"><g transform="translate(8 3)" fill="#ffffff"><path d="M16.105 24.21a1.105 1.105 0 100-2.21 1.105 1.105 0 000 2.21zM11 6.5a.5.5 0 00-.5.5v18a.5.5 0 00.5.5h9.895a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5H11zM11 5h9.895a2 2 0 012 2v18a2 2 0 01-2 2H11a2 2 0 01-2-2V7a2 2 0 012-2zm3.553 3h3.315a.553.553 0 110 1.105h-3.315a.553.553 0 010-1.105z"></path></g></svg>Phone</button>
            </li>
            <li class="nav-item tab-list" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg "><g transform="translate(8 3)" fill="#ffffff" ><circle cx="8.5" cy="22.5" r="1.5"></circle><path d="M2 1.5a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2zM2 0h13a2 2 0 012 2v23a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zM1 1h15v2H1V1z"></path></g></svg>Tablet</button>
            </li>
            <li class="nav-item tab-list" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg "><g transform="translate(2 6)" fill="#ffffff" fill-rule="evenodd"><rect x="8" y="19" width="13" height="1" rx="0.5"></rect><path d="M11 17h7v3h-7zM1 14h26v2H1z"></path><path d="M1.697 1.214a.415.415 0 00-.424.405v13.762c0 .223.19.405.424.405h24.606a.415.415 0 00.424-.405V1.619a.415.415 0 00-.424-.405H1.697zm0-1.214h24.606C27.24 0 28 .725 28 1.619v13.762c0 .894-.76 1.619-1.697 1.619H1.697C.76 17 0 16.275 0 15.381V1.619C0 .725.76 0 1.697 0z" fill-rule="nonzero"></path></g></svg>Desktop</button>
            </li>
          </ul>
          {/* <div
            className="formpage_item_first"
            onClick={() => setActive("mobile")}
          >
            <div>
              <AiOutlineMobile className="formpage_icon_mob" />
            </div>
            <div>
              <p className="icon_name">Mobile</p>
            </div>
          </div>
          <div onClick={() => setActive("tablet")}>
            <div>
              <AiOutlineTablet className="formpage_icon" />
            </div>
            <div>
              <p className="icon_name">Tablet</p>
            </div>
          </div>
          <div
            className="formpage_item_last"
            onClick={() => setActive("desktop")}
          >
            <div>
              <AiOutlineDesktop className="formpage_icon" />
            </div>
            <div>
              <p className="icon_name">Desktop</p>
            </div>
          </div> */}
          <section className="after_build_form">Preview Form </section>
          <section className="form-check form-switch">
            <input class="form-check-input checkinput" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={e => handleChange(e)}
              defaultChecked={checked} />

          </section>

        </div>
      </div>
      {/* <div className='row preview-nav d-flex align-items-center'>

        <div className='col-md-6 col-sm-6 col-xs-6 col-lg-6'>
       
          <div className='d-flex ms-4 align-items-center'><div className='w-50 d-flex align-items-center'>  <input type="text" className='resizedTextbox' /><div><FiExternalLink /></div>
          </div>  <div className='50'> <button type="button" className="fill-btn text-white w-30 ms-3">Fill form</button></div>
          </div>

        </div>
        <div className='col-md-5 col-sm-5 col-xs-5 col-lg-5'>

          <div className='d-flex float-end icon-margin'>

           
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg"><g transform="translate(8 3)" fill="#ffffff"><path d="M16.105 24.21a1.105 1.105 0 100-2.21 1.105 1.105 0 000 2.21zM11 6.5a.5.5 0 00-.5.5v18a.5.5 0 00.5.5h9.895a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5H11zM11 5h9.895a2 2 0 012 2v18a2 2 0 01-2 2H11a2 2 0 01-2-2V7a2 2 0 012-2zm3.553 3h3.315a.553.553 0 110 1.105h-3.315a.553.553 0 010-1.105z"></path></g></svg>Phone</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg "><g transform="translate(8 3)" fill="#ffffff" ><circle cx="8.5" cy="22.5" r="1.5"></circle><path d="M2 1.5a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2zM2 0h13a2 2 0 012 2v23a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zM1 1h15v2H1V1z"></path></g></svg>Tablet</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg "><g transform="translate(2 6)" fill="#ffffff" fill-rule="evenodd"><rect x="8" y="19" width="13" height="1" rx="0.5"></rect><path d="M11 17h7v3h-7zM1 14h26v2H1z"></path><path d="M1.697 1.214a.415.415 0 00-.424.405v13.762c0 .223.19.405.424.405h24.606a.415.415 0 00.424-.405V1.619a.415.415 0 00-.424-.405H1.697zm0-1.214h24.606C27.24 0 28 .725 28 1.619v13.762c0 .894-.76 1.619-1.697 1.619H1.697C.76 17 0 16.275 0 15.381V1.619C0 .725.76 0 1.697 0z" fill-rule="nonzero"></path></g></svg>Desktop</button>
              </li>
            </ul>

      


          </div>
        </div>
        <div className='col-md-1 col-sm-1 col-xs-1 col-lg-1'>

          <p className='Preview d-flex pt-2'>Preview Form
            <div class="form-switch" style={{ fontSize: "18px" }}>
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={e => handleChange(e)}
                defaultChecked={checked} />
            </div>
          </p>


        </div>
      </div> */}
    </>
  )
}
export default PreviewNav;