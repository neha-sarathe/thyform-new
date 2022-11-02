import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import SettingSidebar from '../pages/jotform/SettingSidebar'

const Showfield = ({ darkmodes, setDarkmodes, jottoggled, setJottoggled }) => {
  const navigate = useNavigate();
  return (
    <>
      <SettingSidebar darkmodes={darkmodes} setDarkmodes={setDarkmodes} jottoggled={jottoggled} setJottoggled={setJottoggled} />
      <main className={"page-content " + (darkmodes ? "text-white body-dark condition-height" : "text-dark body-light condition-height")}>
        <div className="container ">
          <div className="row flex align-items-center justify-content-center mr-top">
            <div className="col_6 condition_margin_adjust">
              
            <button className="show-more-btn mt-4 " onClick={() => {
                    navigate("/setting/condition")
                  }}>   <i className='fa fa-arrow-left text-white'></i>
                  </button>

              <div className='main_w'>
                <div className=' underline d-flex align-items-center '>

                  <li className='shown px-2 rounded-1 mt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='mt-2 mb-2' width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>
                  </li>

                  <li className='fs-6 text-black mt-5 pb-2 map'>
                    <h5 className={'remider fw-bold .showhover ' + (darkmodes ? "text-white" : "text-dark ")}>SHOW / HIDE FIELD</h5>
                    <p className={'paragraph ' + (darkmodes ? "text-white" : "text-dark ")}>Change visibility of field(s) depending on `IF` State conditions.</p>
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

                      <select className={"condition-first-input "+(darkmodes ? "select_dark  " : "text-dark body-light ")} name="cars" id="cars">
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
                    <li className='show_field_adjust'>

                      <select className={"condition-first-input "+(darkmodes ? "select_dark" : "text-dark body-light")} name="cars" id="cars">
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
                    <li className='show_field_adjust'>

                      <select className={"condition-first-input "+(darkmodes ? "select_dark" : "text-dark body-light")} name="cars" id="cars">
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
                    <li className='show_field_do'>

                      <select className={"condition-first-input "+(darkmodes ? "select_dark  " : "text-dark body-light ")} name="cars" id="cars">
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
                      <h2 className="form-setting-title mt-2">FIELD</h2>

                    </li>
                    <li className='show_field_option'>

                      <select className={"condition-first-input "+(darkmodes ? "select_dark  " : "text-dark body-light ")} name="cars" id="cars">
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

export default Showfield