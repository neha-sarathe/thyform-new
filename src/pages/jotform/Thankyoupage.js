import React, { useState } from 'react'
import { FiCheck } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";
import Navform from './Navform';
import SettingSidebar from './SettingSidebar';

const Thankyoupage = ({darkmodes,setDarkmodes,jottoggled,setJottoggled}) => {
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
        <SettingSidebar jottoggled={jottoggled} darkmodes={darkmodes} setJottoggled={setJottoggled}/>
      </div>
      <div class={"container setting-form setting_form_ml "+ (darkmodes ? "text-white body-dark" : "text-dark body-light")}>
        <div className="form-setting-div">
          {" "}
          <div>
            <div className="form-setting-icon1">
              <AiFillCheckCircle style={{ width: "25px", height: "auto" }} />
            </div>
          </div>

          <div className="form-setting-right-div">
            <h2 className="form-setting-h1">THANK YOU PAGE</h2>
            <p className="form-setting-p">Choose an Action After Submission:</p>
          </div>
        </div>
        <div className='row d-flex '><div className='col-6'><div className={'thankyou-radio '+ (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
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
            <span></span>Limited Company
          </label>

        </div></div><div className='col-6'><div className={'thankyou-radio '+ (darkmodes ? "text-white dash-chart-dark " : "text-dark bg-white ")}>
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
            <span></span>Sole Trader
          </label></div></div></div>
        <hr />
        <Navform placeholder={"Write something or insert a heart  ♥"} />

      </div>
    </>
  )
}
export default Thankyoupage;