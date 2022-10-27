import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import PublishSidebar from './PublishSidebar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navform from './Navform';
import DatePicker from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";


const Email = ({ darkmodes, setDarkmodes }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    // $("#close-sidebar").click(function () {
    //   $(".page-wrapper").removeClass("toggled");
    // });
    // $("#show-sidebar").click(function () {
    //   $(".page-wrapper").addClass("toggled");
    // });

  }, [])

  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <PublishSidebar darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
      <main>
        <div className="page-wrapper chiller-theme toggled ">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i className="fas fa-bars"></i>
          </a>

          <main className={"page-content " + (darkmodes ? "text-white body-dark" : "text-dark body-light")}>

            {/* <Thankyoupage /> */}
            {/* main container */}
            <div className="container ml_contain">
              <div className="row felx align-items-center justify-content-center">
                {/* main div start */}

                {!show && !show2 ? (
                  <>
                    <div className="col_6 mt-5">
                      {/* <div className='d-flex justify-content-between pt-2 mt-5 big_div '>
                        <div>
                          <ul className='d-flex align-items-center pt-3'>
                            <li className=' class_i  fw-bold fs-4'>
                              !
                            </li>
                            <li className='fs-7 text-white font_comb'>
                              Please sign up to publish your form.
                            </li>
                          </ul>
                        </div>
                        <div className=' p-3 pt-2'>
                          <button className='rounded px-2  border-white' >
                            <p className='text-black fw-bold pt-1'>Sign Up Now -  <span className='text-black fw-light'>its free!</span></p>
                          </button>
                        </div>
                      </div> */}
                      {/* Direct link div start */}
                      <div className='main_w'>
                        <div className=' underline d-flex align-items-center '>
                          <li className='bg-secondary py- px-2 mt-4  text-white fw-bold fs-4 rounded'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg>
                          </li>
                          <li className='fs-6 text-black mt-5 pb-2 map'>
                            <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")} >EMAIL FORM</h5>
                            <p className='paragraph '>Share your form through email.</p>
                          </li>
                        </div>
                      </div>
                      {/* direct link div end */}
                      {/* form div start*/}

                      <form className={' shadow-sm  rounded-1 p-3 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div className='main_w'>
                              <button className="border border-white bg-white" type="button" onClick={() => {
                                setShow(true)
                              }}>
                                <div className=' underline d-flex align-items-center '>
                                  <li className='bg-success px-1   text-white fw-bold fs-4  mb-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg>
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>SHARE ON EMAIL</h5>
                                    <p className='paragraph '>Share a direct link to  your form via email.</p>
                                  </li>
                                </div>
                              </button>
                            </div>
                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#bdb3b8" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M229.7,109.7l-48,48A8.3,8.3,0,0,1,176,160a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,168,152V112a87.9,87.9,0,0,0-85.2,66,8.1,8.1,0,0,1-7.8,6l-2-.3a8,8,0,0,1-5.7-9.7A103.9,103.9,0,0,1,168,96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l48,48A8.1,8.1,0,0,1,229.7,109.7ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z"></path></svg>
                                </li>

                              </ul>
                            </div>
                          </div>

                        </fieldset>
                      </form>
                      <form className={'shadow-sm  rounded-1 p-3 mt-3 ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                        <fieldset>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div className='main_w'>
                              <button className="border border-white bg-white" type="button" onClick={() => {
                                setShow2(true)
                              }}>
                                <div className=' underline d-flex align-items-center '>
                                  <li className='bg-success px-1   text-white fw-bold fs-4  mb-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M208,32H48A16,16,0,0,0,32,48V159.9h0V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V168H76.7L96,187.3a15.9,15.9,0,0,0,11.3,4.7h41.4a15.9,15.9,0,0,0,11.3-4.7L179.3,168H208v40Z"></path></svg>
                                  </li>
                                  <li className='fs-6 text-black map'>
                                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark ")}>SCHEDULE A REMINDER EMAIL</h5>
                                    <p className='paragraph '>Send periodic emails to remind people to fill out your form.</p>
                                  </li>
                                </div>
                              </button>
                            </div>
                            <div>
                              <ul className='d-flex align-items-center justify-content-center'>
                                <li>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#bdb3b8" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M229.7,109.7l-48,48A8.3,8.3,0,0,1,176,160a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,168,152V112a87.9,87.9,0,0,0-85.2,66,8.1,8.1,0,0,1-7.8,6l-2-.3a8,8,0,0,1-5.7-9.7A103.9,103.9,0,0,1,168,96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l48,48A8.1,8.1,0,0,1,229.7,109.7ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z"></path></svg>

                                </li>
                              </ul>
                            </div>
                          </div>

                        </fieldset>
                      </form>
                      <div className='bg-black ' height="1px"></div>
                    </div>
                  </>

                ) : show ? (
                  <>
                    <div className='col_6 mt-5'>
                      <button className="show-more-btn mb-4 " onClick={() => {
                        setShow(false)
                      }}>   <i className='fa fa-arrow-left text-white'></i>
                      </button>
                      <div className={"accordion-item standard p-3" + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>

                        <Tabs
                          defaultActiveKey="email"
                          id="fill-tab-example"
                          fill
                          className={"mb-3 " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")}
                        >
                          <Tab eventKey="email" title="EMAIL" >

                            <div class="row mainsetting-div">
                              <div class="form-group col-md-12 mt-3">
                                <h2 className="form-setting-title">Email Subject*</h2>
                                <div>
                                  <input type="text" className="form-setting-input" />
                                </div>
                              </div>
                            </div>
                            <div class="row mainsetting-div">
                              <div class="form-group col-md-12 mt-3">
                                <h2 className="form-setting-title">Email Content*</h2>
                              </div>
                            </div>
                            <Navform placeholder={"Write something or insert a heart  ♥"} />

                            <button className="notify-btn mb-4 mt-5 float-right">
                              SAVE
                            </button>
                          </Tab>

                          <Tab eventKey="recipient" title="RECIPIENTS">
                            <div class="row mainsetting-div">
                              <div class="form-group col-md-12 mt-3">
                                <h2 className="form-setting-title">Sender Name</h2>
                                <div>
                                  <input type="text" className="form-setting-input" />
                                </div>
                              </div>
                            </div>
                            <div class="row mainsetting-div">
                              <div class="form-group col-md-12 mt-3">
                                <h2 className="form-setting-title">Reply-to Email*</h2>
                                <div>
                                  <input type="text" className="form-setting-input" />
                                </div>
                              </div>
                            </div>
                            <div class="row mainsetting-div">
                              <div class="form-group col-md-12 mt-3">
                                <h2 className="form-setting-title">To*</h2>
                                <div>
                                  <input type="text" className="form-setting-input" />
                                </div>
                              </div>
                            </div>

                            <button className="notify-btn mb-4 mt-5 float-right">
                              SAVE
                            </button>
                          </Tab>

                        </Tabs>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='col_6 mt-5'>
                      <button className="show-more-btn mb-4 " onClick={() => {
                        setShow2(false)
                      }}>   <i className='fa fa-arrow-left text-white'></i>
                      </button>
                      <div className={"accordion-item standard p-3" + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>

                        <Tabs
                          defaultActiveKey="email"
                          id="fill-tab-example"
                          fill
                          className={"mb-3 " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")}
                        >
                          <Tab eventKey="email" title="EMAIL" >

                            <div class="row mainsetting-div">
                              <div class="form-group col-md-12 mt-3">
                                <h2 className="form-setting-title">Email Subject*</h2>
                                <div>
                                  <input type="text" className="form-setting-input" />
                                </div>
                              </div>
                            </div>
                            <div class="row mainsetting-div">
                              <div class="form-group col-md-12 mt-3">
                                <h2 className="form-setting-title">Email Content*</h2>
                              </div>
                            </div>
                            <Navform placeholder={"Write something or insert a heart  ♥"} />

                            <button className="notify-btn mb-4 mt-5 float-right">
                              SAVE
                            </button>
                          </Tab>

                          <Tab eventKey="recipient" title="RECIPIENTS">
                            <div class="row mainsetting-div">
                              <div class="form-group col-md-12 mt-3">
                                <h2 className="form-setting-title">Sender Name</h2>
                                <div>
                                  <input type="text" className="form-setting-input" />
                                </div>
                              </div>
                            </div>
                            <div class="row mainsetting-div">
                              <div class="form-group col-md-12 mt-3">
                                <h2 className="form-setting-title">Reply-to Email*</h2>
                                <div>
                                  <input type="text" className="form-setting-input" />
                                </div>
                              </div>
                            </div>
                            <div class="row mainsetting-div">
                              <div class="form-group col-md-12 mt-3">
                                <h2 className="form-setting-title">To*</h2>
                                <div>
                                  <input type="text" className="form-setting-input" />
                                </div>
                              </div>
                            </div>

                            <button className="notify-btn mb-4 mt-5 float-right">
                              SAVE
                            </button>
                          </Tab>

                          <Tab eventKey="schedule" title="SCHEDULE">
                            <div class="form-group col-md-12 mt-3">
                              <h2 className="form-setting-title">Repeats</h2>
                            </div>
                            <Tabs
                              defaultActiveKey="daily"
                              id="fill-tab-example"
                              fill
                              className={"mb-3 " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")}
                            >
                              <Tab eventKey="daily" title="Daily">
                                <div class="row mainsetting-div">
                                  <div class="form-group col-md-12 mt-3">
                                    <h2 className="form-setting-title">Send Date</h2>
                                    <div>
                                      <select class="form-select date-width" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <hr />
                              </Tab>
                              <Tab eventKey="weekly" title="Weekly">
                                <div class="row mainsetting-div">
                                  <div class="form-group col-md-12 mt-3">
                                    <h2 className="form-setting-title">Send Date</h2>
                                    <div>
                                      <select class="form-select date-width" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <hr />
                              </Tab>
                              <Tab eventKey="monthly" title="Monthly">
                                <div class="row mainsetting-div">
                                  <div class="form-group col-md-12 mt-3">
                                    <h2 className="form-setting-title">Send Date</h2>
                                    <div>
                                      <select class="form-select date-width" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <hr />
                              </Tab>
                            </Tabs>

                            <div class="row mainsetting-div">

                              <div class="form-group col-md-6 mt-3">
                                <h2 className="form-setting-title">Send Time</h2>
                                <div>
                                  <select class="form-select time-select-width" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                              </div>

                              <div class="form-group col-md-6 mt-3">
                                <h2 className="form-setting-title">Timezone</h2>
                                <div>
                                  <select class="form-select time-select-width" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="row mainsetting-div">
                              <div class="form-group col-md-6 mt-3">
                                <h2 className="form-setting-title">Start Date</h2>
                                <DatePicker
                                  renderCustomHeader={({
                                    date,
                                    changeYear,
                                    changeMonth,
                                    decreaseMonth,
                                    increaseMonth,
                                    prevMonthButtonDisabled,
                                    nextMonthButtonDisabled,
                                  }) => (
                                    <div
                                      style={{
                                        margin: 10,
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                        {"<"}
                                      </button>
                                      <select
                                        value={getYear(date)}
                                        onChange={({ target: { value } }) => changeYear(value)}
                                      >
                                        {years.map((option) => (
                                          <option key={option} value={option}>
                                            {option}
                                          </option>
                                        ))}
                                      </select>

                                      <select
                                        value={months[getMonth(date)]}
                                        onChange={({ target: { value } }) =>
                                          changeMonth(months.indexOf(value))
                                        }
                                      >
                                        {months.map((option) => (
                                          <option key={option} value={option}>
                                            {option}
                                          </option>
                                        ))}
                                      </select>

                                      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                        {">"}
                                      </button>
                                    </div>
                                  )}
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <h2 className="form-setting-title">End Date</h2>
                                <DatePicker
                                  renderCustomHeader={({
                                    date,
                                    changeYear,
                                    changeMonth,
                                    decreaseMonth,
                                    increaseMonth,
                                    prevMonthButtonDisabled,
                                    nextMonthButtonDisabled,
                                  }) => (
                                    <div
                                      style={{
                                        margin: 10,
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                        {"<"}
                                      </button>
                                      <select
                                        value={getYear(date)}
                                        onChange={({ target: { value } }) => changeYear(value)}
                                      >
                                        {years.map((option) => (
                                          <option key={option} value={option}>
                                            {option}
                                          </option>
                                        ))}
                                      </select>

                                      <select
                                        value={months[getMonth(date)]}
                                        onChange={({ target: { value } }) =>
                                          changeMonth(months.indexOf(value))
                                        }
                                      >
                                        {months.map((option) => (
                                          <option key={option} value={option}>
                                            {option}
                                          </option>
                                        ))}
                                      </select>

                                      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                        {">"}
                                      </button>
                                    </div>
                                  )}
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                              </div>
                            </div>
                            <button className="notify-btn mb-4 mt-5 float-right">
                              SAVE
                            </button>
                          </Tab>

                        </Tabs>
                      </div>
                    </div>
                  </>
                )}

                {/* main div end */}
                <div className="col-3">
                </div>
                <div className="col-3">
                </div>


              </div>
            </div>
          </main>

        </div>
        <div>

        </div>
      </main>


    </>
  )
}
export default Email;