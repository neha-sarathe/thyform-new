import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiChevronRight } from 'react-icons/fi'
// import register2 from '../public/images/auth/register-bg.png'
import Dark from "./DarkAuth";
const Register = (props) => {
  const navigate = useNavigate();
  const [radio, setRadio] = useState("Limited");
  const [show, setShow] = useState(false);
  const [text, setText] = useState('users');
  const [txt, setTxt] = useState('');
  const [txtbn, setTxtbn] = useState('');
  const [txtbn2, setTxtbn2] = useState('');
  const [txtno, setTxtno] = useState('');
  const [txtno2, setTxtno2] = useState('');
  const [industryName, setIndustryName] = useState('');
  const [postCode, setpostCode] = useState('');
  // const [spend, setSpend] = useState('');
  // const [spend2, setSpend2] = useState('');
  const [address, setAddress] = useState('');
  const [houseno, setHouseNo] = useState('');
  const [companynumber, setCompanyNumber] = useState(false)
  const [selectedData, setSelectedData] = useState('')
  const [directorSelect, setDirectorSelect] = useState('')
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [businessError, setBusinessError] = useState(false);
  const [directorError, setDirectorError] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const [website, setWebsite] = useState(false);
  const [websiteName, setWebsiteName] = useState('www');
  const [soleError, setSoleError] = useState(false);
  const [industryError, setIndustryError] = useState(false);
  const [employError, setEmployError] = useState(false);
  // const [spendError, setSpendError] = useState(false);
  const [websiteSoleError, setWebsiteSoleError] = useState(false);
  const [industryData, setIndustryData] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [otherWebsiteName, setOtherWebsiteName] = useState('');


  const companyHandle = (value) => {
    setCompanyNumber(value)
  }
  const handleRadio = (value) => {
    setRadio(value);
  };
  const handleuser = (value) => {
    setText(value);
  }
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
console.log(item.target,'xdata',y,'ydata',selectedItem,'selectedItem',document.elementFromPoint(x, y),'document.elementFromPoint(x, y);')
      selectedItem.classList.add('drag-sort-active');
      let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
      console.log(selectedItem.nextSibling,'list === swapItem.parentNode',swapItem,'swapItem',selectedItem.previosSibling)
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
  const onInputChange = (e) => {
    const { value } = e.target;
    if (text === "users") {
      const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
      if (value === "" || re.test(value)) {
        setTxt(value);
      }
    }
    else {
      const re = /^[0-9\b]+$/;
      if (value === "" || re.test(value)) {
        setTxt(value);
      }

    }

    // console.log('Input value: ', value);

    // const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    // if (value === "" || re.test(value)) {
    //   setTxt(value);
    // }

  }

  const onBusinessName = e => {
    const { value } = e.target;


    const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (value === "" || re.test(value)) {
      setTxtbn(value);
    }
    setSoleError(false)
  }

  const onEmployeesNo = e => {
    const { value } = e.target;


    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setTxtno(value);
    }
    setEmployError(false)
  }

  // const onSpend = e => {
  //   const { value } = e.target;
  //   const re = /^[0-9\b]+$/;
  //   if (value === "" || re.test(value)) {
  //     setSpend(value);
  //   }
  //   setSpendError(false)
  // }

  const onAddress = e => {
    const { value } = e.target;


    const re = /^[0-9a-zA-Z]+$/;
    if (value === "" || re.test(value)) {
      setAddress(value);
    }
  }

  const onBusinessNameOther = e => {
    const { value } = e.target;


    const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (value === "" || re.test(value)) {
      setTxtbn2(value);
    }
    setOtherBusinessError(false)
  }
  const handleOtherIndustry = (value) => {
    setIndustryName(value)
    setOtherIndustryError(false)
  }
  const handleOtherwebsite = value => {
    setOtherWebsiteName(value)
    setOtherWebsiteError(false)
  }

  const onEmployeesNoOther = e => {
    const { value } = e.target;


    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setTxtno2(value);
    }
    setOtherempError(false)
  }
  const onPostcode = e => {
    const { value } = e.target;
    setpostCode(value)
    setOtherPostcodeError(false)
  }

  // const onSpendOther = e => {
  //   const { value } = e.target;
  //   const re = /^[0-9\b]+$/;
  //   if (value === "" || re.test(value)) {
  //     setSpend2(value);
  //   }
  //   setOtherSpendError(false)
  // }

  const onHouseNo = e => {
    const { value } = e.target;


    const re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
    if (value === "" || re.test(value)) {
      setHouseNo(value);
    }
  }
  const [showResults, setShowResults] = useState(false)
  const input1 = useRef(null);
  const handleClick = () => {
    input1.current.focus();
    if (txt && txt.length >= 3) {

      const query = txt;

      const ar = [{ link: "apple" },
      { link: "google" },
      { link: "microsoft" }]

      const result = ar.find(item => item.link.includes(query))
      if (result)
        console.log(result.link)
      else
        console.log('Query not found')


      setShowResults(false);
      setSearchText(txt)
    }
    else {
      setShowResults(true);
    }
    setError(false)
  };
  let A = [{
    name: 'alpha',
    name: 'beta',
  }
  ]

  for (let item of A) {
    item.status = false;

  }
  // const select_data = ['United States of America', 'United Kingdom', 'India', 'Germany', 'Argentina']
  const select_data = [
    { key: 'america', value: 'Example 1' },
    { key: 'unitedkingdom', value: 'Example 2' },
    { key: 'india', value: 'Example 3' },
    { key: 'germany', value: 'Example 4' },
    { key: 'argentina', value: 'Example 5' }
  ]

  const handleSelect = (value) => {
    setSelectedData(value)
    setBusinessError(false)
  }
  const handleDirectorSelect = (value) => {
    setDirectorSelect(value)
    setDirectorError(false)
  }

  const handleCheckbox = () => {
    setChecked(!checked)
    setCheckError(false)
  }

  const [otherBusinessError, setOtherBusinessError] = useState(false);
  const [otherIndustryError, setOtherIndustryError] = useState(false);
  const [otherempError, setOtherempError] = useState(false);
  const [otherPostcodeError, setOtherPostcodeError] = useState(false);
  // const [otherSpendError, setOtherSpendError] = useState(false);
  const [otherWebsiteError, setOtherWebsiteError] = useState(false);

  const nextPage = () => {
    if (radio === "Limited") {
      if (txt === '') {
        setError('We could not find that company. Please enter at least the first three characters of your company name or your full company registration number.')
      } else if (selectedData === '') {
        setBusinessError('Please select your business')
      } else if (directorSelect === '') {
        setDirectorError('Please select the relevant director name')
      } else if (checked === false) {
        setCheckError('Please confirm company details are correct')
      } else {
        navigate('/registertwo')
      }
    } else if (radio === "Sole") {
      if (txtbn === '') {
        setSoleError('Please enter your business name')
      } else if (industryData === '') {
        setIndustryError('Please select an industry from the dropdown. If your industry isn not listed, select other')
      } else if (txtno === '') {
        setEmployError('Please enter the number of employees your business has using only numbers')
      } else if (website === false) {
        setWebsiteSoleError('Please select yes or no')
      } else {
        navigate('/registerthree')
      }
    } else {
      if (txtbn2 === '') {
        setOtherBusinessError('Please select your business type')
      } else if (txtno2 === '') {
      } else if (industryName === '') {
        setOtherIndustryError('Please select your business type')
      } else if (txtno2 === '') {
        setOtherempError('Please select your business type')
      } else if (postCode === '') {
        setOtherPostcodeError('Please select your business type')
      } else if (otherWebsiteName === '') {
        setOtherWebsiteError('Please select yes or no')
      } else {
        navigate('/registerfour')
      }
    }

  }

  const handleorganisation = (value) => {
    setWebsite(value)
    setWebsiteSoleError(false)
  }

  const handleIndustry = (value) => {
    setIndustryData(value)
    setIndustryError(false)
  }
  const onWebsite = (value) => {
    setWebsiteName(value)
    var res = websiteName.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if (res == null) {
      setWebsiteUrl('Please enter a valid website address')
    }
    else {
      setWebsiteUrl(true)
    }
  }


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

              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="auth-form-transparent text-left p-3">
                  <div className="brand-logo">
                    {/* <img
                      src="https://www.bootstrapdash.com/demo/star-admin2-pro/template/images/logo.svg"
                      alt="logo"
                    /> */}
                    <div>
                      <a className="navbar-brand brand-logo" href="/">
                        <img src="../../images/Logo.png" alt="logo" />
                      </a>

                    </div>
                  </div>
                  {/* <h6 className="mandatory">*This is a mandatory field</h6> */}
                  <h4 className="heading-form dark-mode-text">Your business</h4>

                  {/* <p className="text-end para_col">
                    You have selected {props.priceSelect} package
                  </p> */}

                  <h6 className="second-heading-form heading-second-business dark-mode-text">
                    Please select your business type:
                  </h6>
                  <input

                    id="individual"
                    checked={radio === "Limited"}
                    type="radio"
                    name="business"
                    value="Limited"
                    class="custom-control-input"
                    onClick={() => {
                      handleRadio("Limited");
                    }}

                  />
                  <label htmlFor="individual" className={'dark-mode-text green lable-first ' + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
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
                  <label htmlFor="organization" className="second-lable dark-mode-text">
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
                  <label htmlFor="org" className="second-lable dark-mode-text">
                    <span></span>Other (e.g. Partnership)
                  </label>
                  {radio === "Limited" ? (
                    <>
                      {" "}
                      <br />
                      <h6 className="second-heading-form dark-mode-text search-by-margin">Search by:</h6>

                      <input
                        id="users"
                        type="radio"
                        checked={text === "users"}
                        name="user"
                        value="users"
                        // onClick={() => { setText('users') }}
                        onClick={() => { handleuser('users') }}
                      />
                      <label htmlFor="users" className='dark-mode-text second-lable1 '>
                        <span></span>Business name
                      </label>
                      <input
                        id="userss"
                        type="radio"
                        checked={text === "registration"}
                        name="user"
                        value="registration"
                        // onClick={() => { setText('registration') }}
                        onClick={() => { handleuser('registration') }}
                      />
                      <label htmlFor="userss" className={"second-lable dark-mode-text company-number-registration " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")} >
                        <span></span>Company Registration Number
                      </label>
                      <div className="register-business-input d-inline-flex input-for-registration mt-2 pt-3 ">
                        <div className="search-input-div">
                          {text === "registration" ? <input
                            type="text"
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
                          />}
                        </div>
                        <div className="business-search-button">
                          <button type="submit" className="btn-default pt-2 pb-2 business-btn-height" onClick={handleClick}>
                            SEARCH &nbsp;  <i className="icon-search" style={{ transform: 'rotate(80deg)' }}></i>
                          </button>
                        </div>

                      </div>
                      <div className="ps-1 mt-3 para-form-div">
                        {text === "users" ? <p className="para-form">
                          {showResults ?
                            <p className="para-form show_result"> We couldn't find that company. Please enter at least the first three characters of your company name or your full company registration number.</p>
                            : <p className="para-form"> "Enter at least the first three characters of your
                              company name or your full company registration
                              number and press search to locate your company
                              details." </p>}

                        </p> : <p className="para-form">
                          Enter your full 8 digit company registration number. If your registration number is only seven digits, add a zero to the beginning. Companies registered in Scotland and Northern Ireland must add SC or NI to the beginning.
                        </p>}
                        <p className="para-form show_result">{error}</p>
                      </div>
                      <div className="d-flex mt-4 align-items-center">
                        <div style={{ paddingRight: '17px' }}>
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Select business*</label>
                        </div>
                        <div className="search-input-div search-input-div1">
                          {/* <input type='se
                          arch' placeholder='Enter your business name*' className='search-input'/> */}
                          {/* <select
                            className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                            ref={ref}
                            disabled={txt ? false : true}
                            onChange={(event) => handleSelect(event.target.value)}
                            value={currentFruit}
                          >
                            <option value=''>select</option>
                            {select_data && select_data.map((data, i) => <option key={i} value={data}>{data}</option>)}
                          </select> */}
                          <select onChange={(event) => handleSelect(event.target.value)} className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                            ref={input1}
                            disabled={searchText ? false : true}
                            value={selectedData}
                          >
                            <option value=''>select</option>
                            {select_data.map((option, index) => (
                              <option key={index} value={option.value}>
                                {option.value}
                              </option>
                            ))}
                          </select>
                          <p className="para-form show_result">{businessError}</p>

                        </div>
                        {/* <div className="ps-5 para-form-div"> */}
                        {/* <p className='para-form'>Enter at least the first three characters of your company name or your full company registration number and press 'search' to locate your company details.</p> */}
                        {/* </div> */}
                      </div>
                      <div className="d-flex mt-3">
                        <div style={{ paddingRight: '25px' }}>
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Select director*</label>
                        </div>
                        <div className="search-input-div search-input-div1">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          {/* <select
                            className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                            disabled={selectedData ? false : true}
                          >
                            <option>Select director*</option>
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Germany</option>
                            <option>Argentina</option>
                          </select> */}
                          <select onChange={(event) => handleDirectorSelect(event.target.value)} className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                            disabled={selectedData ? false : true}
                            value={directorSelect}
                          >
                            <option value=''>select</option>
                            {select_data.map((option, index) => (
                              <option key={index} value={option.value}>
                                {option.value}
                              </option>
                            ))}
                          </select>
                          <p className="para-form show_result">{directorError}</p>
                          {
                            selectedData ? <h6 className="mt-1">Please select the senior director. For example, a director with the majority of shareholdings or voting rights for the company.</h6> : ''
                          }

                        </div>

                      </div>
                      <div className="d-flex mt-4 align-items-center">
                        <div style={{ paddingRight: '17px' }}>
                          <div className="register-number"><label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Company registration number</label></div>
                        </div>
                        <div className="search-input-div ">
                          {directorSelect ? <p>09529679</p> : <p>None selected</p>

                          }
                        </div>

                      </div>
                      <div className="d-flex mt-4 align-items-top">
                        <div style={{ paddingRight: '17px' }}>
                          <div className="register-number">
                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Registered business address*</label>
                          </div>
                        </div>
                        {/* <div className="search-input-div"> */}
                        {directorSelect ? <>
                          <div className="search-input-div ">
                            <p>10 Greenwich Court 43 Autumn Way</p>
                            <p>West Drayton</p>
                            <p>UB7 9FB</p>
                          </div>
                        </> :
                          <div className="search-input-div">
                            <p>None selected</p>
                          </div>
                        }
                      </div>

                      {directorSelect ?
                        <>
                          <div className="d-flex mt-4">
                            <div style={{ paddingRight: '17px' }}>
                              <div className="register-number">
                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Persons with significant control (PSCs)</label>
                              </div>
                            </div>
                            <div className="search-input-div">
                              <p>2 active PSCs</p>
                              <p>Name</p>
                              <h6 className="fw-bold">Mr Seifudin Mohamedali</h6>
                              <p>Name</p>
                              <h6 className="fw-bold">Mr Taha Mohamedali</h6>
                            </div>
                            <div className="search-input-div pt-4">
                              <p></p>
                              <p>Date Of Birth</p>
                              <h6 className="fw-bold">August 1947</h6>
                              <p>Date Of Birth</p>
                              <h6 className="fw-bold">May 1975</h6>
                            </div>
                          </div>
                          <label className="float-none d-flex align-items-start mt-4" style={{ cursor: "pointer" }}>
                            <input type="checkbox"
                              defaultChecked={checked}
                              onChange={handleCheckbox}
                              className="mx-3"
                            />
                            <div><h6 className="fw-bold">I confirm that the company details are correct - including all persons with significant control.</h6>
                              <h6 className="fw-bold mt-3">This information is based on Companies House records. If it isn’t correct you’ll need to submit a <a href="/#" className="confirm_text">Confirmation Statement</a> to update your details before you apply.</h6></div>
                          </label>
                          <p className="para-form show_result">{checkError}</p>
                        </>
                        :
                        ''}

                      <hr />
                      <div className="mt-3 text-end  align-items-center justify-content-around">
                        <p className="already-login">
                          Already account please{" "}
                          <Link to="/login" className="auth-link register-here register-here">
                            Login
                          </Link>{" "}

                        </p>
                        {/* <Link
                          className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")}
                          to ={checked==true? "/login" :'/'}
                        >
                          Next <FiChevronRight />
                        </Link> */}
                        <button className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")} onClick={nextPage}>Next <FiChevronRight /></button>
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
                            className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                            placeholder="Enter Your Business Name"
                            value={txtbn}
                            onChange={onBusinessName}
                          />
                          <p className="para-form show_result">{soleError}</p>
                        </div>

                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Industry*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            onChange={(event) => handleIndustry(event.target.value)}
                            className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                            value={industryData}
                          >
                            <option>Select</option>
                            <option value="america">United States of America</option>
                            <option value="kingdom">United Kingdom</option>
                            <option value="india">India</option>
                            <option value="germany">Germany</option>
                            <option value="argentina">Argentina</option>
                          </select>
                          <p className="para-form show_result">{industryError}</p>
                        </div>

                      </div>

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Number of employees*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")} placeholder="Enter"
                            value={txtno}
                            onChange={onEmployeesNo} />
                          <p className="para-form show_result">{employError}</p>
                        </div>

                      </div>
                      {  /* <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Are you a contractor or freelancer?*</label>
                        </div>
                        <div className="search-input-div">
                      
                          <select
                            className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>

                      </div>
*/}
                      {/* <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                            What's your expected monthly spend for this
                            account?*
                          </label>
                        </div>
                        <div className="input-group search-input-div">
                          <span className="input-group-text" id="basic-addon1">£</span>
                          <input type="text" className={"form-control search-input " + (props.darkmodes ? "text-white form-control-dark" : "text-dark")} placeholder="Enter" aria-label="Username"
                            aria-describedby="basic-addon1" value={spend} onChange={onSpend} />
                          <p className="para-form show_result">{spendError}</p>
                        </div>
                      </div> */}
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Does your organisation have a website?*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            onChange={(event) => handleorganisation(event.target.value)}
                            className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                          >Website address*
                            <option>Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                          <p className="para-form show_result">{websiteSoleError}</p>
                        </div>

                      </div>
                      {website === 'yes' ?
                        <div className="d-flex mt-4 align-items-center">
                          <div className=" lables-div">
                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Website address*</label>
                          </div>
                          <div className="search-input-div">
                            <input
                              type="text"
                              className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                              value={websiteName}
                              onChange={(event) => onWebsite(event.target.value)}
                            />
                            <p className="para-form show_result">{websiteUrl}</p>
                          </div>
                        </div>
                        : ''}

                      {/*
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                            Business name as it should appear on card*
                          </label>
                        </div>
                        <div className="search-input-div">
                          
                          <input
                            type="text"
                            className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                            placeholder="Enter"
                          />
                        </div>

                      </div>
                      */}
                      <hr />
                      <div className="mt-3 text-end  align-items-center justify-content-around">
                        <p className="already-login">
                          Already account please{" "}
                          <Link to="/login" className="auth-link register-here">
                            Login
                          </Link>{" "}

                        </p>
                        <button className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")} onClick={nextPage}>Next <FiChevronRight /></button>
                        {/* <Link
                          className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")}
                          to="/registerthree"
                        >
                          Next <FiChevronRight />
                        </Link> */}
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
                            className="search-input"
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
                            className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                            placeholder="Business name"
                            value={txtbn2}
                            onChange={onBusinessNameOther}
                          />
                          <p className="para-form show_result">{otherBusinessError}</p>
                        </div>

                      </div>
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Industry*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            onChange={(event) => handleOtherIndustry(event.target.value)}
                            value={industryName}
                            className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option value='America'>United States of America</option>
                            <option value='Kingdom'>United Kingdom</option>
                            <option value='India'>India</option>
                            <option value='Germany'>Germany</option>
                            <option value='Argentina'>Argentina</option>
                          </select>
                          <p className="para-form show_result">{otherIndustryError}</p>
                        </div>

                      </div>

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Number of employees*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <input type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")} placeholder="Enter"
                            value={txtno2}
                            onChange={onEmployeesNoOther} />
                          <p className="para-form show_result">{otherempError}</p>
                        </div>

                      </div>
                      <div className="d-flex mt-3">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Business postcode*</label>
                        </div>
                        <div className="search-input-div div-search-input">
                          <div className="d-flex">
                            <input
                              type="text"
                              onChange={onPostcode}
                              value={postCode}
                              placeholder="Enter your postcode*"
                              className={"search-input search-input-post " + (props.darkmodes ? "text-white" : "text-dark")}
                            />

                            <div className="ps-4 find-btn-postcode">
                              <button type="submit" className="btn-default btn-find-post">
                                Find &nbsp;  <i className="icon-search " style={{ transform: 'rotate(80deg)' }}></i>
                              </button>
                            </div></div>
                          <p className="para-form show_result">{otherPostcodeError}</p>
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
                                  className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
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
                                <input type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
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
                                <input type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
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
                                <input type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")} />
                              </div>

                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}

                      {/*    <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")} >Are you a contractor or freelancer?*</label>
                        </div>
                        <div className="search-input-div">
                         
                          <select
                            className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>

                      </div>
*/}
                      {/* <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className="lable-form">
                            What's your expected monthly spend for this
                            account?*
                          </label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                      {/*     <input type="text" className="search-input"
                            value={spend} onChange={onSpend} />
                        </div>

                      </div> */}
                      {/* <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                            What's your expected monthly spend for this
                            account?*
                          </label>
                        </div>

                        <div className="input-group search-input-div">
                          <span className="input-group-text" id="basic-addon1">£</span>
                          <input type="text" className={"form-control search-input " + (props.darkmodes ? "text-white form-control-dark" : "text-dark")} placeholder="Enter" aria-label="Username"
                            aria-describedby="basic-addon1" value={spend2} onChange={onSpendOther} />
                        </div>
                        <p className="para-form show_result">{otherSpendError}</p>
                      </div> */}

                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Does your organisation have a website?*</label>
                        </div>
                        <div className="search-input-div">
                          {/* <input type='search' placeholder='Enter your business name*' className='search-input'/> */}
                          <select
                            onChange={(event) => handleOtherwebsite(event.target.value)}
                            value={otherWebsiteName}
                            className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                            id="exampleFormControlSelect2"
                          >
                            <option>Select</option>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                          </select>
                          <p className="para-form show_result">{otherWebsiteError}</p>

                        </div>

                      </div>
                      {/*
                      <div className="d-flex mt-3 align-items-center">
                        <div className=" lables-div">
                          <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                            Business name as it should appear on card*
                          </label>
                        </div>
                        <div className="search-input-div">
                          
                          <input
                            type="text"
                            className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                            placeholder="Enter"
                          />
                        </div>

                      </div>
                      */}
                      <hr />

                      <div className="mt-3 text-end  align-items-center justify-content-around">
                        <p className="already-login">
                          Already account please{" "}
                          <Link to="/login" className="auth-link register-here register-here">
                            Login
                          </Link>{" "}

                        </p>
                        <button className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")} onClick={nextPage}>Next <FiChevronRight /></button>
                      </div>
                    </>
                  )}

                  {/* <form className="pt-3">
                <div className="form-group">
                  <label>Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="ti-user text-primary"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-left-0" placeholder="Username"/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="ti-email text-primary"></i>
                      </span>
                    </div>
                    <input type="email" className="form-control form-control-lg border-left-0" placeholder="Email"/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="ti-lock text-primary"></i>
                      </span>
                    </div>
                    <input type="password" className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password"/>                        
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN UP</a>
                </div>
                <div className="text-center mt-4 fw-light">
                  Already have an account? <a href="login.html" className="text-primary">Login</a>
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
