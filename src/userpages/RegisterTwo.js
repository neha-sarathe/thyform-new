import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiChevronRight, FiCheck } from 'react-icons/fi'
// import register2 from '../public/images/auth/register-bg.png'
import Dark from "../DarkAuth";
const RegisterTwo = (props) => {

    const navigate = useNavigate();
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
    const [companynumber, setCompanyNumber] = useState(false)
    const [selectedData, setSelectedData] = useState('')
    const [directorSelect, setDirectorSelect] = useState('')
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false);
    const [businessError, setBusinessError] = useState(false);
    const [directorError, setDirectorError] = useState(false);
    const [checkError, setCheckError] = useState(false);
    const [websiteError, setWebsiteError] = useState(false);
    console.log('websiteError', websiteError);
    const [website, setWebsite] = useState(false);
    const [maxValue, setMaxValue] = useState(false);
    
    const companyHandle = (value) => {
        setCompanyNumber(value)
    }
    const handleRadio = (value) => {
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
        if (value.length <=6) {
            setTxt(value);
            setMaxValue(false)
        } else {
            setMaxValue('Please enter no more than 5 characters.')
        }

    }

    const onBusinessName = e => {
        const { value } = e.target;


        const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        if (value === "" || re.test(value)) {
            setTxtbn(value);
        }
    }

    const onEmployeesNo = e => {
        const { value } = e.target;


        const re = /^[0-9\b]+$/;
        if (value === "" || re.test(value)) {
            setTxtno(value);
        }
    }

    const onSpend = e => {
        const { value } = e.target;


        const re = /^[0-9\b]+$/;
        if (value === "" || re.test(value)) {
            setSpend(value);
        }
    }

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
    }

    const onEmployeesNoOther = e => {
        const { value } = e.target;


        const re = /^[0-9\b]+$/;
        if (value === "" || re.test(value)) {
            setTxtno2(value);
        }
    }

    const onSpendOther = e => {
        const { value } = e.target;


        const re = /^[0-9\b]+$/;
        if (value === "" || re.test(value)) {
            setSpend2(value);
        }
    }

    const onHouseNo = e => {
        const { value } = e.target;


        const re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        if (value === "" || re.test(value)) {
            setHouseNo(value);
        }
    }
    const [showResults, setShowResults] = useState(false)
    const ref = useRef(null);
    const handleClick = () => {
        if (txt && txt.length >= 3) {
            const query = txt;

            const ar = [{ link: "apple" },
            { link: "google" },
            { link: "microsoft" }]

            const result = ar.find(item => item.link.includes(query))
            // if (result)
            //     console.log(result.link)
            // else
            //     console.log('Query not found')

            ref.current.focus();
            setShowResults(false);
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
        { key: 'america', value: 'United States of America' },
        { key: 'unitedkingdom', value: 'United Kingdom' },
        { key: 'india', value: 'India' },
        { key: 'germany', value: 'Germany' },
        { key: 'argentina', value: 'Argentina' }
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

    const nextPage = () => {
        if (selectedData === '') {
            setBusinessError('Please select an industry from the dropdown. If your industry is not listed, select other')
        }else if (txt === '') {
            setError('Please enter the number of employees your business has using only numbers')
        }else if (websiteError === false) {
            setWebsiteError('Please select yes or no')
        } else {
            navigate('/login')
        }
        // if (checked === true && selectedData && directorSelect) {
        //   navigate('/login')
        // }else{
        //   setError()
        //   alert('plz check')
        // }

    }

    const handleorganisation = (value) => {
        console.log('value....', value);
        setWebsite(value)
        setWebsiteError(true)
    }

    const min = 1;
    const max = 100;
    const [value, setValue] = useState(1);
    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(value);
    };

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
                                        <div>
                                            <a className="navbar-brand brand-logo" href="/">
                                                <img src="../../images/Logo.png" alt="logo" />
                                            </a>

                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="heading-form dark-mode-text">Your business</h4>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Industry*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <select onChange={(event) => handleSelect(event.target.value)} className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                    ref={ref}
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
                                        </div>

                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Number of employees*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1 d-flex">
                                                <input
                                                    type="number"
                                                    placeholder="Registration Number"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={txt}
                                                    onChange={onInputChange}
                                                />
                                                 <p className="para-form show_result">{error}</p>
                                                <p className="para-form show_result">{maxValue}</p>
                                            </div>
                                            {txt.length ===5? <FiCheck className="text-success mt-1 display-5" />:''}
                                            
                                        </div>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Does your business have a website?*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <select
                                                    onChange={(event) => handleorganisation(event.target.value)}
                                                    className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                >Website address*
                                                    <option>Select</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                                <p className="para-form show_result">{websiteError}</p>
                                                
                                            </div>
                                        </div>
                                        {website === 'yes' ?
                        <div className="d-flex mt-4 align-items-center">
                          <div className=" lables-div w-25">
                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Website address*</label>
                          </div>
                          <div className="search-input-div search-input-div1">
                            <input
                              type="text"
                              className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                              onChange={onBusinessName}
                            />
                          </div>

                        </div>
                        : ''}
                         <hr />
                      <div className="mt-3 text-end d-flex align-items-center justify-content-between">
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
                                    </div>
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

export default RegisterTwo;
