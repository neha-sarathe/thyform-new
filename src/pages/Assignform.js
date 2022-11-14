import React, { Component } from 'react'
import Navbarallform from './Navbarallform'
import AllformNav from './AllformNav'
import Mobilenav from './Mobilenav'
const Assignform = ({ darkmodes, setDarkmodes }) => {
    return (
        <div className="wrapper wrapper-allform wrapper-allform-assingform">
            <AllformNav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
            <Mobilenav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
            <div style={{ width: '100%' }}>
                <div id="content" className={darkmodes ? "assign-form-content text-white body-dark" : "assign-form-content text-dark body-light"}>
                    <Navbarallform />
                    <h1 className='text-center'>  Assign Forms </h1></div></div></div>
    )
}
export default Assignform;
