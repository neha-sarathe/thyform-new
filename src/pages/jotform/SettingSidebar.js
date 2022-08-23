import React from "react";
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import condition_icon from '../../images/contion_icon.svg';
import Mobile_icon from '../../images/Mobile_icon.svg'
const SettingSidebar = () => {
    return (
        <>

            <main>
                <div class="page-wrapper chiller-theme toggled">
                    <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
                        <i class="fas fa-bars"></i>
                    </a>
                    <nav id="sidebarsetting" class="sidebar-wrapper2">
                        <div class="sidebar-content">
                            <div class="sidebar-brand">
                        
                                <div id="close-sidebar">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                            <div class="sidebar-menu">
                                <ul>
                                    <div className='quick list-sidebar-jotform py-3 '>
                                        <Link to="/settingform">
                                            <ul className='d-flex '>
                                                <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="44" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><path d="M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.2-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path></svg></li>
                                                <li className='share'>
                                                    <h6 className='text-white fw-semibold '>SETTING FORM</h6>
                                                    <p className='text-white font_r fw-7'>Form status and properties</p>
                                                </li>
                                            </ul>
                                        </Link>
                                    </div>
                                    <div className='quick list-sidebar-jotform py-3'>
                                        <Link to="/Setting_email">
                                            <ul className='d-flex '>
                                                <li className=''><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg></li>
                                                <li className='share'>
                                                    <h6 className='text-white fw-semibold '>EMAIL</h6>
                                                    <p className='text-white fw-7 font_r'>Reminders and  instant sharing.</p>
                                                </li>
                                            </ul>
                                        </Link>
                                    </div>
                                    <div className='quick list-sidebar-jotform py-3'>
                                        <Link to="/Condition">
                                            <ul className='d-flex '>
                                                <li className=''>
                                                    <img src={condition_icon} height="24px" alt="manual" />
                                                </li>
                                                <li className='share'>
                                                    <h6 className='text-white fw-semibold '>CONDITIONS</h6>
                                                    <p className='text-white fw-7 font_r'>Create conditional logic.</p>
                                                </li>
                                            </ul>
                                        </Link>
                                    </div>
                                    <div className='quick list-sidebar-jotform py-3 '>
                                        <Link to="/thankyoupage">
                                            <ul className='d-flex '>
                                                <li className=''>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path></svg>
                                                </li>
                                                <li className='share'>
                                                    <h6 className='text-white fw-semibold '>THANK YOU PAGE</h6>
                                                    <p className='text-white font_r fw-7'>Shown after form submit.</p>
                                                </li>
                                            </ul>
                                        </Link>
                                    </div>


                                    <div className='quick list-sidebar-jotform py-3'>
                                        <Link to="/mobilenotification">
                                            <ul className='d-flex '>
                                                <li className=''>
                                                    <img src={Mobile_icon} height="24px" alt="Mobile_icon" />
                                                </li>
                                                <li className='share'>
                                                    <h6 className='text-white fw-semibold '>MOBILE NOTIFICATION</h6>
                                                    <p className='text-white fw-7 font_r'>Customize your app notification</p>
                                                </li>
                                            </ul>
                                        </Link>
                                    </div>
                                    {/* <li>
                                        <a href="#">
                                            <i class="fa fa-folder"></i>
                                            <span>Examples</span>
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div class="sidebar-footer">
                            <a href="#">
                                <i class="fa fa-bell"></i>
                                <span class="badge badge-pill badge-warning notification">3</span>
                            </a>
                            <a href="#">
                                <i class="fa fa-envelope"></i>
                                <span class="badge badge-pill badge-success notification">7</span>
                            </a>
                            <a href="#">
                                <i class="fa fa-cog"></i>
                                <span class="badge-sonar"></span>
                            </a>
                            <a href="#">
                                <i class="fa fa-power-off"></i>
                            </a>
                        </div>
                    </nav>

                </div>
            </main>
        </>
    );
};
export default SettingSidebar;