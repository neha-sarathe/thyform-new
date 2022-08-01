import React from "react";
import SettingSidebar from "./SettingSidebar";
const MobileNotification = () => {
    return (
        <>
            <SettingSidebar />
            <main class="page-content">
                <div class="container">
                    <div class="row felx align-items-center justify-content-center">
                        {/* main div start */}
                        <div class="col- col_6 set_margin">

                            {/* Direct link div start */}
                            <div className='main_w'>
                                <div className=' underline d-flex align-items-center '>
                                    <li className='bg-primary py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg>
                                    </li>
                                    <li className='fs-6 text-black mt-5 pb-2 map'>
                                        <h5 className='fs-8 heading_5 remider' >MOBILE NOTIFICATION</h5>
                                        <p className='paragraph '>Customize your app notifications.</p>
                                    </li>
                                </div>
                            </div>
                            {/* direct link div end */}
                            {/* form div start*/}
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item standard">

                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        {/* first man div start  */}
                                        <div className=''>
                                            <form className='bg-white shadow-sm  rounded-1 p-3 position-relative'>
                                                <fieldset>
                                                    <div className='d-flex align-items-center justify-content-between '>
                                                        <div className='main_w'>
                                                            <div className=' underline d-flex align-items-center py-2 mx-2 '>
                                                                {/* 
                                                                 <li className='background p-2 rounded-2'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M207.8,112a79.7,79.7,0,0,0-79.2-80H128a79.9,79.9,0,0,0-79.8,80c0,34.3-7.1,53.7-13,63.9a16.2,16.2,0,0,0-.1,16.1A15.9,15.9,0,0,0,49,200H88a40,40,0,0,0,80,0h39a15.9,15.9,0,0,0,13.9-8,16.2,16.2,0,0,0-.1-16.1C214.9,165.7,207.8,146.3,207.8,112ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224ZM224.9,73.3a9.3,9.3,0,0,1-3.5.8,7.9,7.9,0,0,1-7.2-4.5,97,97,0,0,0-35-38.8,8,8,0,0,1,8.5-13.6,111.7,111.7,0,0,1,40.8,45.4A8,8,0,0,1,224.9,73.3Zm-190.3.8a9.3,9.3,0,0,1-3.5-.8,8,8,0,0,1-3.6-10.7A111.7,111.7,0,0,1,68.3,17.2a8,8,0,0,1,8.5,13.6,97,97,0,0,0-35,38.8A7.9,7.9,0,0,1,34.6,74.1Z"></path></svg>
                                                                </li>
                                                                 */}
                                                                <li className='fs-6 text-black map'>
                                                                    <h5 className='fs-7 fw-bold heading_5 remider'>Turn on notifications</h5>
                                                                    <p className='paragraph remider'>Enable mobile app notifications for this form.</p>
                                                                </li>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <ul className='d-flex align-items-center justify-content-center'>
                                                                <li className='mt-2'>
                                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg> */}
                                                                </li>
                                                            </ ul>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='d-flex align-items-center justify-content-between '>
                                                        <div className='main_w'>
                                                            <div className=' underline d-flex align-items-center py-2 mx-2 '>

                                                                <li className='background p-2 rounded-2'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M207.8,112a79.7,79.7,0,0,0-79.2-80H128a79.9,79.9,0,0,0-79.8,80c0,34.3-7.1,53.7-13,63.9a16.2,16.2,0,0,0-.1,16.1A15.9,15.9,0,0,0,49,200H88a40,40,0,0,0,80,0h39a15.9,15.9,0,0,0,13.9-8,16.2,16.2,0,0,0-.1-16.1C214.9,165.7,207.8,146.3,207.8,112ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224ZM224.9,73.3a9.3,9.3,0,0,1-3.5.8,7.9,7.9,0,0,1-7.2-4.5,97,97,0,0,0-35-38.8,8,8,0,0,1,8.5-13.6,111.7,111.7,0,0,1,40.8,45.4A8,8,0,0,1,224.9,73.3Zm-190.3.8a9.3,9.3,0,0,1-3.5-.8,8,8,0,0,1-3.6-10.7A111.7,111.7,0,0,1,68.3,17.2a8,8,0,0,1,8.5,13.6,97,97,0,0,0-35,38.8A7.9,7.9,0,0,1,34.6,74.1Z"></path></svg>
                                                                </li>

                                                                <li className='fs-6 text-black map'>
                                                                    <h5 className='fs-7 fw-bold heading_5 remider'>EDIT NOTIFICATION TEXT</h5>
                                                                    <p className='paragraph remider'>Customize the content for your mobile app notifications.</p>
                                                                </li>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <ul className='d-flex align-items-center justify-content-center'>
                                                                <li className='mt-2'>
                                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6a6a7c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.4,109.9-40,36A8.2,8.2,0,0,1,116,172a7.9,7.9,0,0,1-5.9-2.6,8,8,0,0,1,.5-11.3L144,128,110.6,97.9a8,8,0,0,1,10.8-11.8l40,36a8,8,0,0,1,0,11.8Z"></path></svg> */}
                                                                </li>
                                                            </ ul>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                {/* <div className='position-absolute succes bg-opacity-75'>

                                                </div> */}
                                            </form>
                                        </div>
                                        {/* first man div end  */}

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-3">
                        </div>
                        <div class="col-3">
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
};
export default MobileNotification;