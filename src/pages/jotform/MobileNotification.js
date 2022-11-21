import React, { useState } from "react";
import SettingSidebar from "./SettingSidebar";
import { Editor } from "@tinymce/tinymce-react";
import { BiFullscreen } from "react-icons/bi";
import { FaSadCry } from "react-icons/fa";
import { FiShuffle } from "react-icons/fi";
const MobileNotification = ({ darkmodes, setDarkmodes, jottoggled, setJottoggled }) => {
    const [content, setState] = useState();

    const handleChange = (content, editor) => {
        setState({ content });
    }

    const handleSubmit = (event) => {
        alert("Text was submitted: " + content);
        event.preventDefault();
    }
const [fullscreen,setFullscreen] = useState('fullscreen')
    return (
        <>
            <SettingSidebar jottoggled={jottoggled} darkmodes={darkmodes} setJottoggled={setJottoggled} />
            <main className={"page-content " + (darkmodes ? "text-white bg-dark" : "text-dark bg-light")}>
                <div className="container">
                    <div className="row felx align-items-center justify-content-center">
                        {/* main div start */}
                        {/* <div className="col- col_6 set_margin"> */}
                        <div className="col-sm-2 col-md-8 col-lg-8 col-xl-10 set_margin set_margin_mob">

                            {/* <div id="app-cover1">
  <div class="row row1">
   
  
    <div class="toggle-button-cover">
 
        <div class="button1 r" id="button-3">
          <input type="checkbox" class="checkbox1" />
          <div class="knobs1"></div>
          <div class="layer1"></div>
        </div>
      
    </div>
  </div>
</div> */}
                            {/* Direct link div start */}
                            <div className='main_w'>
                                <div className=' underline d-flex align-items-center '>
                                    <li className='bg-icon-color py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg>
                                    </li>
                                    <li className='fs-6 text-black mt-5 pb-2 map'>
                                        <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white" : "text-dark ")} >MOBILE NOTIFICATION</h5>
                                        <p className={'paragraph ' + (darkmodes ? "text-white" : "text-dark ")}>Customize your app notifications.</p>
                                    </li>
                                </div>
                            </div>
                            {/* direct link div end */}
                            {/* form div start*/}
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item standard">

                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        {/* first man div start  */}
                                        <div className=''>
                                            <form className={'shadow-sm  rounded-1 p-3 position-relative ' + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
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
                                                                    <h6 className={'fw-bold heading_5 remider ' + (darkmodes ? "text-white" : "text-dark ")}>Turn on notifications</h6>
                                                                    <p className={'paragraph remider ' + (darkmodes ? "text-white" : "text-dark ")}>Enable mobile app notifications for this form.</p>
                                                                </li>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <ul className='d-flex align-items-center justify-content-center'>
                                                                <li className='mt-2'>
                                                                    <div id="app-cover1">
                                                                        <div class="row row1">


                                                                            <div class="toggle-button-cover">

                                                                                <div class="button1 r" id="button-3">
                                                                                    <input type="checkbox" class="checkbox1" />
                                                                                    <div class="knobs1"></div>
                                                                                    <div class="layer1"></div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
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
                                                                    <h5 className={'fs-7 fw-bold heading_5 remider ' + (darkmodes ? "text-white" : "text-dark ")}>EDIT NOTIFICATION TEXT</h5>
                                                                    <p className={'paragraph remider ' + (darkmodes ? "text-white" : "text-dark ")}>Customize the content for your mobile app notifications.</p>
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
                                                    <div className='d-flex notification-div-main mt-3 bg-info align-items-center justify-content-center'>

                                                        <div className="col-sm-2 col-md-8 col-lg-8 col-xl-8 notification-div">
                                                            <p className="notify-para1">To receive mobile notifications</p>
                                                            <p className="notify-para2">download the Jotform Mobile Forms app.</p>
                                                        </div>
                                                        <div className="col-sm-2 col-md-4 col-lg-4 col-xl-4 banner-btn-div banner-btn-div_mob">
                                                            <div className="banner-col-btn1"><img src="https://cdn.jotfor.ms/assets/img/mobile/app-store-blue.svg" /></div>
                                                            <div className="banner-col-btn2 banner-btn2-mob"><img src="https://cdn.jotfor.ms/assets/img/mobile/google-play-blue.svg" /></div>
                                                        </div>

                                                    </div>
                                                </fieldset>
                                                <div className="mt-5">
                                                    <h6>Notification Title</h6>
                                                    <Editor
                                                        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                                                        value={content}

                                                        init={{
                                                            height: 200,
                                                            menu: {
                                                                file: { title: 'Filesdfdsfds', items: 'newdocument restoredraft | preview | print ' },
                                                                edit: { title: '', items: '' },
                                                                view: { title:fullscreen,items: ' preview fullscreen' },
                                                                insert: { title: 'Insert', items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime' },
                                                                format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align lineheight | forecolor backcolor | removeformat' },
                                                                tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
                                                                table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
                                                                help: { title: 'Help', items: 'help' },

                                                            },
                                                            menubar: 'format | view '
                                                            , toolbar: 'fullscreen',
                                                            initialValue: '<p>Once upon a time...</p>',
                                                            selector: "textarea",
                                                            toolbar: 'formatselect',
                                                            plugins: [

                                                                'fullscreen',
                                                                // 'insertdatetime media table paste code help wordcount'
                                                            ],
                                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                        }}
                                                        onEditorChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <h6>Notification Content</h6>
                                                    <Editor
                                                        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                                                        value={content}

                                                        init={{
                                                            height: 200,
                                                            menubar: false,
                                                            initialValue: '<p>Once upon a time...</p>',
                                                            selector: "textarea.simple",
                                                            toolbar: 'formatselect',
                                                            plugins: [

                                                                'fullscreen',
                                                                // 'insertdatetime media table paste code help wordcount'
                                                            ],
                                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                        }}
                                                        onEditorChange={handleChange}
                                                    />
                                                </div>
                                                {/* <div className='position-absolute succes bg-opacity-75'>

                                                </div> */}
                                            </form>
                                        </div>
                                        {/* first man div end  */}

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
};
export default MobileNotification;