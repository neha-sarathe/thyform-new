import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight } from 'react-icons/fi'
import Dark from "../../DarkAuth";

const PayProcedure = (props) => {

    const navigate = useNavigate();
    const [cardno, setCardno] = useState('');
    const [cardError, setCardError] = useState(false);
    /*validations */
    const onCardNo = e => {
        const { value } = e.target;
    
    
        const re = /^[0-9\b]+$/;
        if (value === "" || re.test(value)) {
          setCardno(value);
        }
        setCardError(false)
      }
    const nextPage = () => {
        if (cardno === '') {
            setCardError('Please Enter valid Card Number.')
          }
         else {
        navigate('/login')
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
                                        <h4 className="heading-form dark-mode-text">Payment Procedure</h4>
                                        <img src="..\..\images\payment\visa.png" width={"6%"} height={"3%"} alt="visa" />
                                        <img src="..\..\images\payment\master.png" width={"6%"} height={"3%"} alt="visa" />
                                        <img src="..\..\images\payment\debit.jpg" width={"6%"} height={"3%"} alt="visa" />
                                        <img src="..\..\images\payment\credit2.png" width={"6%"} height={"3%"} alt="visa" />
                                        <img src="..\..\images\payment\american.png" width={"6%"} height={"3%"} alt="visa" />
                                        <form>
                                            <div class="row mt-4">
                                                <div class="search-input-div input_wid col-md-12">
                                                    <label for="inputAddress">Card Number</label>
                                                    <input type="tel" class={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} id="number" placeholder="Card Number" 
                                                    value={cardno}
                                                  onChange={onCardNo} />
                                                   <p className="para-form show_result">{cardError}</p>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <label>Expiration</label>
                                                    <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="MM/YY" />
                                                </div>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <label>Security Code</label>
                                                    <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Security Code" />
                                                    {/* {error && <h2 style={{ color: 'red' }}>{error}</h2>} */}
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <label>First Name</label>
                                                    <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="First Name" />
                                                </div>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <label>Surname</label>
                                                    <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Surname" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <label>Company Name</label>
                                                    <input type="text" class={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Company Name" />
                                                </div>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <label>Address</label>
                                                    <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Search Location" />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <label>City</label>
                                                    <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="City" />
                                                </div>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <label>Post Code</label>
                                                    <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Post Code" />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <label>Country</label>
                                                    <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Country" />
                                                </div>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <label>VAT Number</label>
                                                    <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="VAT Number" />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <p>Basic Plan 5 Seats</p>
                                                    
                                                    <p> Yearly Plan 18% savings</p>
                                                </div>
                                                <div class="search-input-div col-md-6 pt-4">
                                                   <p>($40*12 Months) $480</p>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div class="search-input-div col-md-6 pt-4">
                                                    <p>Total</p>
                                                </div>
                                                <div class="search-input-div col-md-6 pt-4">
                                                <p>$480</p>
                                                </div>
                                            </div>
                                            {/* <div className='pt-4'>
                                                <button type="submit" class="btn btn-primary">Payment</button>
                                            </div> */}
                                        </form>
                                        <hr />
                                        <div className="mt-3 text-end d-flex align-items-center justify-content-around">
                                            <p className="already-login">
                                                Already account please{" "}
                                                <Link to="/login" className="auth-link register-here register-here">
                                                    Login
                                                </Link>{" "}

                                            </p>
                                            <button className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")} onClick={nextPage}>Payment <FiChevronRight /></button>
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

export default PayProcedure;
