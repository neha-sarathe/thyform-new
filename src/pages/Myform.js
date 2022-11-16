import React, { Component } from 'react'
import Navbarallform from './Navbarallform'
import AllformNav from './AllformNav'
import Mobilenav from './Mobilenav'
const Myform = ({ darkmodes, setDarkmodes }) => {
    return (
        <div className="wrapper wrapper-allform">
            <AllformNav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
            <Mobilenav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
            <div style={{ width: '100%' }}>
                <div id="content" className={darkmodes ? "text-white bg-dark" : "text-dark bg-light"}>
                    <Navbarallform />
                    <h1 className='text-center'>My Drafts</h1> </div></div></div>
    )
}
export default Myform;
