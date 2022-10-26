import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight } from 'react-icons/fi'
import Dark from "../DarkAuth";
import countryListAllIsoData from "./CountryList"
const RegisterFour = (props) => {

    const navigate = useNavigate();
    const [websiteError, setWebsiteError] = useState(false);
    const [website, setWebsite] = useState('');
    const [payment, setPayment] = useState('');
    const [paymentError, setPaymentError] = useState(false);
    const [connections, setConnections] = useState('');
    const [connectionsError, setConnectionsError] = useState(false);
    const [contracts, setContracts] = useState('');
    const [contractsError, setContractsError] = useState(false);
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

    const nextPage = () => {
        if (website === '') {
            setWebsiteError('Please select yes or no')
        }else if (connections === '') {
            setConnectionsError('Please select yes or no')
        }else if (contracts === '') {
            setContractsError('Please select yes or no')
        } else {
            navigate('/personaldetails')
        }

    }

    const handleorganisation = (value) => {
        setWebsite(value)
        setWebsiteError(false)
    }


    const handlePayments = (value) =>{
        console.log('value', value);
        setPayment(value)
        setPaymentError(false)
    }

    const handleConnections = (value) =>{
        setConnections(value)
        setConnectionsError(false)
    }
    const handleContracts = (value) =>{
        setContracts(value)
        setContractsError(false)
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
                                        <h4 className="heading-form dark-mode-text">Your business activity</h4>
                                        <div className="selectflex mt-4">
                                            <div className="w-100">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Does your business receive payments from outside the UK?*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1 pb-4">
                                            <select
                                                    onChange={(event) => handleorganisation(event.target.value)}
                                                    className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                >Website address*
                                                    <option>Select</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                                {website === 'yes'? <h6 className="para-form mt-2">This could be for goods & services or funding</h6>:''}
                                                <p className="para-form show_result">{websiteError}</p>
                                            </div>
                                        </div>
                                        {website === 'yes' ? 
                                         <div className="selectflex mt-4">
                                         <div className="w-100">
                                             <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Which countries do you receive payments from?*</label>
                                         </div>
                                         <div className="search-input-div div-search-inputs search-input-div1 pb-4">
                                             <select
                                                 onChange={(event) => handlePayments(event.target.value)}
                                                 className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                 id="exampleFormControlSelect2"
                                             >Website address*
                                                 <option value=''>select</option>
                                                 {countryListAllIsoData && countryListAllIsoData.map((option, index) => (
                              <option key={index} value={option.code}>
                                {option.name}
                              </option>
                            ))}
                                             </select>
                                             <p className="para-form show_result">{paymentError}</p>

                                         </div>
                                     </div>
                                     : ''
                                        }
                                       
                                        <div className="selectflex mt-4">
                                            <div className="w-100">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Do you or any people within your business have political connections?*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1 pb-4">
                                                <select
                                                    onChange={(event) => handleConnections(event.target.value)}
                                                    className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                >Website address*
                                                    <option>Select</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                                <p className="para-form show_result">{connectionsError}</p>

                                            </div>
                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="w-100">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Is your business involved in any public contracts? e.g. government, council or NHS*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1 pb-4">
                                                <select
                                                    onChange={(event) => handleContracts(event.target.value)}
                                                    className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                >Website address*
                                                    <option>Select</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                                <p className="para-form show_result">{contractsError}</p>

                                            </div>
                                        </div>
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

export default RegisterFour;
