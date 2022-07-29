import React from 'react'
import { Link } from 'react-router-dom'
export const JotformNav = () => {
  return (
    <>

      {/* <ul className='jotlist'> */}
      <div className='row jotlist'>
        <div className='col-md-1 col-sm-1 col-xs-1 col-lg-1'>
          <a class="navbar-brand brand-logo" href="/dashboard">
            <i className='fa fa-arrow-left text-white'></i>
          </a>
        </div>
        <div className='col-md-10 col-sm-10 col-xs-10 col-lg-10'>

          <div className='d-flex justify-content-center'>
            <a href='/jotform'><li className='jot-link'>BUILD</li></a>
            <a href='/setting'><li className='jot-link' >SETTING</li></a>
            <a href='/publish'><li className='jot-link'>PUBLISH</li></a>
          </div>
        </div>
        <div className='col-md-1 col-sm-1 col-xs-1 col-lg-1'>
          <p className='Preview d-flex pt-2'>Preview Form
            <div class="form-switch" style={{ fontSize: "18px" }}>
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            </div>
          </p>
        </div>
      </div>
      {/* </ul> */}


    </>
  )
}
export default JotformNav