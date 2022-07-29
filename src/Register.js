import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import {FiSearch,FiChevronRight} from 'react-icons/fi'
const Register = () => {
  const [radio, setRadio] = useState("Limited");
  const [show, setShow] = useState(false);
  const [text,setText] = useState(true)
  const handleRadio = (value) => {
    console.log(value, "value");
    setRadio(value);
  };
  useEffect(()=>{
    /* Made with love by @fitri
     This is a component of my ReactJS project
     https://codepen.io/fitri/full/oWovYj/ */
    
     function enableDragSort(listClass) {
      const sortableLists = document.getElementsByClassName(listClass);
      Array.prototype.map.call(sortableLists, (list) => {enableDragList(list)});
    }
    
    function enableDragList(list) {
      Array.prototype.map.call(list.children, (item) => {enableDragItem(item)});
    }
    
    function enableDragItem(item) {
      item.setAttribute('draggable', true)
      item.ondrag = handleDrag;
      item.ondragend = handleDrop;
    }
    
    function handleDrag(item) {
      const selectedItem = item.target,
            list = selectedItem.parentNode,
            x = window.event.clientX,
            y = window.event.clientY;
      
      selectedItem.classList.add('drag-sort-active');
      let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
      
      if (list === swapItem.parentNode) {
        swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
        list.insertBefore(selectedItem, swapItem);
      }
    }
    
    function handleDrop(item) {
      item.target.classList.remove('drag-sort-active');
    }
    
    (()=> {enableDragSort('drag-sort-enable')})();
    },[])
  return (
    <>
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
            <div class="row flex-grow form-bg drag-sort-enable">
              <div class="col-lg-6 register-half-bg d-flex flex-row">
                <p class="text-white font-weight-medium text-center flex-grow align-self-end">
                  Copyright &copy; 2021 All rights reserved.
                </p>
              </div>

              <div class="col-lg-6 d-flex align-items-center justify-content-center">
                <div class="auth-form-transparent text-left p-3">
                  <div class="brand-logo">
                    {/* <img
                      src="https://www.bootstrapdash.com/demo/star-admin2-pro/template/images/logo.svg"
                      alt="logo"
                    /> */}
                      <div>
          <a class="navbar-brand brand-logo" href="/">
            <img src="../../images/Logo.png" alt="logo" />
          </a>
         
        </div>
                  </div>
                  {/* <h6 class="mandatory">*This is a mandatory field</h6> */}
                  <h4 className="heading-form">Your business</h4>
                  <h6 class="second-heading-form">
                    Please select your business type:
                  </h6>
                  <input
                    id="individual"
                    checked={radio === "Limited"}
                    type="radio"
                    name="business"
                    value="Limited"
                    onClick={() => {
                      handleRadio("Limited");
                    }}
                  />
                  <label for="individual">
                    <span></span>Limited Company
                  </label>

                  <input
                    id="organization"
                    type="radio"
                    checked={radio === "Sole"}
                    name="business"
                    value="Sole"
                    onClick={() => {
                      handleRadio("Sole");
                    }}
                  />
                  <label for="organization" className="second-lable">
                    <span></span>Sole Trader
                  </label>

                  <input
                    id="org"
                    type="radio"
                    checked={radio === "Other"}
                    name="business"
                    value="Other"
                    onClick={() => {
                      handleRadio("Other");
                    }}
                  />
                  <label for="org" className="second-lable">
                    <span></span>Other (e.g. Partnership)
                  </label>
                  {radio === "Limited" ? (
                    <>
                      {" "}
                      <h6 class="second-heading-form">Search by:</h6>
                      <input
                        id="users"
                        type="radio"
                        name="user"
                        value="users"
                        onClick={()=>{setText(true)}}
                      />
                      <label for="users">
                        <span></span>Business name
                      </label>
                      <input
                        id="userss"
                        type="radio"
                        name="user"
                        value="userss"
                        onClick={()=>{setText(false)}}
                      />
                      <label for="userss" className="second-lable">
                        <span></span>Company Registration Number
                      </label>
                      <div className="d-flex mt-5">
                        <div className="search-input-div">
                          <input
                            type="search"
                            placeholder="Enter your business name*"
                            className="search-input"
                          />
                        </div>
                        <div className="ps-4">
                          <button type="submit" className="btn-default">
                           SEARCH &nbsp;  <i class="icon-search" style={{ transform: 'rotate(80deg)'}}></i>
                          </button>
                        </div>
                        <div className="ps-3 para-form-div">
                         {text ? <p className="para-form">
                            Enter at least the first three characters of your
                            company name or your full company registration
                            number and press 'search' to locate your company
                            details.
                          </p>: <p className="para-form">
                          Enter your full 8 digit company registration number. If your registration number is only seven digits, add a zero to the beginning. Companies registered in Scotland and Northern Ireland must add SC or NI to the beginning.
                          </p>} 
                         
                        </div>
                      </div>
                      <div className="d-flex mt-4 align-items-center">
                        <div style={{paddingRight:'17px'}}>
                          <label className="lable-form">Select business*</label>
                        </div>
                        <div className="search-input-div search-input-div1">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class="  search-input"
                            id="exampleFormControlSelect2"
                          >
                            <option>Select business</option>
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Germany</option>
                            <option>Argentina</option>
                          </select>
                        </div>
                        {/* <div className="ps-5 para-form-div"> */}
                          {/* <p className='para-form'>Enter at least the first three characters of your company name or your full company registration number and press 'search' to locate your company details.</p> */}
                        {/* </div> */}
                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div style={{paddingRight:'25px'}}>
                          <label className="lable-form">Select director*</label>
                        </div>
                        <div className="search-input-div search-input-div1">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class="  search-input"
                            id="exampleFormControlSelect2"
                          >
                            <option>Select director*</option>
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Germany</option>
                            <option>Argentina</option>
                          </select>
                        </div>
                      
                      </div>
                      <div className="d-flex mt-4 align-items-center">
                        <div style={{paddingRight:'17px'}}>
                         <div className="register-number"><label className="lable-form">Company registration number</label></div> 
                        </div>
                        <div className="search-input-div ">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <p>None selected</p>
                        </div>
                       
                      </div>
                      <div className="d-flex mt-4 align-items-center">
                        <div style={{paddingRight:'17px'}}>
                        <div className="register-number">  <label className="lable-form">Registered business address*</label></div>
                        </div>
                        <div className="search-input-div ">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <p>None selected</p>
                        </div>
                        
                      </div>
                  
                      <hr />
                      <div class="mt-3 text-end d-flex align-items-center justify-content-between">
                      <p className="already-login">
                     Already account please{" "}
                      <Link to="/login" class="auth-link text-black">
                        Login
                      </Link>{" "}
                     
                    </p>
                        <Link
                          class="btn  auth-form-btn auth-form-btn1"
                          to="/login"
                        >
                          Next <FiChevronRight/>
                        </Link>
                      </div>
                    </>
                  ) : radio === "Sole" ? (
                    <>
                      {" "}
                      <div className="d-flex mt-4 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Business name*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input
                            type="text"
                            class="search-input"
                            placeholder="Enter Your Business Name"
                          />
                        </div>
                      
                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Industry*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class="  search-input"
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Germany</option>
                            <option>Argentina</option>
                          </select>
                        </div>
                       
                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Number of employees*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input type="number" class="search-input" />
                        </div>
                        
                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Are you a contractor or freelancer?*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class="  search-input"
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Germany</option>
                            <option>Argentina</option>
                          </select>
                        </div>
                       
                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">
                            What's your expected monthly spend for this
                            account?*
                          </label>
                        </div>
                        {/* <div className="search-input-div">
                         
                          <input type="text" class="search-input" />
                        </div> */}
                        <div class="input-group search-input-div">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="number" class="form-control search-input" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>          </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Does your organisation have a website?*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class="  search-input"
                            id="exampleFormControlSelect2"
                          >
                            <option>Select business</option>
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Germany</option>
                            <option>Argentina</option>
                          </select>
                        </div>
                        
                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">
                            Business name as it should appear on card*
                          </label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input
                            type="text"
                            class="search-input"
                            placeholder="Enter"
                          />
                        </div>
                       
                      </div>
                      <hr />
                      <div class="mt-3 text-end d-flex align-items-center justify-content-between">
                      <p className="already-login">
                     Already account please{" "}
                      <Link to="/login" class="auth-link text-black">
                        Login
                      </Link>{" "}
                     
                    </p>
                      <Link
                          class="btn  auth-form-btn auth-form-btn1"
                          to="/login"
                        >
                          Next <FiChevronRight/>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="d-flex mt-4 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Business Type*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input
                            type="text"
                            class="search-input"
                            placeholder="Business name"
                          />
                        </div>
                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Business Name*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input
                            type="text"
                            class="search-input"
                            placeholder="Business name"
                          />
                        </div>
                       
                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Industry*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class="  search-input"
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Germany</option>
                            <option>Argentina</option>
                          </select>
                        </div>
                       
                      </div>

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Number of employees*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input type="number" class="search-input" />
                        </div>
                       
                      </div>
                      <div className="d-flex mt-3">
                        <div className=" lables-div">
                          <label className="lable-form">Business postcode*</label>
                        </div>
                        <div className="search-input-div div-search-input">
                         <div className="d-flex"><input
                            type="number"
                            placeholder="Enter your business name*"
                            className="search-input"
                          /> <div className="ps-4">
                          <button type="submit" className="btn-default">
                            find
                          </button>
                        </div></div> 
                          {!show ? (
                            <p
                              onClick={() => {
                                setShow(true);
                              }}
                              className="pt-2"
                            >
                              Enter manually
                            </p>
                          ) : (
                            <p
                              onClick={() => {
                                setShow(false);
                              }}
                            >
                              Find address by lookup
                            </p>
                          )}
                        </div>
                       
                      </div>

                      {show ? (
                        <>
                          {" "}
                          <div>
                            <div className="d-flex mt-3 align-items-center">
                              <div className=" lables-div">
                                <label className="lable-form">Building No. or name</label>
                              </div>
                              <div className="search-input-div">
                                {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                                <input
                                  type="number"
                                  class="search-input"
                                  placeholder="Building No. or name"
                                />
                              </div>
                            
                            </div>
                            <div className="d-flex mt-3 align-items-center">
                              <div className=" lables-div">
                                <label className="lable-form">House number*</label>
                              </div>
                              <div className="search-input-div">
                                {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                                <input type="number" class="search-input" />
                              </div>
                             
                            </div>
                            <div className="d-flex mt-3 align-items-center">
                              <div className=" lables-div">
                                <label className="lable-form">Address line*</label>
                              </div>
                              <div className="search-input-div">
                                {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                                <input type="text" class="search-input" />
                              </div>
                            
                            </div>
                            <div className="d-flex mt-3 align-items-center">
                              <div className=" lables-div">
                                <label className="lable-form">Town / City*</label>
                              </div>
                              <div className="search-input-div">
                                {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                                <input type="text" class="search-input" />
                              </div>
                              
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Are you a contractor or freelancer?*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class="  search-input"
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Germany</option>
                            <option>Argentina</option>
                          </select>
                        </div>
                       
                      </div>

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">
                            What's your expected monthly spend for this
                            account?*
                          </label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input type="text" class="search-input" />
                        </div>
                       
                      </div>

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Does your organisation have a website?*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class="  search-input"
                            id="exampleFormControlSelect2"
                          >
                            <option>Select business</option>
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Germany</option>
                            <option>Argentina</option>
                          </select>
                        </div>
                      
                      </div>

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">
                            Business name as it should appear on card*
                          </label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input
                            type="text"
                            class="search-input"
                            placeholder="Enter"
                          />
                        </div>
                      
                      </div>
                      <hr />

                      <div class="mt-3 text-end">
                      <Link
                          class="btn  auth-form-btn auth-form-btn1"
                          to="/login"
                        >
                          Next <FiChevronRight/>
                        </Link>
                      </div>
                    </>
                  )}

                  {/* <form class="pt-3">
                <div class="form-group">
                  <label>Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="ti-user text-primary"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control form-control-lg border-left-0" placeholder="Username"/>
                  </div>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="ti-email text-primary"></i>
                      </span>
                    </div>
                    <input type="email" class="form-control form-control-lg border-left-0" placeholder="Email"/>
                  </div>
                </div>
                <div class="form-group">
                  <label>Country</label>
                  <select class="form-control form-control-lg" id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="ti-lock text-primary"></i>
                      </span>
                    </div>
                    <input type="password" class="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password"/>                        
                  </div>
                </div>
                <div class="mb-4">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input"/>
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN UP</a>
                </div>
                <div class="text-center mt-4 fw-light">
                  Already have an account? <a href="login.html" class="text-primary">Login</a>
                </div>
              </form> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
    </>
  );
};

export default Register;
