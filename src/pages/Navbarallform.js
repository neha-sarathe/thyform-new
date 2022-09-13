import PropTypes from 'prop-types'
import React, { Component ,useState} from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";
const Navbarallform = ({darkmodes,setDarkmodes}) => {
    const [actives1,setActives2] = useState(false);
    let page1 = ""
  const path1 = window.location.pathname
  page1 = path1.split('/')
  console.log(page1[2])
    const handleactive = ()=>{
        setActives2(!actives1)
    }
    console.log(actives1,'acitvsdfsdjflsdf')
    return (
        <>
            <nav className={"navbar navbar-expand-lg all-navbar navbar-light bg-light pt-0 pb-0 " + (darkmodes ? "text-dark bg-primary border-bottom  " : "text-dark bg-primary border-bottom ")}>
                <div class="container-fluid  ps-1 container-home-header ">
                    <ul class="navform navbar-nav ml-auto align-items-center right-nav">
                        <li class={"nav-item active ps-3 formlink "+ (page1[1] === 'dashboard' ? "allform-list-focus1" : '')}>
                            <a href='/dashboard' class="nav-link-hover anchor_text_color ">analytics</a>
                        </li>
                        <li className={'nav-item ps-3 formlink '+ (page1[2] === 'inbox' ? 'allform-list-focus1' : '')}>
                            <Link className="nav-link-hover anchor_text_color" to='/allform/inbox'>Inbox</Link>
                        </li>
                        <li class="nav-item ps-3 formlink">

                            <ul class="navform">

                                <li class="button-dropdown formlink">
                                    <div class={"dropdown-toggle drop "+ (actives1 ? "actives1" : '' )} onClick={handleactive}>
                                        More <span><FiChevronDown /></span>
                                    </div>
                                    <div className={"more-dropdownmenu largest-list "+ (actives1 ? "moreoption-open" : 'moreoption-close' )}  >

                                        <ul>

                                            <li>
                                                <a href="#" className='drop'>Form Analytics</a>
                                            </li>

                                            <li>
                                                <a href="#" className='drop'>Create PDF Document</a>
                                            </li>

                                        </ul>

                                    </div>


                                </li>


                            </ul>
                        </li>

                    </ul>

                </div>
            </nav></>
    )
}
export default Navbarallform;
