import React, { useState } from "react";
import { BsDisplay } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import condition_icon from "../../images/contion_icon.svg";
import Mobile_icon from "../../images/Mobile_icon.svg";
import SettingSidebar from "./SettingSidebar";

const Settingform = ({
  darkmodes,
  setDarkmodes,
  jottoggled,
  setJottoggled,
}) => {
  const [show, setShow] = useState(false);
  console.log("jottoggledq", jottoggled);
  return (
    <>
      <SettingSidebar
        darkmodes={darkmodes}
        setDarkmodes={setDarkmodes}
        jottoggled={jottoggled}
        setJottoggled={setJottoggled}
      />

      {/*center content */}

      <div
        class={
          "container-fluid setting-form  " +
          (darkmodes ? "text-white body-dark " : "text-dark body-light ") +
          (jottoggled ? "" : "setting_form_ml")
        }
      >
        <div className="settingform-main">
          {" "}
          <div className="form-setting-div">
            {" "}
            <div>
              <div className="form-setting-icon">
                <FiSettings style={{ width: "25px", height: "auto" }} />
              </div>
            </div>
            <div className="form-setting-right-div">
              <h2 className="form-setting-h1">FORM SETTINGS</h2>
              <p className="form-setting-p">
                Change form status and properties.
              </p>
            </div>
          </div>
          <div
            className={
              "form-setting-main-div " +
              (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")
            }
          >
            <div class="row mainsetting-div">
              <div class="form-group col-md-12 mt-3">
                <h2 className="form-setting-title">Title</h2>
                <p className="form-setting-para">
                  Enter a short, descriptive name for this form.
                </p>

                <div>
                  <input className="form-setting-input" />
                </div>
              </div>
            </div>
            <hr />
            <div class="row mainsetting-div">
              <div class="form-group col-md-12 mt-3">
                <h2 className="form-setting-title">Form Status</h2>
                <p className="form-setting-para">
                  You can disable your form now, on a specific date, or when it
                  reaches a certain number of submissions.
                </p>

                <div>
                  <select className="form-setting-input" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            {!show ? (
              <button
                className="show-more-btn"
                onClick={() => {
                  setShow(true);
                }}
              >
                {" "}
                Show More Options{" "}
              </button>
            ) : (
              <div
                className={
                  "form-setting-main-div " +
                  (darkmodes
                    ? "text-white dash-chart-dark"
                    : "text-dark bg-white")
                }
              >
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                    <li>
                      <h2 className="form-setting-title">Form Warnings</h2>
                      <p className="form-setting-para">
                        Change the warning messages on your form.
                      </p>
                    </li>
                    <li>
                      <button className="btn btn-primary"> EDIT </button>
                    </li>
                  </div>
                </div>
                <hr />
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Form Language</h2>
                    <p className="form-setting-para">
                      Please select the language for your form.
                    </p>

                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">
                          Please select the current language of your form.
                        </option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                    <li>
                      <h2 className="form-setting-title">Translations</h2>
                      <p className="form-setting-para">
                        Make your form available in multiple languages.
                      </p>
                    </li>
                    <li>
                      <button className="btn btn-primary"> EDIT </button>
                    </li>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Password Protection</h2>
                    <p className="form-setting-para">
                      Set a password to limit access to your forms.
                    </p>
                    <label className="float-none d-flex align-items-start mt-4">
                      <input
                        type="checkbox"
                        // defaultChecked={checked}
                        // onChange={handleCheckbox}
                        className="mx-3"
                      />
                      <div>
                        <h6 className="fw-bold">Enable Password Protection</h6>
                      </div>
                    </label>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Encrypt Form Data</h2>
                    <p className="form-setting-para">
                      Encrypt your form responses to store sensitive data
                      securely.{" "}
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">No</option>
                        <option value="saab">Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                    <li>
                      <h2 className="form-setting-title">
                        Auto-Delete Form Submissions
                      </h2>
                      <p className="form-setting-para">
                        Delete form submissions after a certain period of time.
                      </p>
                    </li>
                    <li>
                      <button className="btn btn-primary"> ENABLE </button>
                    </li>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Continue Forms Later</h2>
                    <p className="form-setting-para">
                      Enable or disable autofill on your form.{" "}
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Enabled</option>
                        <option value="saab">Disabled</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Require SSO</h2>
                    <p className="form-setting-para">
                      Add Single Sign-On (SSO) login to fill out the form.
                    </p>
                    <label className="float-none d-flex align-items-start mt-4">
                      <input
                        type="checkbox"
                        // defaultChecked={checked}
                        // onChange={handleCheckbox}
                        className="mx-3"
                      />
                      <div>
                        <h6 className="fw-bold">
                          Users need to login to view and submit the form
                        </h6>
                      </div>
                    </label>
                    <label className="float-none d-flex align-items-start mt-4">
                      <input
                        type="checkbox"
                        // defaultChecked={checked}
                        // onChange={handleCheckbox}
                        className="mx-3"
                      />
                      <div>
                        <h6 className="fw-bold">
                          Users can save drafts and continue later
                        </h6>
                      </div>
                    </label>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Unique Submission</h2>
                    <p className="form-setting-para">
                      Use cookies (loose check) or IP address (strict check) to
                      prevent multiple form submissions.{" "}
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">No Check</option>
                        <option value="saab">Enabled</option>
                        <option value="saab">Disabled</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Unique Question</h2>
                    <p className="form-setting-para">
                      Do not allow previously entered values.{" "}
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">No Check</option>
                        <option value="saab">Email</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Form Accessibility</h2>
                    <p className="form-setting-para">
                      Check your form's accessibility.
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Disabled</option>
                        <option value="saab">Enabled</option>
                      </select>
                    </div>
                    <label className="float-none d-flex align-items-start mt-4">
                      <input
                        type="checkbox"
                        // defaultChecked={checked}
                        // onChange={handleCheckbox}
                        className="mx-3"
                      />
                      <div>
                        <h6 className="fw-bold">
                          Show the accessibility badge on the form.
                        </h6>
                      </div>
                    </label>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Page Title</h2>
                    <p className="form-setting-para">
                      Enter the title that will be used as HTML page title.
                    </p>
                    <div>
                      <input className="form-setting-input" />
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Send Post Data</h2>
                    <p className="form-setting-para">
                      Do you want to send HTTP POST data to the Thank-You page?
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">No</option>
                        <option value="saab">Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">
                      Clear Hidden Field Values
                    </h2>
                    <p className="form-setting-para">
                      Do you want to clear the values of fields hidden by
                      conditional logic?
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Clear on Submit</option>
                        <option value="saab">Clear on Being Hidden</option>
                        <option value="volvo">Don't Clear</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Highlight Effect</h2>
                    <p className="form-setting-para">
                      Enable or disable the yellow background highlight on input
                      fields.
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Enabled</option>
                        <option value="saab">Disabled</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Form Layout</h2>

                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">All questions on one page</option>
                        <option value="saab">Single question per page</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">
                      Show error navigation on forms
                    </h2>
                    <p className="form-setting-para">
                      Navigation between errors on form
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">No</option>
                        <option value="saab">Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">Prevent Cloning</h2>
                    <p className="form-setting-para">
                      Prevent other users from cloning this form.
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">No</option>
                        <option value="saab">Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mainsetting-div">
                  <div class="form-group col-md-12 mt-3">
                    <h2 className="form-setting-title">
                      Allow Browser AutoComplete
                    </h2>
                    <p className="form-setting-para">
                      Allow browsers to store and autocomplete form fields.
                    </p>
                    <div>
                      <select
                        className="form-setting-input"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">No</option>
                        <option value="saab">Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  className="show-more-btn"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  {" "}
                  Show Less{" "}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Settingform;
