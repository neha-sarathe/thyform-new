import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight, FiCheck } from 'react-icons/fi'
import Dark from "../../DarkAuth";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Select from 'react-select';

const UserForm = (props) => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [confirm, setConfirm] = useState('');
    const [confirmError, setConfirmError] = useState(false);

    const [pinNumber, setPinNumber] = useState('');
    const [pinNumberError, setPinNumberError] = useState(false);

    const [pin, setPin] = useState('');
    const [pinError, setPinError] = useState(false);

    const [noMatchError, setNoMatchError] = useState('');
    const [noPinMatch, setNoPinMatch] = useState('');

    // const [hide, setHide] = useState(true)
    // const [hide2, setHide2] = useState(true)

    // const hideSwitch = e => {
    //     setHide(!hide)
    // }
    // const hideSwitch2 = ob => {
    //     setHide2(!hide)
    // }

    /*validations */
    const onInputChange = e => {
        const { value } = e.target;
        // const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        // if (value === "" || re.test(value)) {
        setName(value)
        setError(false)
        // }
    }
    const onPassword = e => {
        const { value } = e.target;
        setPassword(value)
        setPasswordError(false)
    }


    const onConfirm = e => {
        // const { value } = e.target;
        if (e.target.value != password) {
            setNoMatchError("Not Match")
        }
        else {
            setConfirm(e.target.value)
            setNoMatchError('')
        }
        setConfirmError(false)
    }

    const onPinNumber = e => {
        const { value } = e.target;
        const re = /^[0-9\b]+$/;
        if (value === "" || value.length < 11 && re.test(value)) {
            setPinNumber(value)
            setPinNumberError(false)
        }
        setPinNumberError(false)
    }
    const onPin = e => {
        if (e.target.value != pinNumber) {
            setNoPinMatch("Not Match")
        }
        else {
            setPin(e.target.value)
            setNoPinMatch('')
        }
        setPinError(false)
    }
    const nextPage = () => {
        const regex = /^(?=.*[0-9]{3,3})(?=.*[!@#$%^&*]{5,5})[a-zA-Z0-9!@#$%^&*]{20,20}$/;
const condition = regex.test(password);
console.log(condition,'conditionsss12364566')
        if (name === '') {
            setError('Please Enter Username')
        } else if (password === '') {
            setPasswordError('Please enter Password')
        } 
        else if (!regex.test(password)) {
            setPasswordError('validation')
        } 
        else if (confirm === '') {
            setConfirmError('Please enter Confirm Password')
        } else if (pinNumber.length < 6) {
            setPinNumberError('Please enter Pin Number')
        } else if (pin === '') {
            setPinError('Please enter Confirm Pin Number')
        }
        else {
            navigate('/payprocedure')
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
                                        <h4 className="heading-form setpassword-heading dark-mode-text">Set Password and Pin</h4>

                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>User Name*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={name}
                                                    onChange={onInputChange}
                                                />
                                                <p className="para-form show_result">{error}</p>
                                            </div>

                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Password*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">

                                                <input
                                                    // type={hide ? 'password' : 'input'}
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={password}
                                                    onChange={onPassword}
                                                    maxLength={20}
                                                />
                                                {/* <span className="password_icon" onClick={hideSwitch}>{hide ? <FiEyeOff /> : <FiEye />}</span> */}

                                                <p className="para-form show_result">{passwordError}</p>
                                            </div>

                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Confirm Password*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <div >
                                                    <input
                                                        // type={hide2 ? 'password' : 'input'}
                                                        type="password"
                                                        onChange={onConfirm}
                                                        // value={confirm}
                                                        maxLength={20}
                                                        placeholder="Enter your confirm password"
                                                        className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    />
                                                    {/* <span className="confirm_icon" onClick={hideSwitch2}>{hide2 ? <FiEyeOff /> : <FiEye />}</span> */}
                                                </div>
                                                <p className="para-form show_result">{confirmError}</p>
                                                <p className="para-form show_result">{noMatchError}</p>
                                            </div>

                                        </div>

                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Pin*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <input
                                                    type="text"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={pinNumber}
                                                    onChange={onPinNumber}
                                                    placeholder="Enter your pin number"
                                                />
                                                {pinNumber === '0' ? <h6 className="mt-2">This can be a mobile number. Please enter numbers only. Spaces are not allowed.</h6> : ''}
                                                <p className="para-form show_result">{pinNumberError}</p>
                                            </div>
                                            {pinNumber.length === 11 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Confirm Pin*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <input
                                                    type="text"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    // value={pin}
                                                    onChange={onPin}
                                                    placeholder="Enter your confirm pin number"
                                                />

                                                <p className="para-form show_result">{pinError}</p>
                                                <p className="para-form show_result">{noPinMatch}</p>
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

export default UserForm;
