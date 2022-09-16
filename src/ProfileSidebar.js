import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
export const ProfileSidebar = (props) => {
    console.log('props....', props);

    let page = ""
  const path = window.location.pathname
  page = path.split('/')
  console.log('path====',page[1])
    return (
        <>
            <nav className={'container m-0 profile_margin ' + (props
                && props.props.darkmodes ? "text-white body-dark" : "text-dark bg-white")}>
                <ul class="list-unstyled">
                    {/* <h4 className='side-head'>Profile Settings</h4> */}
                    <li>
                    <Link to="/myprofile">
                        <div className={'text-center p-2 '+ (page[1] === 'myprofile' ? 'list-sidebar-focus' : ' list-sidebarjotform')}>
                       <FiUser className='mb-1 me-2' />Edit Profile

</div></Link>
                    </li>

                </ul>
            </nav> 
        </>
    )
}
