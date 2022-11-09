import React, { useEffect, useState } from 'react'
import { ProfileSidebar } from './ProfileSidebar'
// import {FiEdit3 } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { imagedata } from './Service/Action/StorageAction';

export const MyProfile = (props) => {
  const dispatch = useDispatch();
  const [profilePic, setProfilePic] = useState({ preview: "", raw: "" });
  const handleChange1 = e => {
    if (e.target.files.length) {
      setProfilePic({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
useEffect(()=>{
  if(profilePic){
    dispatch(imagedata(profilePic))
  }
},[profilePic])
  console.log('props', props);

  const [name, setName] = useState('');
  const onName = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (value === "" || re.test(value)) {
      setName(value);
    }
  }
  // const [email, setEmail] = useState('');
  // const onEmail = e => {
  //   const { value } = e.target;

  //   console.log('Input value: ', value);

  //   const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (value === "" || re.test(value)) {
  //     setEmail(value);
  //   }
  // }

  const [mobile, setMobile] = useState('');
  const onMobile = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setMobile(value);
    }
  }

  const [address, setAddress] = useState('');
  const onAddress = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[a-zA-Z0-9\s,'-]*$/;
    if (value === "" || re.test(value)) {
      setAddress(value);
    }
  }

  const [companyName, setCompanyName] = useState('');
  const oncompanyName = e => {
    const { value } = e.target;

    console.log('Input value: ', value);

    const re = /^[a-zA-Z ]*$/;;
    if (value === "" || re.test(value)) {
      setCompanyName(value);
    }
  }


  return (
    <>

      <div className={'container profile_margin profile-image-page ' + (props.darkmodes ? "text-white body-dark" : "text-dark bg-white")}>
        <div className='row'>
          <div className='col-md-2 border_right'>
            <ProfileSidebar props={props} />
          </div>
          <div className='col-md-9 set_margin_left'>
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
              <div class="row mt-4 justify-content-around">
                <div class="search-input-div col-10 col-md-6">
                  <label>Name</label>
                  <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Name" value={name} onChange={onName} />
                </div>
               
                <div class="search-input-div col-10 col-md-6 email-input-myprofile">
                  <label>Email</label>
                  <input type="text" className={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Email" />
                  {/* {error && <h2 style={{ color: 'red' }}>{error}</h2>} */}
                </div>
               
              </div>
              <div className='row justify-content-around'>
                <div class="search-input-div col-10 col-md-6 pt-4">
                  <label for="inputAddress">Mobile Number</label>
                  <input type="tel" class={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} id="number" placeholder="Mobile Number" value={mobile} onChange={onMobile} />
                </div>
              
                <div class="search-input-div col-10 col-md-6 pt-4">
                  <label for="inputAddress">Address</label>
                  <input type="text" class={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} id="inputAddress" placeholder="Address" value={address} onChange={onAddress} />
                </div>
              </div>
              <div class="row justify-content-around">
                <div class="search-input-div col-10 col-md-6 pt-4">
                  <label>Company Name</label>
                  <input type="text" class={"search-input " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} placeholder="Company Name" value={companyName} onChange={oncompanyName} />
                </div>
               
                <div class="search-input-div col-10 col-md-6 pt-4">
                  <label for="exampleFormControlTextarea2">Company Address</label>
                  <textarea class={"search-input rounded-3 " + (props.darkmodes ? " bg-dark login-dark-text " : " bg-light login-light-text ")} id="exampleFormControlTextarea2" rows="3"></textarea>
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
