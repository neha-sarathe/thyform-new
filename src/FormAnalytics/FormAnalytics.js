import React from 'react';
import { NavFormAnalytics } from './NavFormAnalytics';
import { OptionNavbar } from './OptionNavbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Mobilenav from '../pages/Mobilenav';
export const FormAnalytics = ({ darkmodes, setDarkmodes }) => {
    console.log("darkmodes on FormAnalytics.....", darkmodes);
    return (
        <>
            <div className="wrapper">

                <div id="content" className={darkmodes ? "text-white bg-dark" : "text-dark bg-light"}>

                    <NavFormAnalytics darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
                    <Mobilenav darkmodes={darkmodes} setDarkmodes={setDarkmodes} />
                    <div className='border rounded p-4 m-4'>

                        <nav class="navbar navbar-light ">
                            <div class="container-fluid">
                                <span class={"navbar-brand mb-0 h4 " + (darkmodes ? "text-white bg-dark" : "text-dark bg-light")}>FORM ANALYTICS</span>
                            </div>
                        </nav>
                        <Tabs
                            defaultActiveKey="week"
                            id="justify-tab-example"
                            className={"mb-3 " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}
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

                    </div>
                </div>
            </div>

        </>
    )
}
