import React, { useState } from 'react'
import { ProfileSidebar } from './ProfileSidebar'
// import {FiEdit3 } from "react-icons/fi";

export const MyProfile = (props) => {
  const [profilePic, setProfilePic] = useState({ preview: "", raw: "" });
  const handleChange1 = e => {
    if (e.target.files.length) {
      setProfilePic({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  console.log('props', props);
  return (
    <>

      <div className={'container profile_margin ' + (props.darkmodes ? "text-white body-dark" : "text-dark bg-white")}>
        <div className='row'>
          <div className='col-md-2 border_right'>
            <ProfileSidebar props={props} />
          </div>
          <div className='col-md-10 set_margin_left'>
            <div className='d-flex flex-row'>
              {profilePic.preview ? (
                <img src={profilePic.preview} alt="Profile Picture" className="img-lg rounded-circle " />
              ) : (
                <>
                  <img className="img-lg rounded-circle" src="../../images/faces/face8.jpg" alt="Profile Picture" />
                </>
              )}


              {/* <FiEdit3 className='ml-5'/> */}
              <div className='mt-5'>
                <label htmlFor="upload-button">
                  <i className="fa fa-pencil-square fa-stack-2x ml-0 icon_width" aria-hidden="true" >
                <input
                  type="file"
                  id="upload-button"
                  style={{ display: "none" }}
                  onChange={handleChange1}
                /></i></label>
              </div>
            </div>
            <form>
              <div class="row mt-4">
                <div class="search-input-div col-md-12">
                  <label>Name</label>
                  <input type="text" className={"search-input "+(props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Name" />
                </div>
                <div class="search-input-div col-md-4">
                  
                  </div>
                <div class="search-input-div col-md-6 pt-4">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class={"search-input "+(props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} id="inputEmail4" placeholder="Email" />
                </div>
                <div class="form-group col-md-6">
                  
                  </div>
              </div>
              <div className='row'>
                <div class="search-input-div col-md-6 pt-4">
                  <label for="inputAddress">Mobile Number</label>
                  <input type="tel" class={"search-input "+(props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} id="number" placeholder="Mobile Number" />
                </div>
                <div class="form-group col-md-6">
                  
                  </div>
                <div class="search-input-div col-md-6 pt-4">
                  <label for="inputAddress">Address</label>
                  <input type="text" class={"search-input "+(props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} id="inputAddress" placeholder="Address" />
                </div>
              </div>
              <div class="row">
                <div class="search-input-div col-md-6 pt-4">
                  <label>Company Name</label>
                  <input type="text" class={"search-input "+(props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Company Name" />
                </div>
                <div class="form-group col-md-6">
                  
                  </div>
                <div class="search-input-div col-md-6 pt-4">
                  <label for="exampleFormControlTextarea2">Company Address</label>
                  <textarea class={"search-input rounded-3 "+(props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} id="exampleFormControlTextarea2" rows="3"></textarea>
                </div>
              </div>
              <div className='pt-4'>
              <button type="submit" class="btn btn-primary">Save Change</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
