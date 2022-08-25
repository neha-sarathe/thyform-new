import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Phone } from './jotform/Phone';
import $ from 'jquery'
import Dark from '../DarkAuth';
export const JotformNav = ({checked,setChecked,darkmodes,setDarkmodes,setJottoggled}) => {
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

  console.log(checked, 'checked5')

    localStorage.setItem('switch', checked)

  return (
    <>
<Dark darkmodes={darkmodes} setDarkmodes={setDarkmodes}/>
      <div className={'row jotlist justify-content-around '+ (darkmodes ? "text-white dash-chart-dark" : "text-dark jotlist-light")}>
        <div className='col-md-1 col-sm-1 col-xs-1 col-lg-1 mt-3'>
          <a class="navbar-brand brand-logo" href="/dashboard">
            <i className='fa fa-arrow-left text-white'></i>
          </a> 
        </div>
        <div className='col-md-10 col-sm-10 col-xs-10 col-lg-10'>

          <div className='d-flex justify-content-center'>
            <Link  to='/jotform' className='jotlink-a'><li className='jot-link'>BUILD</li></Link>
            <Link  to='/setting' className='jotlink-a'><li className='jot-link' >SETTING</li></Link>
            <Link  to='/publish' className='jotlink-a'><li className='jot-link'>PUBLISH</li></Link>
          </div>
        </div>
        <div className='col-md-1 col-sm-1 col-xs-1 col-lg-1'>
          <p className='Preview d-flex pt-2'>Preview Form
            <div class="form-switch" style={{ fontSize: "18px" }}>
              <input class="form-check-input switch" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={e => handleChange(e)}
                defaultChecked={checked} />
            </div>
          </p>
        </div>
      </div>
      {/* // : <Phone /> */}
      {/* <ul className='jotlist'> */}

      {/* </ul> */}


    </>
  )
}
export default JotformNav