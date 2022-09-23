import React from 'react';
import Navbarallform from '../pages/Navbarallform';
import Dark from '../DarkAuth';
export const NavFormAnalytics = ({darkmodes,setDarkmodes}) => {
  return (
 <>
    <Dark darkmodes={darkmodes} setDarkmodes={setDarkmodes}/>
  <div className='row margin_add'>
                            <div className="col-md-2 p-0">
                                <div className='allform-logo-div'>
                                    <a class="navbar-brand brand-logo" href="#">
                                        <img src="../../images/Logo.png" alt="logo" className='allform-logo' />
                                    </a>
                                </div>
                            </div>
                            <div className='col-md-10 p-0'>
                                <Navbarallform />
                            </div>
                        </div>
 </>
  )
}
