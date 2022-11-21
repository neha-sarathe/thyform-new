import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FiChevronDown } from "react-icons/fi";
const JotformnavMob = () => {
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
                        <li> <Link to='/setting/setting' className="all-form-anchor ">FORM SETTINGS</Link></li>
                        <li> <Link to='/setting/settingemail' className="all-form-anchor">EMAIL</Link></li>
                        <li> <Link to='/setting/condition' className="all-form-anchor">CONDITIONS</Link></li>
                        <li> <Link to='/setting/thankyoupage' className="all-form-anchor">THANK YOU PAGE</Link></li>
                        <li> <Link to='/setting/mobilenotification' className="all-form-anchor">MOBILE NOTIFICATION</Link></li>
                    </ul>
                </div>
                <ul class="navform navbar-nav navbar-allform-nav ml-auto align-items-center right-nav">
                    <li class={"nav-item active  formlink " + (page1[1] === 'jotform' ? "allform-list-focus1" : '')}>
                        <a href='/jotform' class="nav-link-hover anchor_text_color ">BUILD</a>
                    </li>
                    <li className={'nav-item  formlink ' + (page1[2] === 'inbox' ? 'allform-list-focus1' : '')}>
                        <Link className="nav-link-hover anchor_text_color" to='/setting/setting'>SETTING</Link>
                    </li>
                    <li className={'nav-item  formlink ' + (page1[2] === 'inbox' ? 'allform-list-focus1' : '')}>
                        <Link className="nav-link-hover anchor_text_color" to='/publish/publish'>PUBLISH</Link>
                    </li>

                </ul>

            </nav>

        </>
    )
}

export default JotformnavMob;