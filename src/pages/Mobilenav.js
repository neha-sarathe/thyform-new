import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FiChevronDown } from "react-icons/fi";
const Mobilenav = () => {
    const [actives1, setActives2] = useState(false);
    let page1 = ""
    const path1 = window.location.pathname
    page1 = path1.split('/')
    console.log(page1[2])
    const handleactive = () => {
        setActives2(!actives1)
    }
    console.log(actives1, 'acitvsdfsdjflsdf')
    return (
        <>


            <nav role="navigation" className="nav-allform-mobile">
                <div id="menuToggle-allform">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu-all-form all-form-ul" className="menu-all-form all-form-ul">
                        <li> <Link to='/allform/allform' className="all-form-anchor">All Forms</Link></li>
                        <li> <Link to='/allform/assignform' className="all-form-anchor">ASSIGNED FORMS</Link></li>
                        <li> <Link to='/allform/myform' className="all-form-anchor">My Drafts</Link></li>
                        <li><a href="#" className="all-form-anchor">Contact</a></li>
                    </ul>
                </div>
                <ul class="navform navbar-nav navbar-allform-nav ml-auto align-items-center right-nav">
                    <li class={"nav-item active  formlink " + (page1[1] === 'dashboard' ? "allform-list-focus1" : '')}>
                        <a href='/dashboard' class="nav-link-hover anchor_text_color ">analytics</a>
                    </li>
                    <li className={'nav-item  formlink ' + (page1[2] === 'inbox' ? 'allform-list-focus1' : '')}>
                        <Link className="nav-link-hover anchor_text_color" to='/allform/inbox'>Inbox</Link>
                    </li>
                    <li class="nav-item formlink">

                        <ul class="navform">

                            <li class="button-dropdown formlink remove_overlap">
                                <div class={"dropdown-toggle drop " + (actives1 ? "actives1" : '')} onClick={handleactive}>
                                    More <span><FiChevronDown /></span>
                                </div>
                                <div className={"more_option_style largest-list " + (actives1 ? "moreoption-open" : 'moreoption-close')}  >

                                    <ul className='p-0'>

                                        <li>
                                            <a href="/allform/formanalytics" className='drop'>Form Analytics</a>
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

            </nav>

        </>
    )
}

export default Mobilenav;