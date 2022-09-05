import React from "react";
import { FiSettings } from "react-icons/fi";
import condition_icon from '../../images/contion_icon.svg';
import Mobile_icon from '../../images/Mobile_icon.svg'
import SettingSidebar from "./SettingSidebar";

const Settingform = ({darkmodes,setDarkmodes,jottoggled, setJottoggled}) => {
  console.log("jottoggledq", jottoggled)
  return (
    <>

      <SettingSidebar darkmodes={darkmodes} setDarkmodes={setDarkmodes} jottoggled={jottoggled} setJottoggled={setJottoggled}/>

      {/*center content */}

      <div class={"container-fluid setting-form  "+ (darkmodes ? "text-white body-dark " : "text-dark body-light ") +(jottoggled ? "" : "setting_form_ml") }>
     <div className="settingform-main">   <div className="form-setting-div">
          {" "}
          <div>
            <div className="form-setting-icon">
              <FiSettings style={{ width: "25px", height: "auto" }} />
            </div>
          </div>
          <div className="form-setting-right-div">
            <h2 className="form-setting-h1">FORM SETTINGS</h2>
            <p className="form-setting-p">Change form status and properties.</p>
          </div>
        </div>
        <div className={"form-setting-main-div " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>

          <div class="row mainsetting-div">
            <div class="form-group col-md-12 mt-3">
              <h2 className="form-setting-title">Title</h2>
              <p className="form-setting-para">Enter a short, descriptive name for this form.</p>

              <div>
                <input className="form-setting-input" />
              </div>
            </div>

          </div>
          <hr />
          <div class="row mainsetting-div">
            <div class="form-group col-md-12 mt-3">
              <h2 className="form-setting-title">Form Status</h2>
              <p className="form-setting-para">You can disable your form now, on a specific date, or when it reaches a certain number of submissions.</p>

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
          <button className="show-more-btn">Show More Options</button>
        </div>
</div>
      </div>
    </>
  );
};
export default Settingform;
