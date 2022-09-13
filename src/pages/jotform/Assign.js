import React, { useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import PublishSidebar from './PublishSidebar';


const Assign = ({darkmodes,setDarkmodes }) => {
  useEffect(() => {
    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    // $("#close-sidebar").click(function () {
    //   $(".page-wrapper").removeClass("toggled");
    // });
    // $("#show-sidebar").click(function () {
    //   $(".page-wrapper").addClass("toggled");
    // });

  }, [])

  return (
    <>
      <PublishSidebar darkmodes={darkmodes} setDarkmodes={setDarkmodes}/>
      <main>
        <div className="page-wrapper chiller-theme toggled ">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i className="fas fa-bars"></i>
          </a>

          <main className={"page-content " + (darkmodes ? "text-white body-dark" : "text-dark body-light")}>
            {/* <Settingform /> */}
            {/* <Thankyoupage /> */}
            {/* main container */}
            <div className="container ml_contain">
              <div className="row felx align-items-center justify-content-center">
                {/* main div start */}
                <div className="col- col_6">
                  <div className='d-flex justify-content-between pt-2 mt-5 big_div '>
                    <div>
                      <ul className='d-flex align-items-center pt-3'>
                        <li className=' class_i  fw-bold fs-4'>
                          !
                        </li>
                        <li className='fs-7 font_comb '>
                          Please sign up to publish your form.
                        </li>
                      </ul>
                    </div>
                    <div className=' p-3 pt-2'>
                      <button className='rounded px-2  border-white' >
                        <p className='text-black fw-bold pt-1'>Sign Up Now -  <span className='text-black fw-light'>its free!</span></p>
                      </button>
                    </div>
                  </div>
                  {/* Direct link div start */}
                  <div className='main_w'>
                    <div className=' underline d-flex align-items-center '>
                      <li className='bg-info py-1 px-2 mt-4  text-white fw-bold fs-4 rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M64,140a7.9,7.9,0,0,1-8,8H12a8.2,8.2,0,0,1-7.2-4.4,8.2,8.2,0,0,1,.8-8.4A67.8,67.8,0,0,1,33,113.5a40,40,0,1,1,66.3-37,8.1,8.1,0,0,1-3.8,8.4,64.3,64.3,0,0,0-27.8,33.8A61.6,61.6,0,0,0,64,140Zm186.4-4.8A67.8,67.8,0,0,0,223,113.5a40,40,0,1,0-66.3-37,8.1,8.1,0,0,0,3.8,8.4,64,64,0,0,1,27.8,33.8A61.6,61.6,0,0,1,192,140a7.9,7.9,0,0,0,8,8h44a8,8,0,0,0,6.4-12.8Zm-93.2,42.9a48,48,0,1,0-58.4,0,72.1,72.1,0,0,0-35.6,34.4,7.8,7.8,0,0,0,.5,7.7,7.8,7.8,0,0,0,6.7,3.8H185.6a7.8,7.8,0,0,0,6.7-3.8,7.8,7.8,0,0,0,.5-7.7A72.1,72.1,0,0,0,157.2,178.1Z"></path></svg>
                      </li>
                      <li className='fs-6 text-black mt-5 pb-2 map'>
                        <h5 className={'fs-8 heading_5 ' + (darkmodes ? "text-white " : "text-dark ")}>ASSIGN FORM</h5>
                        <p className='paragraph '>Request other to complete your form.</p>
                      </li>
                    </div>
                  </div>
                  {/* direct link div end */}
                  {/* form div start*/}

                  <form className={' shadow-sm p-4 rounded-1 '+ (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex '>
                          <li className='link'>
                            <h6 className={'fw-Semibold text-black mt-1 ' + (darkmodes ? "text-white " : "text-dark ")}>ASSIGN WITH LINK</h6>
                          </li>
                          <li>
                            <ul className='d-flex border border-success border-1 rounded-pill border_width '>
                              <li><svg xmlns="http://www.w3.org/200 0/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM100,52a28,28,0,0,1,56,0V80H100Z"></path></svg></li>
                              <li className='pb'>Public Form</li>
                            </ul>
                          </li>
                        </div>
                        <div>
                          <ul className='d-flex align-items-center justify-content-center'>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4370df" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M237.5,104.3a8,8,0,0,0-4-5.3L209.7,85.8q-1.9-3.9-4.2-7.5l.4-27.2a8.3,8.3,0,0,0-2.6-6.1,112,112,0,0,0-41.1-23.7,8.1,8.1,0,0,0-6.6.8l-23.3,14c-2.9-.1-5.7-.1-8.6,0l-23.3-14a8.1,8.1,0,0,0-6.6-.8A111.1,111.1,0,0,0,52.7,45.1a7.9,7.9,0,0,0-2.6,6l.5,27.2c-1.6,2.4-3,4.9-4.4,7.5L22.5,99a7.7,7.7,0,0,0-4,5.3,111.4,111.4,0,0,0,0,47.4,8,8,0,0,0,4,5.3l23.8,13.2a69.3,69.3,0,0,0,4.3,7.5l-.5,27.2a8.3,8.3,0,0,0,2.6,6.1,112.9,112.9,0,0,0,41.1,23.7,8.1,8.1,0,0,0,6.6-.8l23.3-14h8.6l23.4,14a7.3,7.3,0,0,0,4.1,1.2,10,10,0,0,0,2.4-.4,111.1,111.1,0,0,0,41.1-23.8,7.9,7.9,0,0,0,2.6-6l-.4-27.2c1.5-2.4,2.9-4.9,4.3-7.5L233.6,157a7.9,7.9,0,0,0,3.9-5.3A111.4,111.4,0,0,0,237.5,104.3ZM172,128a44,44,0,1,1-44-44A44,44,0,0,1,172,128Z"></path></svg>
                            </li>
                            <li className='fs-6 fw-semibold setting'>Settings</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mb-3 d-flex position-relative">
                        <input type="text" id="disabledTextInput" class="form-control i_form" placeholder=" https://www.jotform.com/build/221860994544061/publish" />
                        <button className='bg-success rounded-3 border-white py-2 px-3 text-white w-56 copy_button'>
                          COPY LINK
                        </button>
                        <div className='position-absolute link_c'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#180c0c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="94.1" y1="161.9" x2="161.9" y2="94" fill="none" stroke="#180c0c" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><path d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111" fill="none" stroke="#180c0c" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path><path d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1" fill="none" stroke="#180c0c" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path></svg>
                        </div>
                      </div>

                      <div className='bg-black _border'></div>
                      <div className='d-flex align-items-center justify-content-start mt-5'>
                        <div className='d-flex '>
                          <li className='link'>
                            <h6 className={'fw-Semibold text-black mt-1 ' + (darkmodes ? "text-white " : "text-dark ")}>INVITE BY EMAIL </h6>
                          </li>
                          <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className='bg-white shadow-sm rounded-circle' width="16" height="16" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M207.4,115.1A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l72-72a8.1,8.1,0,0,1,11.4,0l72,72A8.4,8.4,0,0,1,207.4,115.1Z"></path></svg>
                          </li>
                        </div>


                      </div>
                      <div>
                        <div className="mt-3 position-relative">
                          {/* <label for="disabledTextInput" class="form-label">Disabled input</label> */}
                          <input type="text" id="disabledTextInput" class="form-control" placeholder="https://www.jotform.com/build/221860994544061/publish" />
                          <div className='position-absolute link_c'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#180c0c" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"></path></svg>
                          </div>
                        </div>
                      </div>
                      <div className='bg-white py-4 mt-4 rounded-1 border-top'>
                        <div className='d-flex align-items-center justify-content-between '>
                          <li>
                            <h5 className='fw-bold text-muted semibold'>ASSIGN TO EVERYONE IN THE ORGANIZATION</h5>
                            <p className='font fw-bold'>Make this form available to everyone in your compony, even newcomers</p>
                          </li>
                          <li>
                            <div className='position-relative shadow selected_div '>
                              <div className='position-absolute abs_div'>
                              </div>
                            </div>
                          </li>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                  <div className='bg-black ' height="1px"></div>
                  {/* form div end */}

                  {/* two blocks div start*/}
                </div>
                {/* main div end */}
                <div className="col-3">
                </div>
                <div className="col-3">
                </div>

              </div>
            </div>

          </main>

        </div>
        <div>

        </div>
      </main>

    </>
  )
}
export default Assign;