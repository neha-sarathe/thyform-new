import React, { useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import PublishSidebar from './PublishSidebar';


const Email = () => {
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
            <i className="fas fa-bars"></i>
          </a>

          <main className="page-content">

            {/* <Thankyoupage /> */}
            {/* main container */}
            <div className="container ">
              <div className="row felx align-items-center justify-content-center">
                {/* main div start */}
                <div className="col- col_6">
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
                      <li className='bg-secondary py- px-2 mt-4  text-white fw-bold fs-4 rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg>
                      </li>
                      <li className='fs-6 text-black mt-5 pb-2 map'>
                        <h5 className='fs-8 heading_5 remider' >EMAIL FORM</h5>
                        <p className='paragraph '>Share your form through email.</p>
                      </li>
                    </div>
                  </div>
                  {/* direct link div end */}
                  {/* form div start*/}

                  <form className='bg-white shadow-sm  rounded-1 p-3'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center '>
                            <li className='bg-success px-1   text-white fw-bold fs-4  mb-3'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg>
                            </li>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>SHARE ON EMAIL</h5>
                              <p className='paragraph '>Share a direct link to  your form via email.</p>
                            </li>
                          </div>
                        </div>
                        <div>
                          <ul className='d-flex align-items-center justify-content-center'>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#bdb3b8" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M229.7,109.7l-48,48A8.3,8.3,0,0,1,176,160a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,168,152V112a87.9,87.9,0,0,0-85.2,66,8.1,8.1,0,0,1-7.8,6l-2-.3a8,8,0,0,1-5.7-9.7A103.9,103.9,0,0,1,168,96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l48,48A8.1,8.1,0,0,1,229.7,109.7ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z"></path></svg>
                            </li>

                          </ul>
                        </div>
                      </div>





                    </fieldset>
                  </form>
                  <form className='bg-white shadow-sm  rounded-1 p-3 mt-3'>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center '>
                            <li className='bg-success px-1   text-white fw-bold fs-4  mb-3'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M208,32H48A16,16,0,0,0,32,48V159.9h0V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V168H76.7L96,187.3a15.9,15.9,0,0,0,11.3,4.7h41.4a15.9,15.9,0,0,0,11.3-4.7L179.3,168H208v40Z"></path></svg>
                            </li>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>SCHEDULE A REMINDER EMAIL</h5>
                              <p className='paragraph '>Send periodic emails to remind people to fill out your form.</p>
                            </li>
                          </div>
                        </div>
                        <div>
                          <ul className='d-flex align-items-center justify-content-center'>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#bdb3b8" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M229.7,109.7l-48,48A8.3,8.3,0,0,1,176,160a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,168,152V112a87.9,87.9,0,0,0-85.2,66,8.1,8.1,0,0,1-7.8,6l-2-.3a8,8,0,0,1-5.7-9.7A103.9,103.9,0,0,1,168,96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l48,48A8.1,8.1,0,0,1,229.7,109.7ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z"></path></svg>

                            </li>
                          </ul>
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
export default Email;