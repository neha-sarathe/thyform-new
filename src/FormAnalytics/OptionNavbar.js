import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Line } from 'react-chartjs-2'

export const OptionNavbar = ({ darkmodes, setDarkmodes }) => {
    const data = {
        labels: ["Nov 01,2001", "Oct 01,2001", "Sep 01,2001", "Aug 01,2001", "Jul 01,2001", "Jun 01,2001", "May 01,2001", "Apr 01,2001", "Mar 01,2001", "Feb 01,2001", "Jan 01,2001", "Jan 01,2000"],
        datasets: [{
            label: '# of Votes',
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            fill: false
        }]
    };

    const options = {
        // maintainAspectRatio : false,
        scales: {
            yAxes: [{
                ticks: {
                    min: 0, // minimum value
                    max: 1, // maximum value
                    stepSize: 10
                }
            }]
        },
        legend: {
            display: false
        },
        elements: {
            point: {
                radius: 0
            }
        }

    };

    const [viewShow, setViewShow] = useState('');

    const onViewShow = (value) => {
        setViewShow(value)
        console.log('value1', value);
    }


    return (
        <>
            <div className='row'>
                <div className='col-sm-12 optionNavbar-linchart text-center'>
                    {/* <p>You are not authorized to see this form</p> */}
                    <Line data={data} options={options} />
                </div>
            </div>

            {/* <nav className={"navbar navbar-expand-lg all-navbar navbar-light bg-light pt-0 pb-0 " + (darkmodes ? "text-dark trans_background border-bottom  " : "text-dark trans_background border-bottom ")}>
                <div class="container-fluid  ps-1 d-flex justify-content-around">
                    <ul class="nav nav-tabs">
                        <li class="nav-item active ps-3 formlink px-5 ">
                            <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")} type="button" onClick={() => onViewShow('view')}><p className="h1"> 6 </p> Views</button>
                        </li>
                        <li class="nav-item formlink px-5 ">
                            <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")} type="button" onClick={() => onViewShow('response')}><p className="h1"> 4 </p> Responses</button>
                        </li>
                        <li class="nav-item formlink px-5 ">
                            <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")} type="button" onClick={() => onViewShow('conversionRate')}><p className="h1"> 64% </p> Conversion Rate</button>
                        </li>
                        <li class="nav-item formlink px-5 ">
                            <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col " + (darkmodes ? "text-white body-dark " : "text-dark body-light ")} type="button" onClick={() => onViewShow('avgTime')}><p className="h1"> 00:00 </p> Avg. Time</button>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <div class="option-navbar-detailsshow mb-4 border-bottom ">
                <div class="p-2 flex-fill d-flex justify-content-center">
                    <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col btn_width_form " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")} type="button" onClick={() => onViewShow('view')}><p className="h1"> 6 </p> Views</button>
                </div>
                <div class="p-2 flex-fill d-flex justify-content-center">
                    <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col btn_width_form " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")} type="button" onClick={() => onViewShow('response')}><p className="h1"> 4 </p> Responses</button>
                </div>
                <div class="p-2 flex-fill d-flex justify-content-center">
                    <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col btn_width_form " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")} type="button" onClick={() => onViewShow('conversionRate')}><p className="h1"> 64% </p> Conversion Rate</button>
                </div>
                <div class="p-2 flex-fill d-flex justify-content-center">
                    <button class={"btn btn-primary btn-lg my-2 my-sm-0 px-5 button_col btn_width_form " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")} type="button" onClick={() => onViewShow('avgTime')}><p className="h1"> 00:00 </p> Avg. Time</button>
                </div>
            </div>
            <Tabs
                defaultActiveKey="traffic"
                // id="uncontrolled-tab-example"
                // className="mb-3 "
                 id="justify-tab-example"
      className="mb-3"
      justify
            >
                <Tab eventKey="traffic" title="TRAFFIC">
                    {viewShow === "response"
                        ? <>
                            <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                    <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                    <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                            <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                    <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                    <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                            <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                    <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                    <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                            <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                    <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
                                    <table className={"table " + (darkmodes ? "text-white bg-dark " : "text-dark bg-light ")}>
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
