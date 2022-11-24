import React,{useRef,useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import SettingSidebar from '../pages/jotform/SettingSidebar'
import { FaStarOfLife } from "react-icons/fa";
import SelectBox from '../userpages/SelectBox';
const Enablefield = ({ darkmodes, setDarkmodes, jottoggled, setJottoggled }) => {
    const navigate = useNavigate();
    const ref = useRef();

    const [enablefield, setEnablefield] = useState('')
    const handleSelect = (value) => {
      console.log('value......', value);
      setEnablefield(value)
  }
  const select_data1 = [
    {label: 'america', value: 'Example 1' },
    {label: 'unitedkingdom', value: 'Example 2' },
    {label: 'india', value: 'Example 3' },
    {label: 'germany', value: 'Example 4' },
    {label: 'argentina', value: 'Example 5' }
  ]
    return (
        <>
            <SettingSidebar darkmodes={darkmodes} setDarkmodes={setDarkmodes} jottoggled={jottoggled} setJottoggled={setJottoggled} />
            <main className={"page-content " + (darkmodes ? "text-white bg-dark condition-height" : "text-dark bg-light condition-height")}>
                <div className="container ">
                    <div className="row felx align-items-center justify-content-center mr-top">
                        <div className="col-sm-2 col-md-8 col-lg-8 col-xl-8 condition_margin_adjust condition_margin_mob">

                            <button className="back-btn-in mt-4 " onClick={() => {
                                navigate("/setting/condition")
                            }}>   <i className='fa fa-arrow-left text-white'></i>
                            </button>

                            <div className='main_w'>
                                <div className=' underline d-flex align-items-center '>

                                    <li className='shown px-2 rounded-1 mt-4 py-2'>
                                        <FaStarOfLife />
                                    </li>

                                    <li className='fs-6 text-black mt-5 pb-2 map'>
                                        <h5 className={'heading_5 remider fw-bold .showhover ' + (darkmodes ? "text-white" : "text-dark ")}>ENABLE / REQUIRE FIELD</h5>
                                        <p className={'paragraph ' + (darkmodes ? "text-white" : "text-dark ")}>Require, Disable or Set Content Mask on a field.</p>
                                    </li>
                                </div>
                            </div>
                            <div className={"condition-div " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                                <div class="row mainsetting-div">
                                    <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                                        <li>
                                            <h2 className="condition-title mt-2">IF</h2>

                                        </li>
                                        <li className='width_show_field'>

                                        <SelectBox  darkmodes={darkmodes} handleorganisation={handleSelect} website={enablefield} options={select_data1} input1={ref} isDisabled={true}/>

                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className={"condition-div " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                                <div class="row mainsetting-div">
                                    <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                                        <li>
                                            <h2 className="condition-title mt-2">STATE</h2>

                                        </li>
                                        <li className='show_field_adjust'>
                                        <SelectBox  darkmodes={darkmodes} handleorganisation={handleSelect} website={enablefield} options={select_data1} input1={ref} isDisabled={true}/>

                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className={"condition-div " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                                <div class="row mainsetting-div">
                                    <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                                        <li>
                                            <h2 className="condition-title mt-2">VALUE</h2>

                                        </li>
                                        <li className='show_field_adjust'>
                                        <SelectBox  darkmodes={darkmodes} handleorganisation={handleSelect} website={enablefield} options={select_data1} input1={ref} isDisabled={true}/>

                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className={"condition-div mt-2 " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                                <div class="row mainsetting-div">
                                    <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                                        <li>
                                            <h2 className="condition-title mt-2">DO</h2>

                                        </li>
                                        <li className='show_field_do'>
                                        <SelectBox  darkmodes={darkmodes} handleorganisation={handleSelect} website={enablefield} options={select_data1} input1={ref} isDisabled={true}/>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className={"condition-div " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                                <div class="row mainsetting-div">
                                    <div class="form-group col-md-12 mt-3 d-flex justify-content-between">
                                        <li>
                                            <h2 className="condition-title mt-2">FIELD</h2>

                                        </li>
                                        <li className='show_field_option'>
                                        <SelectBox  darkmodes={darkmodes} handleorganisation={handleSelect} website={enablefield} options={select_data1} input1={ref} isDisabled={true}/>
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

export default Enablefield