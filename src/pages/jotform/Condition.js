import React, { useEffect } from 'react'
import $ from 'jquery'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
import condition_icon from '../../images/contion_icon.svg';
import Mobile_icon from '../../images/Mobile_icon.svg';
import Sa_accordian from '../../images/Sa_accordian.svg';
import condition from '../../images/condition_icon.svg';
import dropdown from '../../images/dropdown.svg';
import Option from './Option';
import SettingSidebar from './SettingSidebar';
const Condition = () => {
  {/* useEffect(() => {
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
*/}
  return (
    <>
      <SettingSidebar />
      {/* Condition page */}
      <main class="page-content">
        <div class="container ">
          <div class="row felx align-items-center justify-content-center">
            {/* main div start */}
            <div class="col- col_6 set_margin">

              {/* Direct link div start */}
              <div className='main_w'>
                <div className=' underline d-flex align-items-center '>
                  <li className='conduct py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                    <img src={condition_icon} height="18px" alt="manual" />

                  </li>
                  <li className='fs-6 text-black mt-5 pb-2 map'>
                    <h5 className='fs-8 heading_5 remider' >NEW CONDITION</h5>
                    <p className='paragraph '>Select a suitable condition type below to add a new condition.</p>
                  </li>
                </div>
              </div>
              {/* direct link div end */}
              {/* form div start*/}
              <div class="accordion" id="accordionExample">
                <div class="accordion-item standard">
                  <div className='d-flex Main_bg justify-content-between align-items-center border border-black px-3 py-3'>
                    <div class="accordion-header" id="headingOne">
                      <div className=''>
                        <div className='d-flex '>
                          <li className='shown px-2 rounded-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='mt-2' width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>
                          </li>
                          <li className='mx-4 '>
                            <h5 className='remider fw-bold .showhover'>SHOW / HIDE FIELD</h5>
                            <p className='remider fs_6 showhover'>Change visibility of field(s) depending on `IF` State conditions.</p>
                          </li>
                        </div>
                      </div>

                    </div>
                    {/* <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                    <li className='mt-2 enda'>
                      <img src={dropdown} height="13px" className='dropi' alt="manual" />
                    </li>
                  </div>
                </div>
              </div>
              {/* second card start */}
              <div class="accordion mt-3" id="accordionExample">
                <div class="accordion-item standard">
                  <div className='d-flex Main_bg justify-content-between align-items-center px-3 py-3'>
                    <div class="accordion-header" id="headingOne">
                      <div className=''>
                        <div className='d-flex '>
                          <li className='shown px-2 rounded-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='mt-2' width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>
                          </li>
                          <li className='mx-4 '>
                            <h5 className='remider fw-bold .showhover'>SHOW / HIDE FIELD</h5>
                            <p className='remider fs_6 showhover'>Change visibility of field(s) depending on `IF` State conditions.</p>
                          </li>
                        </div>
                      </div>

                    </div>
                    {/* <button class="border border-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                    <li className='mt-2 enda'>
                      <img src={dropdown} height="13px" className='dropi' alt="manual" />
                    </li>
                  </div>
                  {/* second card start */}

                  {/* second card end */}
                </div>
              </div>
              {/* second card end */}
            </div>
            <div class="col-3">
            </div>
            <div class="col-3">
            </div>
          </div>
        </div>
      </main>


    </>
  )
}
export default Condition;