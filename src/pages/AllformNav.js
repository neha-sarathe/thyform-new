import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Dark from '../DarkAuth';
 const AllformNav = ({darkmodes,setDarkmodes})=>{

    return (
      <>
       <Dark darkmodes={darkmodes} setDarkmodes={setDarkmodes}/>
      <nav id="sidebars" className={darkmodes ? "text-white allform-bg-color border-end" : "text-dark allform-bg-color border-end"}>
        <div class={"sidebar-header "+ (darkmodes ? "text-dark body-light border-bottom" : "text-dark body-light border-bottom")}>
          <div className='allform-logo-div'>
            <a class="navbar-brand brand-logo" href="#">
              <img src="../../images/Logo.png" alt="logo" className='allform-logo' />
            </a>
          </div>
        </div>

        <ul class="list-unstyled components">
          <h4 className='side-head text-white'>MY FORMS</h4>
          {/* <hr></hr>
          <li>
            <button type="button" class={"border-0 bg-transparent "+ (darkmodes ? "text-white" : "text-dark ")} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Create a new folder
            </button>
           
          </li> */}
          <li className='allform-list'>
            <a href='/allform' class="">All Forms</a>
           

          </li>
   

          {/* <ul class="collapse list-unstyled" id="homeSubmenu">
                      <li>
                          <a href="#">Home 1</a>
                      </li>
                      <li>
                          <a href="#">Home 2</a>
                      </li>
                      <li>
                          <a href="#">Home 3</a>
                      </li>
                  </ul> */}


          <li className='allform-list'>
            <Link to='/assignform' class="">ASSIGNED FORMS</Link>
            {/* <ul class="collapse list-unstyled" id="homeSubmenu">
                      <li>
                          <a href="#">Home 1</a>
                      </li>
                      <li>
                          <a href="#">Home 2</a>
                      </li>
                      <li>
                          <a href="#">Home 3</a>
                      </li>
                  </ul> */}

          </li>


          <li className='allform-list'>
            <Link to='/myform' class="">My Drafts</Link>
            {/* <ul class="collapse list-unstyled" id="homeSubmenu">
                      <li>
                          <a href="#">Home 1</a>
                      </li>
                      <li>
                          <a href="#">Home 2</a>
                      </li>
                      <li>
                          <a href="#">Home 3</a>
                      </li>
                  </ul> */}

          </li>

          {/* <li>
                  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                  <ul class="collapse list-unstyled" id="pageSubmenu">
                      <li>
                          <a href="#">Page 1</a>
                      </li>
                      <li>
                          <a href="#">Page 2</a>
                      </li>
                      <li>
                          <a href="#">Page 3</a>
                      </li>
                  </ul>
              </li>
              <li>
                  <a href="#">Portfolio</a>
              </li>
              <li>
                  <a href="#">Contact</a>
              </li> */}
        </ul>

        {/* <ul class="list-unstyled CTAs">
              <li>
                  <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
              </li>
              <li>
                  <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
              </li>
          </ul> */}
      </nav>
</>
    )
}
export default AllformNav;