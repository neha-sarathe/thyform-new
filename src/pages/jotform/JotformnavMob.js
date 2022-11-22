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
    const [pathName, setPathName]=useState('');
    const handleClick=()=>{
    setPathName('setting')
    }
    const handleClick2=()=>{
        setPathName('publish')
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
                    { pathName === 'setting' ?  
                    <>
                        <ul id="menu-all-form all-form-ul" className="menu-all-form all-form-ul">
                            <li> <Link to='/setting/setting' className="all-form-anchor ">FORM SETTINGS</Link></li>
                            <li> <Link to='/setting/settingemail' className="all-form-anchor">EMAIL</Link></li>
                            <li> <Link to='/setting/condition' className="all-form-anchor">CONDITIONS</Link></li>
                            <li> <Link to='/setting/thankyoupage' className="all-form-anchor">THANK YOU PAGE</Link></li>
                            <li> <Link to='/setting/mobilenotification' className="all-form-anchor">MOBILE NOTIFICATION</Link></li>
                        </ul>
                    </> : 
                    <>
                     <ul id="menu-all-form all-form-ul" className="menu-all-form all-form-ul">
                        <li> <Link to='/publish/publish' className="all-form-anchor ">QUICK SHARE</Link></li>
                        <li> <Link to='/publish/Assign' className="all-form-anchor">ASSIGN FORM</Link></li>
                        <li> <Link to='/publish/Email' className="all-form-anchor">EMAIL</Link></li>
                        <li> <Link to='/publish/Pdf' className="all-form-anchor">PDF</Link></li>
                    </ul>
                    </>
}

                </div>
                <ul class="navform navbar-nav navbar-allform-nav ml-auto align-items-center right-nav">
                    <li class={"nav-item active  formlink " + (page1[1] === 'jotform' ? "allform-list-focus1" : '')}>
                        <a href='/jotform' class="nav-link-hover anchor_text_color ">BUILD</a>
                    </li>
                    <li className={'nav-item  formlink ' + (page1[2] === 'setting' ? 'allform-list-focus1' : '')}>
                     <button onClick={handleClick}>  
                      <Link className="nav-link-hover anchor_text_color" to='/setting/setting'>SETTING</Link>
                     </button>
                    </li>
                    <li className={'nav-item  formlink ' + (page1[2] === 'publish' ? 'allform-list-focus1' : '')}>
                      <button onClick={handleClick2}> 
                         <Link className="nav-link-hover anchor_text_color" to='/publish/publish'>PUBLISH</Link>
                      </button>
                    </li>

                </ul>

            </nav>

        </>
    )
}

export default JotformnavMob;