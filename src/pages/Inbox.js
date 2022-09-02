import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbarallform from './Navbarallform'
const Inbox = ({darkmodes})=>{
    return (
        <div style={{ width: '100%' }}>
                <div id="content" className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>
                    <Navbarallform />
                    Inbox</div></div>
    )
  }
export default Inbox;
