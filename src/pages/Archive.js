import React from 'react'
import Navbarallform from './Navbarallform';
import AllformNav from './AllformNav';
import { Link } from 'react-router-dom';
import { FiFilter } from "react-icons/fi";
import { InboxNavbar } from './InboxNavbar';

export const Archive = ({ darkmodes, setDarkmodes }) => {

    let sidebaroption = ""
    const pathnames = window.location.pathname;
    sidebaroption = pathnames.split('/')
    console.log(sidebaroption[2], 'path......', window.location.pathname)

    return (
        <>
            <div className="wrapper">
                <AllformNav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
                <div className='full_width'>
                    <div id="content" className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>
                        <Navbarallform />
                        <div className='border rounded p-4 m-4'>
                            {/* <h3 className='text-start'>Inbox</h3> */}

                            <InboxNavbar />
                            <div className='row'>
  <div className='col-md-4'>
                            <nav id="sidebars" className={darkmodes ? "text-white border-end" : "text-dark border-end"}>
                                <div class="input-group">
                                    <button class="btn btn-outline-secondary border-left-0 border btn_height" type="button">
                                        <i class="fa fa-search"></i>
                                    </button>
                                    <input class="form-control py-2 border-right-0 border form_padding search_col" type="search" placeholder='Search' id="example-search-input" />
                                    <span class="input-group-append">
                                        <button class="btn btn-outline-secondary border-left-0 border btn_height" type="button">
                                            <FiFilter />
                                        </button>
                                    </span>
                                </div>
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
  <p className='link_color'>
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
