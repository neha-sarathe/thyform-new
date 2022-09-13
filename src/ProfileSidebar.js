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
            <nav id="sidebars" className={'container profile_margin ' + (props
                && props.props.darkmodes ? "text-white body-dark" : "text-dark bg-white")}>
                <ul class="list-unstyled components">
                    {/* <h4 className='side-head'>Profile Settings</h4> */}
                    <li>
                        <div className={(page[1] === 'myprofile' ? 'list-sidebar-focus' : ' list-sidebarjotform')}>
                        <Link to="/myprofile"><FiUser className='mb-1' />Edit Profile</Link>

</div>
                    </li>

                </ul>
            </nav>
        </>
    )
}
