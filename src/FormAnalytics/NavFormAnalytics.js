import React from 'react';
import Navbarallform from '../pages/Navbarallform';
import Dark from '../DarkAuth';
export const NavFormAnalytics = ({darkmodes,setDarkmodes}) => {
  return (
 <>
    <Dark darkmodes={darkmodes} setDarkmodes={setDarkmodes}/>
  <div className='row margin_add navformAnalytics-nav'>
                            <div className="col-md-3 col-lg-3 col-xl-2">
                                <div className='allform-logo-div'>
                                    <a class="navbar-brand brand-logo" href="#">
                                        <img src="../../images/Logo.png" alt="logo" className='allform-logo' />
                                    </a>
                                </div>
                            </div>
                            <div className='col-md-9  col-lg-9 col-xl-10 p-0'>
                                <Navbarallform />
                            </div>
                        </div>
 </>
  )
}
