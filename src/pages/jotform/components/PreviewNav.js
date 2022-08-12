import React from 'react'

const PreviewNav = () => {
  return (
    <>
    <div className='row jotlist'>
    
        <div className='col-md-6 col-sm-6 col-xs-6 col-lg-6 mt-3'>
          {/* <a class="navbar-brand brand-logo" href="/dashboard">
            <i className='fa fa-arrow-left text-white'></i>
          </a> */}
        <button type="button" className="btn bg-primary text-white">Fill form</button>
        </div>
        <div className='col-md-5 col-sm-5 col-xs-5 col-lg-5'>
        
        <div className='d-flex float-end icon-margin'>
            <a href='/phone'><li className='preview-link'><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg"><g transform="translate(8 3)" fill="#FFF"><path d="M16.105 24.21a1.105 1.105 0 100-2.21 1.105 1.105 0 000 2.21zM11 6.5a.5.5 0 00-.5.5v18a.5.5 0 00.5.5h9.895a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5H11zM11 5h9.895a2 2 0 012 2v18a2 2 0 01-2 2H11a2 2 0 01-2-2V7a2 2 0 012-2zm3.553 3h3.315a.553.553 0 110 1.105h-3.315a.553.553 0 010-1.105z"></path></g></svg>Phone</li></a>
            <a href='/tablet'><li className='preview-link' ><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg "><g transform="translate(8 3)" fill="#FFF" ><circle cx="8.5" cy="22.5" r="1.5"></circle><path d="M2 1.5a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2zM2 0h13a2 2 0 012 2v23a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zM1 1h15v2H1V1z"></path></g></svg>Tablet</li></a>
            <a href='/desktop'><li className='preview-link'><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/svg/2000" class="ji-svg "><g transform="translate(2 6)" fill="#FFF" fill-rule="evenodd"><rect x="8" y="19" width="13" height="1" rx="0.5"></rect><path d="M11 17h7v3h-7zM1 14h26v2H1z"></path><path d="M1.697 1.214a.415.415 0 00-.424.405v13.762c0 .223.19.405.424.405h24.606a.415.415 0 00.424-.405V1.619a.415.415 0 00-.424-.405H1.697zm0-1.214h24.606C27.24 0 28 .725 28 1.619v13.762c0 .894-.76 1.619-1.697 1.619H1.697C.76 17 0 16.275 0 15.381V1.619C0 .725.76 0 1.697 0z" fill-rule="nonzero"></path></g></svg>Desktop</li></a>
            </div>
        </div>
        <div className='col-md-1 col-sm-1 col-xs-1 col-lg-1'>
           
        <p className='Preview d-flex pt-2'>Preview Form
            <div class="form-switch" style={{ fontSize: "18px" }}>
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
            </div>
          </p>
       
         
        </div>
      </div>
    </>
  )
}
export default PreviewNav;