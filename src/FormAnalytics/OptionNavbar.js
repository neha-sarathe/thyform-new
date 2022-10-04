import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const OptionNavbar = ({ darkmodes, setDarkmodes }) => {
    const [viewShow, setViewShow] = useState('');

    const onViewShow = (value) => {
        setViewShow(value)
        console.log('value1', value);
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-12 m-5 p-5 text-center'>
                    <p>No data available for current time range</p>
                </div>
            </div>

            <nav className={"navbar navbar-expand-lg all-navbar navbar-light bg-light pt-0 pb-0 " + (darkmodes ? "text-dark trans_background border-bottom  " : "text-dark trans_background border-bottom ")}>
                <div class="container-fluid  ps-1 d-flex justify-content-around">
                    <ul class="nav nav-tabs">
                        <li class="nav-item active ps-3 formlink px-5 ">
                            <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")} type="button" onClick={() => onViewShow('view')}><p className="h1"> 6 </p> Views</button>
                        </li>
                        <li class="nav-item formlink px-5 " >
                            <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")} type="button" onClick={() => onViewShow('response')}><p className="h1"> 4 </p> Responses</button>
                        </li>
                        <li class="nav-item formlink px-5 " >
                            <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")} type="button" onClick={() => onViewShow('conversionRate')}><p className="h1"> 64% </p> Conversion Rate</button>
                        </li>
                        <li class="nav-item formlink px-5 " >
                            <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")} type="button" onClick={() => onViewShow('avgTime')}><p className="h1"> 00:00 </p> Avg. Time</button>
                        </li>
                    </ul>
                </div>
            </nav>
            <Tabs
                defaultActiveKey="traffic"
                id="uncontrolled-tab-example"
                className="mb-3 " 
            >
                <Tab eventKey="traffic" title="TRAFFIC">
                    {viewShow === "response"
                        ? <>
                            <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                <thead>
                                    <tr>
                                        <th style={{ width: "50%" }}>Recent Visitors</th>
                                        <th style={{ width: "12.5%" }}>Date</th>
                                        <th style={{ width: "12.5%" }}>Response</th>
                                        <th style={{ width: "12.5%" }}>Duration</th>
                                        <th style={{ width: "12.5%" }}>Location Device</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark 2</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                        : viewShow === "conversionRate" ?
                            <>
                               <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "50%" }}>Recent Visitors</th>
                                            <th style={{ width: "12.5%" }}>Date</th>
                                            <th style={{ width: "12.5%" }}>Response</th>
                                            <th style={{ width: "12.5%" }}>Duration</th>
                                            <th style={{ width: "12.5%" }}>Location Device</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark 3</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                            : viewShow === "avgTime" ?
                                <>
                                   <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: "50%" }}>Recent Visitors</th>
                                                <th style={{ width: "12.5%" }}>Date</th>
                                                <th style={{ width: "12.5%" }}>Response</th>
                                                <th style={{ width: "12.5%" }}>Duration</th>
                                                <th style={{ width: "12.5%" }}>Location Device</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark 4</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                                : <>
                                   <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: "50%" }}>Recent Visitors</th>
                                                <th style={{ width: "12.5%" }}>Date</th>
                                                <th style={{ width: "12.5%" }}>Response</th>
                                                <th style={{ width: "12.5%" }}>Duration</th>
                                                <th style={{ width: "12.5%" }}>Location Device</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark 1</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                    }
                </Tab>
                <Tab eventKey="device" title="DEVICE">
                    {viewShow === "response" ?
                        <>
                           <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                <thead>
                                    <tr>
                                        <th style={{ width: "50%" }}>Device Distribution</th>
                                        <th style={{ width: "16.66%" }}>Views</th>
                                        <th style={{ width: "16.66%" }}>Screen sizes</th>
                                        <th style={{ width: "16.66%" }}>Views</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark 2 device</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>Mark</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                        : viewShow === "conversionRate" ?
                            <>
                                <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "50%" }}>Device Distribution</th>
                                            <th style={{ width: "16.66%" }}>Views</th>
                                            <th style={{ width: "16.66%" }}>Screen sizes</th>
                                            <th style={{ width: "16.66%" }}>Views</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark 3 device</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>Mark</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                            : viewShow === "avgTime" ?
                                <>
                                   <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: "50%" }}>Device Distribution</th>
                                                <th style={{ width: "16.66%" }}>Views</th>
                                                <th style={{ width: "16.66%" }}>Screen sizes</th>
                                                <th style={{ width: "16.66%" }}>Views</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark 4 device</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>Mark</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>Mark</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                                <td>Mark</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                                : <>
                                   <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: "50%" }}>Device Distribution</th>
                                                <th style={{ width: "16.66%" }}>Views</th>
                                                <th style={{ width: "16.66%" }}>Screen sizes</th>
                                                <th style={{ width: "16.66%" }}>Views</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark 1 device</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>Mark</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>Mark</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                                <td>Mark</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>}
                </Tab>
                <Tab eventKey="platform" title="PLATFORM">
                    {viewShow === "response" ?
                        <>
                          <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                <thead>
                                    <tr>
                                        <th style={{ width: "50%" }}>Browsers</th>
                                        <th style={{ width: "16.66%" }}>Views</th>
                                        <th style={{ width: "16.66%" }}>platform</th>
                                        <th style={{ width: "16.66%" }}>Views</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark 2 platform</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>Mark</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                        : viewShow === "conversionRate" ?
                            <>
                               <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "50%" }}>Browsers</th>
                                            <th style={{ width: "16.66%" }}>Views</th>
                                            <th style={{ width: "16.66%" }}>platform</th>
                                            <th style={{ width: "16.66%" }}>Views</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark 3 platform</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>Mark</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                            : viewShow === "avgTime" ?
                                <>
                                   <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: "50%" }}>Browsers</th>
                                                <th style={{ width: "16.66%" }}>Views</th>
                                                <th style={{ width: "16.66%" }}>platform</th>
                                                <th style={{ width: "16.66%" }}>Views</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark 4 platform</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>Mark</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>Mark</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                                <td>Mark</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                                : <>
                                   <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: "50%" }}>Browsers</th>
                                                <th style={{ width: "16.66%" }}>Views</th>
                                                <th style={{ width: "16.66%" }}>platform</th>
                                                <th style={{ width: "16.66%" }}>Views</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark 1 platform</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>Mark</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>Mark</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                                <td>Mark</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                    }
                </Tab>
                <Tab eventKey="location" title="LOCATION">
                    {viewShow === "response" ?
                        <>
                            <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                <thead>
                                    <tr>
                                        <th style={{ width: "90%" }}>Countries</th>
                                        <th style={{ width: "10%" }}>Views</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark 2 location</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                        : viewShow === "conversionRate" ?
                            <>
                               <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "90%" }}>Countries</th>
                                            <th style={{ width: "10%" }}>Views</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark 3 location</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                        </tr>
                                        <tr>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                            : viewShow === "avgTime" ?
                                <>
                                   <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: "90%" }}>Countries</th>
                                                <th style={{ width: "10%" }}>Views</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark 4 location</td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                                : <>
                                    <table className={"table " +(darkmodes ? "text-white body-dark " : "text-dark body-light ")}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: "90%" }}>Countries</th>
                                                <th style={{ width: "10%" }}>Views</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark 1 location</td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                    }
                </Tab>
            </Tabs>
        </>
    )
}
