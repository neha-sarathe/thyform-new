import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Dark from '../DarkAuth';
 const AllformNav = ({darkmodes,setDarkmodes})=>{
    let pages2 = ""
    const pathnames = window.location.pathname;
    pages2 = pathnames.split('/')
    console.log(pages2[2],'allformNav....', window.location.pathname)
    
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
          <li>
            <Link to='/allform/allform' ><div  className={'allform-list ' + (pages2[2] === 'allform' ? 'allform-list-focus1' : 'allform-list-focusnone')}>All Forms</div></Link>
           

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


          <li >
            <Link to='/allform/assignform' ><div className={'allform-list ' + (pages2[2] === 'assignform' ? 'allform-list-focus1' : 'allform-list-focusnone')}>ASSIGNED FORMS</div></Link>
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


          <li >
            <Link to='/allform/myform' ><div className={'allform-list ' +( pages2[2] === "myform" ? "allform-list-focus1" : 'allform-list-focusnone')}>My Drafts</div></Link>
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

   
        </ul>

   
      </nav>
</>
    )
}
export default AllformNav;