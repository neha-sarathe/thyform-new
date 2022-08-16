import React, { useState } from 'react'
import PreviewNav from './PreviewNav'
import $ from 'jquery'
// import DeviceEmulator from 'react-device-emulator';
// import 'react-device-emulator/lib/styles/style.css';
import { MarvelDevices } from "react-css-devices";
export const Phone = () => {
    const [potrait, setPotrait] = useState('portrait')
    const [landscape, setLandScape] = useState();
    const potraitChange = () => {
        // document.getElementsByClassName('mobile-view').style.width=
        // $(function () {
        //     $(".svg-tab").click(function () {



        //         $('.mobile-view').css("width", '372px');


        //     });
        // });
        setPotrait('portrait')
    }
    const LandscapeChange = () => {
        setPotrait('')
        console.log(landscape, ' ffffffffffffffffff')
        // $(function () {
        //     $(".svg-tab").click(function () {



        //         $('.mobile-view').css("width", '700px');


        //     });
        // });
        setLandScape('landscape');
    }


    return (
        <>
            <div> <PreviewNav /></div>
            <div className='prview-mobile-center'><p>ORIENTATION</p>

                <div className='mob-tab-view'><div className='svg-tab' onClick={potraitChange}><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg"><g transform="translate(8 3)" fill="#000"><path d="M16.105 24.21a1.105 1.105 0 100-2.21 1.105 1.105 0 000 2.21zM11 6.5a.5.5 0 00-.5.5v18a.5.5 0 00.5.5h9.895a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5H11zM11 5h9.895a2 2 0 012 2v18a2 2 0 01-2 2H11a2 2 0 01-2-2V7a2 2 0 012-2zm3.553 3h3.315a.553.553 0 110 1.105h-3.315a.553.553 0 010-1.105z"></path></g></svg> </div><div className='text-hyphan'>&nbsp;<div class='tabicon' onClick={LandscapeChange}><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg "><path d="M16.105 24.21a1.105 1.105 0 100-2.21 1.105 1.105 0 000 2.21zM11 6.5a.5.5 0 00-.5.5v18a.5.5 0 00.5.5h9.895a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5H11zM11 5h9.895a2 2 0 012 2v18a2 2 0 01-2 2H11a2 2 0 01-2-2V7a2 2 0 012-2zm3.553 3h3.315a.553.553 0 110 1.105h-3.315a.553.553 0 010-1.105z"></path></svg></div></div></div></div>
            <div style={{ marginTop: "70px" }}>  <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">  <MarvelDevices
                    deviceName={"iphone6"}
                    color={"white"}
                    orientation={potrait ? potrait : landscape}
                    transform={0.5}
                    type="tab" withDeviceSwitch withRotator

                >

                    <div className='mobile-view'><div className='form-head-mobile'><h4 className='form-text-mobile'>Form</h4></div><div><div className='form-btn-mobile'><button className='btn  w-100 btn-submit-mobile'>Submit</button></div></div></div>

                </MarvelDevices></div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><MarvelDevices
                    deviceName={"macbook"}
                    color={"white"}
                    orientation={potrait ? potrait : landscape}
                    transform={0.5}


                ><h1>Welcome to React Device Emulator</h1>
                </MarvelDevices></div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">.tttttttttttttttttttttttttttttttttttttttttttttt..</div>
            </div></div>
        </>
    )
}
