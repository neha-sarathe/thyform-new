import React, { useEffect, useState, useCallback } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { Phone } from './jotform/Phone';
import $ from 'jquery'
import Dark from '../DarkAuth';
export const JotformNav = ({ checked, setChecked, darkmodes, setDarkmodes, setJottoggled }) => {
  const [buildactive, setBuildActive] = useState(true);
  const [publishactive, setPublishactive] = useState(false);
  const [settingactive, setSettingactive] = useState(false);
  let navigate = useNavigate();
  // const routeChange = () =>{ 
  //   let path = '/phone'; 
  //   navigate(path);
  // }
  // const [checkbtn, setCheckBtn] = useState(false);
  // console.log(checked, 'checkbtn')
  // useEffect(()=>{
  //   $("#switch").bootstrapSwitch({
  //     state: true, //setting switch current state/value
  //     onSwitchChange: function(e, state) { 
  //       console.log(state,'llllllllllllllllllllllllll');
  //     }
  // });
  // },[])
  const handleChange = (e) => {
    const { checked } = e.target
    setChecked(checked)

  }

  let page = ""
  const path = window.location.pathname
  page = path.split('/')

  localStorage.setItem('switch', checked)

  return (
    <>
      <Dark darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
      <div className='row jotlist justify-content-between text-dark jotlist-light'>
        <div className='col-md-1 col-sm-1 col-xs-1 col-lg-1 ps-0 d-flex'>

          <a class="navbar-brand brand-logo ms-3 mt-2" href="/dashboard">
            <i className='fa fa-arrow-left text-white'></i>
          </a>
        </div>
        <div className='col-md-4 col-sm-5 col-xs-5 col-lg-5 pl-0 pe-0'>

          <div className='d-flex justify-content-center'>
            <NavLink to='/jotform' className={'jotlink-a ' + (page[1] === 'jotform' ? 'jotlinkfocus' : '')}  ><li className='jot-link jot-link-tab'>BUILD</li></NavLink>
            <NavLink to='/setting/setting' className={'jotlink-a ' + (page[1] === 'setting' ? 'jotlinkfocus' : '')} ><li className='jot-link jot-link-tab' >SETTING</li></NavLink>
            <NavLink to='/publish/publish' className={'jotlink-a ' + (page[1] === 'publish' ? 'jotlinkfocus' : '')} ><li className='jot-link jot-link-tab'>PUBLISH</li></NavLink>
          </div>
        </div>
        <div className='col-md-7 col-sm-5 col-xs-5 col-lg-5'>
          <div className='preview-div-switch preview-div-switch-tab '><p className='Preview d-flex pt-2 preview-para-tab'><span className='preview-position prev-position-tab'>Preview Form</span>
            <div class="form-switch preview-toggle-tab" style={{ fontSize: "18px" }}>
              <input class="form-check-input switch" type="checkbox" role="switch" onChange={e => handleChange(e)}
                defaultChecked={checked} />
            </div>
          </p></div>
        </div>
      </div>
      {/* // : <Phone /> */}
      {/* <ul className='jotlist'> */}

      {/* </ul> */}


    </>
  )
}
export default JotformNav