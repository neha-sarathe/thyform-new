import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight, FiCheck } from 'react-icons/fi'
import Dark from "../DarkAuth";
const RegisterTwo = (props) => {

    const navigate = useNavigate();
    const [txt, setTxt] = useState('');
    const [selectedData, setSelectedData] = useState('')
    const [error, setError] = useState(false);
    const [businessError, setBusinessError] = useState(false);
    const [websiteError, setWebsiteError] = useState(false);
    const [website, setWebsite] = useState(false);
    const [maxValue, setMaxValue] = useState(false);
    const [message, setMessage] = useState('');
    const [websiteaddError, setWebsiteaddError] = useState(false);
    const [websiteUrl, setWebsiteUrl] = useState(false);

    useEffect(() => {

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
        const re = /^[0-9\b]+$/;
        if (value === "" || value.length <= 5 && re.test(value)) {
            setTxt(value);
            setMaxValue(false)
        } else {
            setMaxValue('Please enter no more than 5 characters.')
        }
        setError(false)

    }
    const ref = useRef(null);
    let A = [{
        name: 'alpha',
        name: 'beta',
    }
    ]

    for (let item of A) {
        item.status = false;

    }
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

    const nextPage = () => {
        let pattern = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;
        
        const re = /^(info)?@+[0-9A-Za-z.]{5,}?.com$/
        // var re = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
        const resp = re.test(message);
        console.log('res000000000000', resp);
        console.log(message, 'jfklsdjflksjdlkfjsldf', 'resresres', resp, website, 'flsdjklfjsldkfjlksdjkflkds')
        if (selectedData === '') {
            setBusinessError('Please select an industry from the dropdown. If your industry is not listed, select other')
        } else if (txt === '') {
            setError('Please enter the number of employees your business has using only numbers')
        } else if (websiteError === false) {
            setWebsiteError('Please select yes or no')
        } else if(website === 'no') {
            setWebsiteUrl(true)
            navigate('/registerthree')
        }else if (!website === 'yes' || !website === 'no' || !resp) {
            setWebsiteaddError('Enter Website Address')
        } else if (!resp) {
            setWebsiteaddError("Please Enter Website Address")
        } else if (resp == null) {
            setWebsiteUrl('Please Enter a Valid Website Address')
        } else{
            setWebsiteUrl(true)
            navigate('/registerthree')
        }
    }

    const handleorganisation = (value) => {
        setWebsite(value)
        setWebsiteError(true)
    }

    const handleChange = e => {
        setMessage(e.target.value);



    };
    const [selectcheck, setSelectcheck] = useState(false)
    const handlecheck = () => {
        setSelectcheck(true)
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
                                        <div>
                                            <a className="navbar-brand brand-logo" href="/">
                                                <img src="../../images/Logo.png" alt="logo" />
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        {/* <p className="text-end para_col">
                                       You have selected {props.priceSelect} package
                                    </p> */}
                                        <h4 className="heading-form dark-mode-text">Your business</h4>
                                        <div className="mt-4 selectflex">
                                            <div className="w-100">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Industry*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <select onChange={(event) => handleSelect(event.target.value)} className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                    ref={ref}
                                                    value={selectedData}
                                                >
                                                    <option value=''>select</option>
                                                    {select_data.map((option, index) => (
                                                        <option className="option-background" key={index} value={option.value}>
                                                            {option.value}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="para-form show_result">{businessError}</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 selectflex">
                                            <div className="w-100">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Number of employees*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <input
                                                    type="text"
                                                    placeholder="Number of employees"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={txt}
                                                    onChange={onInputChange}
                                                />
                                                <p className="para-form show_result">{error}</p>
                                                <p className="para-form show_result">{maxValue}</p>
                                            </div>
                                            {txt.length === 5 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className=" mt-4 selectflex">
                                            <div className="w-100">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Does your business have a website?*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
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
                                            <div className=" mt-4 selectflex">
                                                <div className="w-100">
                                                    <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Website address*</label>
                                                </div>
                                                <div className="search-input-div div-search-inputs search-input-div1">
                                                    <input
                                                        type="text"
                                                        className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                        value={message}
                                                        onChange={handleChange}
                                                        placeholder="info@xxxxxx.com"
                                                    />
                                                    <p className="para-form show_result">{websiteaddError}</p>
                                                </div>
                                                {websiteUrl === true ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                            </div>
                                            : ''}
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
