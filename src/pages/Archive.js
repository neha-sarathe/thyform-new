import React from 'react'
import Navbarallform from './Navbarallform';
import AllformNav from './AllformNav';
import { Link } from 'react-router-dom';
import { FiFilter } from "react-icons/fi";
import { InboxNavbar } from './InboxNavbar';
import { FaTrashAlt, FaCheck } from "react-icons/fa";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Mobilenav from './Mobilenav';
export const Archive = ({ darkmodes, setDarkmodes }) => {

    let sidebaroption = ""
    const pathnames = window.location.pathname;
    sidebaroption = pathnames.split('/')
    console.log(sidebaroption[2], 'path......', window.location.pathname)

    return (
        <>
            <div className="wrapper">
            {/* <Mobilenav darkmodes={darkmodes} setDarkmodes={setDarkmodes}/> */}
                <AllformNav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
                <div className='full_width'>
                    <div id="content" className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>
                        <Navbarallform />
                        <Mobilenav darkmodes={darkmodes} setDarkmodes={setDarkmodes}/>
                        <div className='border rounded maincontainer-inbox-navbar'>
                            {/* <h3 className='text-start'>Inbox</h3> */}

                            <InboxNavbar />
                            <div className='row'>
                                <div className='col-md-12 col-lg-4'>
                                    <nav id="sidebars" className={darkmodes ? "sidebars-inbox text-white border-end sidebars-navbarall-form archive-navbar" : "sidebars-inbox text-dark border-end sidebars-navbarall-form archive-navbar"}>
                                    <div class="input-group">
                      <span class="input-group-prepend">
                        <div class="input-group-text bg-transparent border-right-0 inbox_search">
                          <i class="fa fa-search"></i>
                        </div>
                      </span>
                      <input class="form-control py-2 border-right-0 border form_padding search_col" type="search" placeholder='Search' id="example-search-input" />
                      <span class="input-group-append">
                        <button class="btn btn-outline-secondary border-left-0 border btn_height" type="button">
                          Filter  <FiFilter />
                        </button>
                      </span>
                    </div>
                    <div className='mt-3'>
                      <FaCheck className='m-2' />
                      <RiInboxUnarchiveFill className='m-2' data-toggle="tooltip" data-placement="top" title="Move to Inbox"/>
                      <FaTrashAlt className='m-2' data-toggle="tooltip" data-placement="top" title="Move to Trash" />
                      <BsThreeDotsVertical />
                      <button class="btn_down"><HiDownload/>Download</button>
                    </div>
                    <hr />
                                        <ul class="list-unstyled components">
                                            {/* <h4 className='side-head text-white'>MY FORMS</h4> */}
                                            <li>
                                                <Link to='' ><div className={'allform-list link_color ' + (sidebaroption[2] === '' ? 'allform-list-focus1' : ' ')}>Archive 1</div></Link>


                                            </li>
                                            <li >
                                                <Link to='' ><div className={'allform-list link_color ' + (sidebaroption[2] === ' ' ? 'allform-list-focus1' : ' ')}>Archive 2</div></Link>
                                            </li>


                                            <li >
                                                <Link to='' ><div className={'allform-list link_color ' + (sidebaroption[2] === " " ? "allform-list-focus1" : ' ')}>Archive 3</div></Link>
                                            </li>


                                        </ul>
                                    </nav>
                                </div>
                                <div className='col-md-8'>
                                    <p className='link_color content-allform-data'>
                                        YOU DON’T HAVE ANY ARCHIVED SUBMISSIONS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
