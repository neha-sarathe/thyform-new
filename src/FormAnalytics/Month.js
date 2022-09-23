import React from 'react';
import { NavFormAnalytics } from './NavFormAnalytics';
import { OptionNavbar } from './OptionNavbar';

export const Month = ({ darkmodes, setDarkmodes }) => {
    let pageactive = ""
    const pathnames = window.location.pathname;
    pageactive = pathnames.split('/')
    console.log(pageactive[2], 'path......', window.location.pathname)

    let active = ""
    const path = window.location.pathname;
    pageactive = path.split('/')
    console.log(active[2], 'path=>', window.location.pathname)

    return (
        <>
            <div className="wrapper">
                {/* <AllformNav darkmodes={darkmodes} setDarkmodes={setDarkmodes} /> */}

                <div id="content" className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>

                    <NavFormAnalytics darkmodes={darkmodes} setDarkmodes={setDarkmodes}/>

                    <div className='border rounded p-4 m-4'>
                        <OptionNavbar />
                        <div className='row'>
                            <div className='col-md-12 m-5 p-5 text-center'>
                                <p>No data available for current time range</p>
                            </div>
                        </div>
                        <div class="container-fluid  ps-1">
                            <ul class="nav nav-tabs py-5 border-top border-bottom mb-5">
                                <li class={"nav-item active ps-3 formlink item_space" + (pageactive[2] === '' ? "allform-list-focus1" : '')}>
                                    <a href='#' class="nav-link-hover text-center link_color"> <p className="h1"> 6 </p> Views</a>
                                </li>
                                <li class={"nav-item formlink item_space" + (pageactive[2] === '' ? "allform-list-focus1" : '')}>
                                    <a href="#" class="nav-link-hover  text-center link_color"> <p className="h1"> 4 </p> Responses</a>
                                </li>
                                <li class={"nav-item formlink item_space" + (pageactive[2] === '' ? "allform-list-focus1" : '')}>
                                    <a href="#" class="nav-link-hover  text-center link_color"> <p className="h1"> 64% </p> Conversion Rate</a>
                                </li>
                                <li class={"nav-item formlink item_space" + (pageactive[2] === '' ? "allform-list-focus1" : '')}>
                                    <a href="#" class="nav-link-hover  text-center link_color"> <p className="h1"> 00:00 </p> Avg. Time</a>
                                </li>
                            </ul>
                        </div>

                        <nav className={"navbar navbar-expand-lg all-navbar navbar-light bg-light pt-0 pb-0 " + (darkmodes ? "text-dark trans_background border-bottom  " : "text-dark trans_background border-bottom ")}>
                <div class="container-fluid  ps-1">
                    <ul class="nav nav-tabs">
                        <li class={"nav-item active ps-3 formlink " + (active[2] === '' ? "allform-list-focus1" : '')}>
                            <a href='' class="nav_item_hover link_color ">TRAFFIC</a>
                        </li>
                        <li class={"nav-item formlink " + (active[2] === '' ? "allform-list-focus1" : '')}>
                            <a href="" class="nav_item_hover link_color">DEVICE</a>
                        </li>
                        <li class={"nav-item formlink " + (active[2] === '' ? "allform-list-focus1" : '')}>
                            <a href="" class="nav_item_hover link_color">PLATFORM</a>
                        </li>
                        <li class={"nav-item formlink " + (active[2] === '' ? "allform-list-focus1" : '')}>
                            <a href="" class="nav_item_hover link_color">LOCATION</a>
                        </li>
                    </ul>
                </div>
            </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
