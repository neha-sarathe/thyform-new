import React from 'react'
import Navbarallform from './Navbarallform';
import AllformNav from './AllformNav';
import { Link } from 'react-router-dom';
import { FiFilter } from "react-icons/fi";
import { InboxNavbar } from './InboxNavbar';
import { FaTrashAlt, FaTrashRestoreAlt, FaCheck } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Mobilenav from './Mobilenav';
export const Trash = ({ darkmodes, setDarkmodes }) => {

    let sidebaroption = ""
    const pathnames = window.location.pathname;
    sidebaroption = pathnames.split('/')
    console.log(sidebaroption[2], 'path......', window.location.pathname)

    return (
        <>
            <div className="wrapper">
                <AllformNav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
                <div className='full_width'>
                    <div id="content" className={darkmodes ? "text-white bg-dark" : "text-dark bg-light"}>
                        <Navbarallform />
                        <Mobilenav darkmodes={darkmodes} setDarkmodes={setDarkmodes}/>
                        <div className='border rounded maincontainer-inbox-navbar'>
                            {/* <h3 className='text-start'>Inbox</h3> */}

                            <InboxNavbar />
                            <div className='row'>
                                <div className='col-md-4'>
                                    <nav id="sidebars" className={darkmodes ? "text-white border-end sidebars-navbarall-form archive-navbar " : "text-dark border-end sidebars-navbarall-form archive-navbar "}>
                                    <div class="input-group">
                      <span class="input-group-prepend">
                        <div class="input-group-text bg-transparent border-right-0 inbox_search">
                          <i class="fa fa-search"></i>
                        </div>
                      </span>
                      <input class="form-control py-2 border-right-0 border form_padding search_col shadow-none" type="search" placeholder='Search' id="example-search-input" />
                      <span class="input-group-append">
                        <button class={"btn btn-outline-secondary border btn_height " +(darkmodes ? "text-white bg-dark" : "text-dark bg-light")} type="button">
                          Filter  <FiFilter />
                        </button>
                      </span>
                    </div>
                    <div className='mt-3'>
                      <FaCheck className='m-2' />
                      <FaTrashRestoreAlt className='m-2' data-toggle="tooltip" data-placement="top" title="Restore" />
                      <FaTrashAlt className='m-2' data-toggle="tooltip" data-placement="top" title="Delete Forever"/>
                      <BsThreeDotsVertical />
                      <button class="btn_down"><HiDownload/>Download</button>
                    </div>
                    <hr />
                                        <ul class="list-unstyled components">
                                            {/* <h4 className='side-head text-white'>MY FORMS</h4> */}
                                            <li>
                                                <Link to='' ><div className={'allform-list ' + (sidebaroption[2] === '' ? 'allform-list-focus1' : ' ') +(darkmodes ? "text-white bg-dark" : "text-dark bg-light")}>form 1</div></Link>


                                            </li>
                                            <li >
                                                <Link to='' ><div className={'allform-list ' + (sidebaroption[2] === ' ' ? 'allform-list-focus1' : ' ') +(darkmodes ? "text-white bg-dark" : "text-dark bg-light")}>form 2</div></Link>
                                            </li>


                                        </ul>
                                    </nav>
                                </div>
                                <div className='col-md-8'>
                                    <p className={darkmodes ? "text-white bg-dark" : "text-dark bg-light"}>
                                        YOU DON’T HAVE ANY DELETED SUBMISSIONS
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
