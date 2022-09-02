import React, { Component } from 'react'
import Navbarallform from './Navbarallform'
import AllformNav from './AllformNav'
const Assignform = ({darkmodes,setDarkmodes})=> {
        return (
            <div className="wrapper">
                 <AllformNav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
            <div style={{ width: '100%' }}>
                <div id="content" className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>
                    <Navbarallform />
                    Assign Form</div></div></div>
        )
    }
export default Assignform;
