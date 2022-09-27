import React from 'react';
import { NavFormAnalytics } from './NavFormAnalytics';
import { OptionNavbar } from './OptionNavbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const FormAnalytics = ({ darkmodes, setDarkmodes }) => {
    console.log("darkmodes on FormAnalytics.....", darkmodes);
    return (
        <>
            <div className="wrapper">

                <div id="content" className={darkmodes ? "text-white body-dark" : "text-dark body-light"}>

                    <NavFormAnalytics darkmodes={darkmodes} setDarkmodes={setDarkmodes} />

                    <div className='border rounded p-4 m-4'>
                        {/* <OptionNavbar darkmodes={darkmodes} setDarkmodes={setDarkmodes}/> */}
                        <nav class="navbar navbar-light bg-light">
                            <div class="container-fluid">
                                <span class="navbar-brand mb-0 h4">FORM ANALYTICS</span>
                            </div>
                        </nav>
                        <Tabs
                            defaultActiveKey="week"
                            id="justify-tab-example"
                            className={"mb-3 "+(darkmodes ? "text-white body-dark " : "text-dark body-light ")}
                        >
                            <Tab eventKey="week" title="This Week">

                                <OptionNavbar darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
                            </Tab>
                            <Tab eventKey="month" title="This Month">
                                <OptionNavbar darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
                            </Tab>
                            <Tab eventKey="all-time" title="All-time">
                                <OptionNavbar darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
                            </Tab>
                            <Tab eventKey="custom" title="Custom">
                                <OptionNavbar darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
                            </Tab>
                        </Tabs>
                        {/* <Tabs
                            defaultActiveKey="traffic"
                            id="uncontrolled-tab-example"
                            className={"mb-3 "+darkmodes ? "text-white body-dark" : "text-dark body-light"}
                        >
                            <Tab eventKey="traffic" title="TRAFFIC">
                               traffic data
                            </Tab>
                            <Tab eventKey="device" title="DEVICE">
                                device data
                            </Tab>
                            <Tab eventKey="platform" title="PLATFORM">
                                platform data
                            </Tab>
                            <Tab eventKey="location" title="LOCATION">
                                location
                            </Tab>
                        </Tabs> */}

                    </div>
                </div>
            </div>

        </>
    )
}
