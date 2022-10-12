import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FaEuroSign } from "react-icons/fa";
import { FiChevronRight, FiCheck } from 'react-icons/fi'
// import register2 from '../public/images/auth/register-bg.png'
import Dark from "../DarkAuth";
const RegisterThree = (props) => {

    const navigate = useNavigate();
    const [txt, setTxt] = useState('');
    const [error, setError] = useState(false);
    const [maxValue, setMaxValue] = useState(false);

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
        if (value.length <= 11 && re.test(value)) {
            setTxt(value);
            setMaxValue(false)
        } else {
            setMaxValue('Please enter no more than 10 characters.')
        }
        setError(false)

    }

    const nextPage = () => {
        if (txt === '') {
            setError('Please provide an answer')
        } else {
            navigate('/registerfour')
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
                                <div className="register-half-div">
                                    <img src={process.env.PUBLIC_URL + "images/auth/register-bg.png"} className="register-half-img" alt="register-img"/>
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
                                        <h4 className="heading-form dark-mode-text">Your business income</h4>


                                        <div className="d-flex mt-4">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>What is your expected annual turnover?*</label>
                                            </div>
                                            {/* <div className="search-input-div search-input-div1"> */}
                                            <div className="input-group search-input-div">
                                                <span className="input-group-text euro_size" id="basic-addon1">£</span>
                                                <input
                                                    type="text"
                                                    className={"form-control search-input radius_sal input_height_register " + (props.darkmodes ? "text-white form-control-dark" : "text-dark")}
                                                    placeholder="" aria-label="Username"
                                                    aria-describedby="basic-addon1" value={txt} onChange={onInputChange} />
                                                {/* <input
                                                    type="text"
                                                    placeholder="Registration Number"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={txt}
                                                    onChange={onInputChange}
                                                /> */}
                                              
                                            </div>
                                            <p className="para-form show_result">{error}</p>
                                                <p className="para-form show_result">{maxValue}</p>
                                            {txt.length > 0 && txt.length <= 10 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                      
                                        <hr />
                                        <div className="mt-3 text-end d-flex align-items-center justify-content-around">
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

export default RegisterThree;
