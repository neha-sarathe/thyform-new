import React, { Component } from 'react'
import Navbarallform from './Navbarallform'
const Myform = ({darkmodes,setDarkmodes})=>{
        return (
            <div style={{ width: '100%' }}>
            <div id="content" className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>
                <Navbarallform />
                My Form</div></div>
        )
    }
export default Myform;
