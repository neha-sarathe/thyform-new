import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight, FiCheck } from 'react-icons/fi'
import Dark from "../../DarkAuth";
// import Select from 'react-select';
import ToggleSwitch from "./Toggle";

const PaymentMode = (props) => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(props?.toggle);
    const [navigates, setNavigates] = useState(0);

    const onPriceSelect = (value) => {
        props.setPriceSelect(value)
        setToggle(value);
    }


    // const onPriceSelect = (value) => {
    //     props.setPriceSelect(value)
    //     console.log('Price....', value);
    // }
    console.log('Props value of toggle on paymentmode =', props.toggle);

    const nextPage = () => {
        if (!props.priceSelect) {
            console.log("please select one package option")
        }
        else {
            navigate('/register');
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
                                        <h4 className="heading-form dark-mode-text mb-3">Payment Packages</h4>
                                        <div className="float-end">
                                            {/* <ToggleSwitch values={['Monthly', 'Half-Yearly', 'Yearly']} selected={props.toggle} toggle={props.toggle} setToggle={props.setToggle} /> */}
                                            <ToggleSwitch values={['Monthly', 'Half-Yearly', 'Yearly']} selected={toggle} toggle={toggle} setToggle={setToggle} setPriceSelect={props.setPriceSelect} />
                                        </div>
                                        <div className="container-fluid p-0 mt-5 pt-3">
                                            <div className="row justify-content-center">
                                                <div className="col-4">
                                                    <div className={"card card_style card_center " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">Monthly</h5>
                                                            <div className="d-flex">
                                                                <p className="fs-1">$8 </p>
                                                                <p className="fs-6 mt-4">/</p>
                                                                <p className="fs-6 mt-4">month</p>
                                                            </div>
                                                            <p className="card-text">Manage all your teams’ work in one place</p>
                                                            <button type="button" className="btn btn-primary btn-sm margin_btn_sm" onClick={() => onPriceSelect('Monthly')}>Select</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className={"card card_style card_center " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">Half Yearly</h5>
                                                            <div className="d-flex">
                                                                <p className="fs-1">$10 </p>
                                                                {/* <p class="fs-4 mt-3">/6months</p> */}
                                                                <p className="fs-6 mt-4">/</p>
                                                                <p className="fs-6 mt-4">6-month</p>
                                                            </div>
                                                            <p className="card-text">Manage all your teams’ work in one place</p>
                                                            <button type="button" className="btn btn-primary btn-sm margin_btn_sm" onClick={() => onPriceSelect('Half-Yearly')}>Select</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className={"card card_style card_center " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">Yearly</h5>
                                                            <div className="d-flex">
                                                                <p className="fs-1">$16</p>
                                                                <p className="fs-6 mt-4">/</p>
                                                                <p className="fs-6 mt-4">year</p>
                                                            </div>
                                                            <p className="card-text">Manage all your teams’ work in one place</p>
                                                            <button type="button" className="btn btn-primary btn-sm margin_btn_sm" onClick={() => onPriceSelect('Yearly')}>Select</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="mt-3 text-end d-flex align-items-center justify-content-evenly">
                                            <p className="already-login">
                                                Already account please{" "}
                                                <Link to="/login" className="auth-link register-here register-here">
                                                    Login
                                                </Link>{" "}

                                            </p>
                                            <br />
                                            <button className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")} onClick={nextPage}>Next <FiChevronRight /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- content-wrapper ends --> */}
                </div >
                {/* <!-- page-body-wrapper ends --> */}
            </div >
        </>
    );
};

export default PaymentMode;
