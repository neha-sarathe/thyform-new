import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import SettingSidebar from '../pages/jotform/SettingSidebar'
import { FaStarOfLife } from "react-icons/fa";

const Skippage = ({ darkmodes, setDarkmodes, jottoggled, setJottoggled }) => {
    const navigate = useNavigate();

  return (
    <>
    <SettingSidebar darkmodes={darkmodes} setDarkmodes={setDarkmodes} jottoggled={jottoggled} setJottoggled={setJottoggled} />
    <main className={"page-content " + (darkmodes ? "text-white body-dark condition-height" : "text-dark body-light condition-height")}>
      <div className="container ">
        <div className="row felx align-items-center justify-content-center">
          <div className="col_6 condition_margin_adjust">
            
          <button className="show-more-btn mb-4 " onClick={() => {
                  navigate("/setting/condition")
                }}>   <i className='fa fa-arrow-left text-white'></i>
                </button>

            <div className='main_w'>
              <div className=' underline d-flex align-items-center '>

                <li className='shown px-2 rounded-1 mt-4 py-2'>
                <FaStarOfLife />
                </li>

                <li className='fs-6 text-black mt-5 pb-2 map'>
                  <h5 className={'remider fw-bold .showhover ' + (darkmodes ? "text-white" : "text-dark ")}>SKIP TO A PAGE</h5>
                  <p className={'paragraph ' + (darkmodes ? "text-white" : "text-dark ")}>Allow users to jump to a part of your form according to their choices.</p>
                </li>
              </div>
            </div>
            <div className={"condition-div " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
              <div class="row mainsetting-div">
                <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                  <li>
                    <h2 className="form-setting-title mt-2">IF</h2>

                  </li>
                  <li className='width_show_field'>

                    <select className="condition-first-input" name="cars" id="cars">
                      <option value="volvo">Please select a field</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>

                  </li>
                </div>
              </div>
            </div>
            <div className={"condition-div " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
              <div class="row mainsetting-div">
                <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                  <li>
                    <h2 className="form-setting-title mt-2">STATE</h2>

                  </li>
                  <li className='width_show_field'>

                    <select className="condition-first-input" name="cars" id="cars">
                      <option value="volvo">Please select a field</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>

                  </li>
                </div>
              </div>
            </div>
            <div className={"condition-div " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
              <div class="row mainsetting-div">
                <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                  <li>
                    <h2 className="form-setting-title mt-2">VALUE</h2>

                  </li>
                  <li className='width_show_field'>

                    <select className="condition-first-input" name="cars" id="cars">
                      <option value="volvo">Please select a field</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>

                  </li>
                </div>
              </div>
            </div>
            <div className={"condition-div mt-2 " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
              <div class="row mainsetting-div">
                <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                  <li>
                    <h2 className="form-setting-title mt-2">DO</h2>

                  </li>
                  <li className='width_show_field'>

                    <select className="condition-sec-input" name="cars" id="cars">
                      <option value="volvo">Please select condition action</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>

                  </li>
                </div>
              </div>
            </div>
            <div className={"condition-div " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
              <div class="row mainsetting-div">
                <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                  <li>
                    <h2 className="form-setting-title mt-2">PAGE</h2>

                  </li>
                  <li className='width_show_field'>

                    <select className="condition-first-input" name="cars" id="cars">
                      <option value="volvo">Please select a field</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>

                  </li>
                </div>
              </div>
            </div>
            <button className="show-more-btn mb-4 mt-2 float-right">
                Save
                </button>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default Skippage