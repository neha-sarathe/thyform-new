import React, { useState, useEffect } from 'react'
import SettingSidebar from '../pages/jotform/SettingSidebar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Notification = ({ darkmodes, setDarkmodes, jottoggled, setJottoggled }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <SettingSidebar darkmodes={darkmodes} setDarkmodes={setDarkmodes} jottoggled={jottoggled} setJottoggled={setJottoggled} />

      {/* Setting_email page */}

      <main className={"page-content setting-email  " + (darkmodes ? "text-white body-dark" : "text-dark body-light")}>
        <div className="container">
          <div className="row felx align-items-center justify-content-center">
            {/* main div start */}
            <div className="col-md-10  set_margin">
              {/* Direct link div start */}
              <div className='main_w'>
                <div className=' underline d-flex align-items-center '>
                  <li className='bg-primary py- px-2 mt-4  text-white fw-bold fs-4 rounded-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"></path></svg>
                  </li>
                  <li className='fs-6 text-black mt-5 pb-2 map'>
                    <h5 className={'fs-8 heading_5 remider ' + (darkmodes ? "text-white " : "text-dark")} >
                      NOTIFICATION 1</h5>
                    <p className='paragraph '>Receive an email when someone fills your form.</p>
                  </li>
                </div>
              </div>


              <Tabs
                defaultActiveKey="email"
                id="fill-tab-example"
                fill
                className={"mb-3 " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")}
              >
                <Tab eventKey="email" title="EMAIL" >
                  aff

                </Tab>
                <Tab eventKey="recipient" title="RECIPIENTS">
                  ff
                </Tab>
                <Tab eventKey="advanced" title="ADVANCED">
                  accordionExamplef
                </Tab>
              </Tabs>




            </div>
            <div className="col-3">
            </div>
            <div className="col-3">
            </div>
          </div>
        </div>
      </main>


    </>
  )
}

export default Notification