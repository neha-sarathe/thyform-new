import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiChevronRight } from 'react-icons/fi'
// import register2 from '../public/images/auth/register-bg.png'
import Dark from "./DarkAuth";
const Register = (props) => {
  const [radio, setRadio] = useState("Limited");
  const [show, setShow] = useState(false);
  const [text, setText] = useState(true);
  const [txt, setTxt] = useState('');
  const [txtbn, setTxtbn] = useState('');
  const [txtbn2, setTxtbn2] = useState('');
  const [txtno, setTxtno] = useState('');
  const [txtno2, setTxtno2] = useState('');
  const [spend, setSpend] = useState('');
  const [spend2, setSpend2] = useState('');
  const [address, setAddress] = useState('');
  const [houseno, setHouseNo] = useState('');
  const [companynumber,setCompanyNumber] = useState(false)
  const companyHandle = (value)=>{
    setCompanyNumber(value)
  }
  const handleRadio = (value) => {
    console.log(value, "value");
    setRadio(value);
  };
  useEffect(() => {
    /* Made with love by @fitri
     This is a component of my ReactJS project
     https://codepen.io/fitri/full/oWovYj/ */

    function enableDragSort(listClass) {
      const sortableLists = document.getElementsByClassName(listClass);
      Array.prototype.map.call(sortableLists, (list) => { enableDragList(list) });
    }

    function enableDragList(list) {
      Array.prototype.map.call(list.children, (item) => { enableDragItem(item) });
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

    (() => { enableDragSort('drag-sort-enable') })();
  }, [])
  /*validations */
  const onInputChange = e => {
    const { value } = e.target;

    // console.log('Input value: ', value);

    // const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    // if (value === "" || re.test(value)) {
    //   setTxt(value);
    // }
    setTxt(value);
  }

  const onBusinessName = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (value === "" || re.test(value)) {
      setTxtbn(value);
    }
  }

  const onEmployeesNo = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setTxtno(value);
    }
  }

  const onSpend = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setSpend(value);
    }
  }

  const onAddress = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[0-9a-zA-Z]+$/;
    if (value === "" || re.test(value)) {
      setAddress(value);
    }
  }

  const onBusinessNameOther = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (value === "" || re.test(value)) {
      setTxtbn2(value);
    }
  }

  const onEmployeesNoOther = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setTxtno2(value);
    }
  }

  const onSpendOther = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setSpend2(value);
    }
  }

  const onHouseNo = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
    if (value === "" || re.test(value)) {
      setHouseNo(value);
    }
  }
  console.log('props.darkmodes', props.darkmodes)
  return (
    <>
      <Dark darkmodes={props.darkmodes} setDarkmodes={props.setDarkmodes} />
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg " >
            <div className={" row flex-grow form-bg1 drag-sort-enable " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
              <div className="col-lg-6  d-flex flex-row">
                {/* <div className="register-half-bg"></div> */}
                <div className="register-half-div">
                  <img src={process.env.PUBLIC_URL + "images/auth/register-bg.png"} className="register-half-img" />
                </div>
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
                  <h4 className="heading-form dark-mode-text">Your business</h4>
                  <h6 class="second-heading-form dark-mode-text">
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
                  <label for="individual" className={'dark-mode-text ' + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
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
                  <label for="organization" className="second-lable dark-mode-text">
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
                  <label for="org" className="second-lable dark-mode-text">
                    <span></span>Other (e.g. Partnership)
                  </label>
                  {radio === "Limited" ? (
                    <>
                      {" "}
                      <br />
                      <h6 class="second-heading-form dark-mode-text">Search by:</h6>

                      <input
                        id="users"
                        type="radio"
                        name="user"
                        value="users"
                        onClick={() => { setText(true) }}
                      />
                      <label for="users" className='dark-mode-text'>
                        <span></span>Business name
                      </label>
                      <input
                        id="userss"
                        type="radio"
                        name="user"
                        value="userss"
                        onClick={() => { setText(false) }}
                      />
                      <label for="userss" className={"second-lable dark-mode-text " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")} >
                        <span></span>Company Registration Number
                      </label>
                      <div className="d-flex mt-5 pt-3">
                        <div className="search-input-div">
                         {!text ? <input
                            type="number"
                            placeholder="Registration Number"
                            className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                            value={txt}
                            onChange={onInputChange}
                          /> : <input
                          type="text"
                          placeholder="Enter your business name*"
                          className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                          value={txt}
                          onChange={onInputChange}
                        /> } 
                        </div>
                        <div className="ps-4">
                          <button type="submit" className="btn-default pt-2 pb-2">
                            SEARCH &nbsp;  <i class="icon-search" style={{ transform: 'rotate(80deg)' }}></i>
                          </button>
                        </div>

                      </div>
                      <div className="ps-1 mt-3 para-form-div">
                        {text ? <p className="para-form">
                          Enter at least the first three characters of your
                          company name or your full company registration
                          number and press 'search' to locate your company
                          details.
                        </p> : <p className="para-form">
                          Enter your full 8 digit company registration number. If your registration number is only seven digits, add a zero to the beginning. Companies registered in Scotland and Northern Ireland must add SC or NI to the beginning.
                        </p>}

                      </div>
                      <div className="d-flex mt-4 align-items-center">
                        <div style={{ paddingRight: '17px' }}>
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Select business*</label>
                        </div>
                        <div className="search-input-div search-input-div1">
                          {/* <input type='se
                          arch' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
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
                        <div style={{ paddingRight: '25px' }}>
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Select director*</label>
                        </div>
                        <div className="search-input-div search-input-div1">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
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
                        <div style={{ paddingRight: '17px' }}>
                          <div className="register-number"><label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Company registration number</label></div>
                        </div>
                        <div className="search-input-div ">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <p>None selected</p>
                        </div>

                      </div>
                      <div className="d-flex mt-4 align-items-center">
                        <div style={{ paddingRight: '17px' }}>
                          <div className="register-number">  <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Registered business address*</label></div>
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
                          <Link to="/login" class="auth-link register-here register-here">
                            Login
                          </Link>{" "}

                        </p>
                        <Link
                          className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")}
                          to="/login"
                        >
                          Next <FiChevronRight />
                        </Link>
                      </div>
                    </>
                  ) : radio === "Sole" ? (
                    <>
                      {" "}     <br />
                      <div className="d-flex mt-4 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Business name*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input
                            type="text"
                            class={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                            placeholder="Enter Your Business Name"
                            value={txtbn}
                            onChange={onBusinessName}
                          />
                        </div>

                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Industry*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
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
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Number of employees*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input type="text" class={"search-input " + (props.darkmodes ? "text-white" : "text-dark")} placeholder="Enter"
                            value={txtno}
                            onChange={onEmployeesNo} />
                        </div>

                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Are you a contractor or freelancer?*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>

                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                            What's your expected monthly spend for this
                            account?*
                          </label>
                        </div>
                        {/* <div className="search-input-div">
                         
                          <input type="text" class="search-input" />
                        </div> */}
                        <div class="input-group search-input-div">
                          <span class="input-group-text" id="basic-addon1">??</span>
                          <input type="text" class={"form-control search-input " + (props.darkmodes ? "text-white form-control-dark" : "text-dark")} placeholder="Enter" aria-label="Username"
                            aria-describedby="basic-addon1" value={spend} onChange={onSpend} />
                        </div>
                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Does your organisation have a website?*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>

                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                            Business name as it should appear on card*
                          </label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input
                            type="text"
                            class={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                            placeholder="Enter"
                          />
                        </div>

                      </div>
                      <hr />
                      <div class="mt-3 text-end d-flex align-items-center justify-content-between">
                        <p className="already-login">
                          Already account please{" "}
                          <Link to="/login" class="auth-link register-here">
                            Login
                          </Link>{" "}

                        </p>
                        <Link
                          className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")}
                          to="/login"
                        >
                          Next <FiChevronRight />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* <div className="d-flex mt-4 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">Business Type*</label>
                        </div>
                        <div className="search-input-div">
                  */}
                      {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                      {/*   <input
                            type="text"
                            class="search-input"
                            placeholder="Business Type"
                          />
                        </div>

                      </div> */}
                      <br />
                      <div className="d-flex mt-3 align-items-center">

                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Business Name*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input
                            type="text"
                            class={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                            placeholder="Business name"
                            value={txtbn2}
                            onChange={onBusinessNameOther}
                          />
                        </div>

                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Industry*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
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
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Number of employees*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input type="text" class={"search-input " + (props.darkmodes ? "text-white" : "text-dark")} placeholder="Enter"
                            value={txtno2}
                            onChange={onEmployeesNoOther} />
                        </div>

                      </div>
                      <div className="d-flex mt-3">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Business postcode*</label>
                        </div>
                        <div className="search-input-div div-search-input">
                          <div className="d-flex"><input
                            type="text"
                            placeholder="Enter your postcode*"
                            className={"search-input search-input-post " + (props.darkmodes ? "text-white" : "text-dark")}
                          />
                            <div className="ps-4 find-btn-postcode">
                              <button type="submit" className="btn-default btn-find-post">
                                Find &nbsp;  <i class="icon-search " style={{ transform: 'rotate(80deg)' }}></i>
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
                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Building No. or name</label>
                              </div>
                              <div className="search-input-div">
                                {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                                <input
                                  type="text"
                                  class={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                  placeholder="Building No. or name"
                                />
                              </div>

                            </div>
                            <div className="d-flex mt-3 align-items-center">
                              <div className=" lables-div">
                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>House number*</label>
                              </div>
                              <div className="search-input-div">
                                {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                                <input type="text" class={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                  value={houseno}
                                  onChange={onHouseNo} />
                              </div>

                            </div>
                            <div className="d-flex mt-3 align-items-center">
                              <div className=" lables-div">
                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Address line*</label>
                              </div>
                              <div className="search-input-div">
                                {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                                <input type="text" class={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                  value={address}
                                  onChange={onAddress} />
                              </div>

                            </div>
                            <div className="d-flex mt-3 align-items-center">
                              <div className=" lables-div">
                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Town / City*</label>
                              </div>
                              <div className="search-input-div">
                                {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                                <input type="text" class={"search-input " + (props.darkmodes ? "text-white" : "text-dark")} />
                              </div>

                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")} >Are you a contractor or freelancer?*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>

                      </div>

                      {/* <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">
                            What's your expected monthly spend for this
                            account?*
                          </label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                      {/*     <input type="text" class="search-input"
                            value={spend} onChange={onSpend} />
                        </div>

                      </div> */}
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                            What's your expected monthly spend for this
                            account?*
                          </label>
                        </div>
                        {/* <div className="search-input-div">
                         
                          <input type="text" class="search-input" />
                        </div> */}
                        <div class="input-group search-input-div">
                          <span class="input-group-text" id="basic-addon1">??</span>
                          <input type="text" class={"form-control search-input " + (props.darkmodes ? "text-white form-control-dark" : "text-dark")} placeholder="Enter" aria-label="Username"
                            aria-describedby="basic-addon1" value={spend2} onChange={onSpendOther} />
                        </div>
                      </div>

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Does your organisation have a website?*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            class={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>

                      </div>

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                            Business name as it should appear on card*
                          </label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input
                            type="text"
                            class={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                            placeholder="Enter"
                          />
                        </div>

                      </div>
                      <hr />

                      <div class="mt-3 text-end">
                        <Link
                          className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")}
                          to="/login"
                        >
                          Next <FiChevronRight />
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
