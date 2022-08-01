import React, { useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import PublishSidebar from './PublishSidebar';

const Publish = () => {
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

    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });

  }, [])

  return (
    <>
      <PublishSidebar />
      <main>
        <div className="page-wrapper chiller-theme toggled ">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
          </a>

          <main class="page-content">
            {/* <Settingform /> */}
            {/* <Thankyoupage /> */}
            {/* main container */}
            <div class="container ml_contain">
              <div class="row flex align-items-center justify-content-center">
                {/* main div start */}
                <div class="col- col_6">
                  <div className='d-flex justify-content-between pt-2 mt-5 big_div '>
                    <div>
                      <ul className='d-flex align-items-center pt-3'>
                        <li className=' class_i  fw-bold fs-4'>
                          !
                        </li>
                        <li className='fs-7 text-white font_comb'>
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
                      <li className='class_g text-white fw-bold fs-4 rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="94.1" y1="161.9" x2="161.9" y2="94" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><path d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path><path d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path></svg>
                      </li>
                      <li className='fs-6 text-black mt-5  map'>
                        <h5 className='fs-8 heading_5'>DIRECT LINK OF YOUR FORM</h5>
                        <p className='paragraph '>Your form is securely published and ready to use at this address.</p>
                      </li>
                    </div>
                  </div>
                  {/* direct link div end */}
                  {/* form div start*/}

                  <form className='bg-white shadow-sm p-4 rounded-1'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex '>
                          <li className='link'>
                            <h6 className='fw-Semibold text-black mt-1'>LINK TO SHARE</h6>
                          </li>
                          <li>
                            <ul className='d-flex border border-success border-1 rounded-pill border_width '>
                              <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78bb07" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM100,52a28,28,0,0,1,56,0V80H100Z"></path></svg></li>
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

                      <div class="mb-3">
                        {/* <label for="disabledTextInput" class="form-label">Disabled input</label> */}
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="https://www.jotform.com/build/221860994544061/publish" />
                      </div>
                      <div class="d-flex justify-content-end border_details">
                        <button className='bg-success rounded-3 border-white py-2 px-3 text-white'>
                          COPY LINK
                        </button>
                        <button className='bg-primary rounded-3 border-white py-2 px-3 text-white'>
                          OPEN IN NEW TAB
                        </button>
                      </div>
                      <div className='bg-black _border'></div>
                      <div className='d-flex align-items-center justify-content-start mt-5'>
                        <div className='d-flex '>
                          <li className='link'>
                            <h6 className='fw-Semibold text-black mt-1'>INVITE BY EMAIL </h6>
                          </li>
                          <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className='bg-white shadow-sm rounded-circle' width="16" height="16" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M207.4,115.1A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l72-72a8.1,8.1,0,0,1,11.4,0l72,72A8.4,8.4,0,0,1,207.4,115.1Z"></path></svg>
                          </li>
                        </div>


                      </div>
                      <div>
                        <div class="mt-3">
                          {/* <label for="disabledTextInput" class="form-label">Disabled input</label> */}
                          <input type="text" id="disabledTextInput" class="form-control" placeholder="https://www.jotform.com/build/221860994544061/publish" />
                        </div>
                      </div>

                    </fieldset>
                  </form>

                  {/* form div end */}

                  {/* two blocks div start*/}
                  <div className='bg-white p-4 mt-4 rounded-1'>
                    <div className='d-flex align-items-center justify-content-between '>
                      <li>
                        <h6 className='fw-bold'>SHARE FORM</h6>
                        <p className='font'>Share your form link in various social posts and through  email.</p>
                      </li>
                      <li>
                        <button className='bg-info rounded-3 border-white py-2 px-3 text-white _option'>
                          SHARE OPTIONS
                        </button>
                      </li>
                    </div>
                  </div>
                  {/* 2nd block div */}
                  <div className='bg-white p-4 mt-4 rounded-1'>
                    <div className='d-flex align-items-center justify-content-between '>
                      <li>
                        <h6 className='fw-bold'>CREATE APP</h6>
                        <p className='font'>Create an app to store all of your form in one place and easily share them with others. start with this form!</p>
                      </li>
                      <li>
                        <button className='bg-danger rounded-3 border-white py-2 px-3 text-white _option'>
                          CREATE APP
                        </button>
                      </li>
                    </div>
                  </div>
                </div>
                {/* main div end */}
                <div class="col-3">
                </div>
                <div class="col-3">
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
export default Publish;