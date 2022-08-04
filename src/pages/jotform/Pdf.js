import React, { useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import PublishSidebar from './PublishSidebar';

const Pdf = () => {
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
                      <li className='bg-danger opacity-50 px-2 mt-4  text-white fw-bold fs-4 rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M64,160H48a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H56V176h8a8,8,0,0,1,0,16Zm132-16v12h16a8,8,0,0,1,0,16H196v12a8,8,0,0,1-16,0V168a8,8,0,0,1,8-8h28a8,8,0,0,1,0,16Zm-68-16H114a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h14a32,32,0,0,0,0-64Zm0,48h-6V176h6a16,16,0,0,1,0,32ZM48,136H208a8,8,0,0,0,8-8V88a8.1,8.1,0,0,0-2.3-5.7l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88A8,8,0,0,0,48,136ZM152,44l44,44H152Z"></path></svg>
                      </li>
                      <li className='fs-6 text-black mt-5 pb-2 map'>
                        <h5 className='fs-8 heading_5 remider' >PDF</h5>
                        <p className='paragraph '>Download fillable PDF.</p>
                      </li>
                    </div>
                  </div>
                  {/* direct link div end */}
                  {/* form div start*/}

                  <form className='bg-white shadow-sm  rounded-1 p-3 '>
                    <fieldset>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='main_w'>
                          <div className=' underline d-flex align-items-center '>
                            <li className='fs-6 text-black map'>
                              <h5 className='fs-8 heading_5 remider'>DOWNLOAD PDF</h5>
                              <p className='paragraph '>Download fillable version of your form in PDF</p>
                            </li>
                          </div>
                        </div>
                        <div>
                          <ul className='d-flex align-items-center justify-content-center'>
                            <li className=''>
                              <button className='d-flex border border-white bg-success bg-opacity-75 p-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M74.3,85.7A8.1,8.1,0,0,1,85.7,74.3L120,108.7V24a8,8,0,0,1,16,0v84.7l34.3-34.4a8.1,8.1,0,0,1,11.4,11.4l-48,48a8.2,8.2,0,0,1-11.4,0ZM240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H84.4a3.6,3.6,0,0,1,2.8,1.2L111,145a24.1,24.1,0,0,0,34,0l23.8-23.8a3.6,3.6,0,0,1,2.8-1.2H224A16,16,0,0,1,240,136Zm-40,32a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"></path></svg>
                                <p className='text-white fw-semibold fs-6 remider px-2'>DOWNLOAD</p>

                              </button>
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
export default Pdf;