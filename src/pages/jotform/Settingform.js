import React from "react";
import { FiSettings } from "react-icons/fi";
const Settingform = () => {
  return (
    <>
    
      <div class="container-fluid setting-form">
        <div className="form-setting-div">
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
        <div className="form-setting-main-div">
      
        <div class="row mainsetting-div">
          <div class="form-group col-md-12 mt-3">
            <h2 className="form-setting-title">Title</h2>
            <p className="form-setting-para">Enter a short, descriptive name for this form.</p>

            <div>
                <input className="form-setting-input"/>
            </div>
          </div>

        </div>
        <hr />
        <div class="row mainsetting-div">
          <div class="form-group col-md-12 mt-3">
            <h2 className="form-setting-title">Form Status</h2>
            <p className="form-setting-para">You can disable your form now, on a specific date, or when it reaches a certain number of submissions.</p>

            <div>
            <select  className="form-setting-input" name="cars" id="cars">
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
    </>
  );
};
export default Settingform;
