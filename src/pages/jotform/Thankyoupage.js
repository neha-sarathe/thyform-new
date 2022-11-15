import React, { useState } from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
// import Navform from './Navform';
import SettingSidebar from './SettingSidebar';
import Editor from './Editor';

const Thankyoupage = ({ darkmodes, setDarkmodes, jottoggled, setJottoggled }) => {
  const [radio, setRadio] = useState("Limited");
  const [show, setShow] = useState(false);
  const [text, setText] = useState(true)
  const handleRadio = (value) => {
    console.log(value, "value");
    setRadio(value);
  };
  return (
    <>
      <div>
        <SettingSidebar jottoggled={jottoggled} darkmodes={darkmodes} setJottoggled={setJottoggled} />
      </div>
      <div className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>
        <div className={"container setting-form setting_form_ml  " + (darkmodes ? "setting_ml-form" : "setting_ml-form")}>
          <div>
            <div className="form-setting-div">
              {" "}
              <div>
                <div className="form-setting-icon1">
                  <AiFillCheckCircle style={{ width: "25px", height: "auto" }} />
                </div>
              </div>

              <div className="thankyou-div">
                <h2 className="form-setting-h1">THANK YOU PAGE</h2>
                <p className="form-setting-p">Choose an Action After Submission:</p>
              </div>
            </div>
            <div className='row d-flex '>
              <div className='col-6'><div className={'thankyou-radio ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                <input
                  id="individual"
                  checked={radio === "Limited"}
                  type="radio"
                  name="business"
                  value="Limited"
                  onClick={() => {
                    handleRadio("Limited");
                  }}
                />
                <label for="individual">
                  <span></span>Show a Thank You Page after Submission
                </label>

              </div>
              </div>
              <div className='col-6'>
                <div className={'thankyou-radio ' + (darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white ")}>
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
                  <label for="organization" >
                    <span></span>Redirect to an external link after submission
                  </label>
                </div>
              </div>
            </div>
            <hr />
            {radio === "Limited" ? (
              <>
                {/* <Navform placeholder={"Write something or insert a heart  ♥"} /> */}
              
                <Editor/>
              
              </>
            ) : (
              <>
                <div className={"accordion-item standard p-3 " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                  <div class="row mainsetting-div">
                    <div class="form-group col-md-12 mt-3">
                      <h2 className="form-setting-title">Enter URL</h2>
                      <div>
                        <input type="text" className={"form-setting-input " + (darkmodes ? "text-white body-dark" : "text-dark body-light")} />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
            }
          </div>
        </div>

      </div>
    </>
  )
}
export default Thankyoupage;