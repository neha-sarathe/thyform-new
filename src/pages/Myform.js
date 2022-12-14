import React, { Component } from 'react'
import Navbarallform from './Navbarallform'
import AllformNav from './AllformNav'
const Myform = ({darkmodes,setDarkmodes})=>{
        return (
            <div className="wrapper">
                 <AllformNav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
            <div style={{ width: '100%' }}>
            <div id="content" className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>
                <Navbarallform />
                <h1 className='text-center'>My Drafts</h1> </div></div></div>
        )
    }
export default Myform;
