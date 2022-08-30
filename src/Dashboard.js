import React, { useState } from 'react'
import ReactApexChart from './chart'
import Chart from 'react-apexcharts';
import { PieChart } from "react-minimal-pie-chart";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
// import "./Dashboard.css";
import { Dropdown } from "react-bootstrap";
// import { PieChart } from "react-minimal-pie-chart";
import Sidbar from './Sidbar';
import { Doughnut } from 'react-chartjs-2';

const bar_data = [
  {
    name: "JAN",
    ["Last week"]: 110,
    ["This week"]: 215,
    // amt: 2400,
  },
  {
    name: "FEB",
    ["Last week"]: 290,
    ["This week"]: 220,
    // amt: 2210,
  },
  {
    name: "MAR",
    ["Last week"]: 210,
    ["This week"]: 200,
    // amt: 2290,
  },
  {
    name: "APR",
    ["Last week"]: 250,
    ["This week"]: 190,
    // amt: 2000,
  },
  {
    name: "MAY",
    ["Last week"]: 290,
    ["This week"]: 220,
    // amt: 2181,
  },
  {
    name: "JUN",
    ["Last week"]: 230,
    ["This week"]: 110,
    // amt: 2500,
  },
  {
    name: "JUL",
    ["Last week"]: 290,
    ["This week"]: 210,
    // amt: 2100,
  },
  {
    name: "AUG",
    ["Last week"]: 210,
    ["This week"]: 110,
    // amt: 2100,
  },
  {
    name: "SEP",
    ["Last week"]: 280,
    ["This week"]: 205,
    // amt: 2100,
  },
  {
    name: "OCT",
    ["Last week"]: 220,
    ["This week"]: 202,
    // amt: 2100,
  },
  {
    name: "NOV",
    ["Last week"]: 0,
    ["This week"]: 201,
    // amt: 2100,
  },
  {
    name: "DEC",
    ["Last week"]: 300,
    ["This week"]: 150,
    amt: 2100,
  },
];

export const Dashboard = (props) => {
  console.log(props.theme, 'theme123456');
  
  const [seriesData, setSeriesData] = useState([{
    name: 'Net Profit',
    data: [18, 25, 39, 11, 24]
  }]);
  const [optionData, setOptionData] = useState({
    chart: {
      type: 'bar',
      height: 100,
      colors: ['red'],

      toolbar: {
        show: true,
        tools: {
          download: false
        }
      }
    },
    grid: {
      show: false,      // you can either change hear to disable all grids
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',

      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
    },
    yaxis: {
      title: {
        text: ' '
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  });
  const donutdata = {
    labels: ['Total', 'Net', 'Gross', 'AVG'],
    datasets: [
      {
        label: 'Attendance for Week 1',
        data: [55, 25, 25, 25],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(232,99,132,1)',
          'rgba(232,211,6,1)',
          'rgba(54,162,235,1)',
          'rgba(255,159,64,1)',
        ],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
      }

    ]
  }

  const donutoptions = {
    cornerRadius: 19,
    plugins: {
      title: {
        display: true,
        text: 'Doughnut Chart',
        color: 'blue',
        font: {
          size: 34
        },
        padding: {
          top: 30,
          bottom: 30
        },
        responsive: true,
        animation: {
          animateScale: true,
        }
      },

      legend: {
        legend: {
          cursor: "pointer",
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            boxWidth: 10,
          }
        }
      }
    }
  }
  const linedata = [
    {
      name: "sun",
      datavalue: 30,
    },
    {
      name: "sun",
      datavalue: 38,
    },
    {
      name: "sun",
      datavalue: 50,
    },
    {
      name: "sun",
      datavalue: 25,
    },
    {
      name: "sun",
      datavalue: 20,
    },
    {
      name: "sun",
      datavalue: 50,
    },
  ];

  return (
    <>

      <div className="main-panel dashboard-margin">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-sm-12">
              <div className="home-tab">
                <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                  {/* <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#audiences" role="tab" aria-selected="false">Audiences</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#demographics" role="tab" aria-selected="false">Demographics</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#more" role="tab" aria-selected="false">More</a>
                    </li>
                  </ul> */}
                  <div>
                    {/* <div className="btn-wrapper">
                      <a href="#" className="btn btn-otline-dark align-items-center"><i className="icon-share"></i> Share</a>
                      <a href="#" className="btn btn-otline-dark"><i className="icon-printer"></i> Print</a>
                      <a href="#" className="btn btn-primary text-white me-0"><i className="icon-download"></i> Export</a>
                    </div> */}
                  </div>
                </div>
                <div className="tab-content tab-content-basic">
                  <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="statistics-details d-flex align-items-center justify-content-between">
                          <div>
                            <p className="statistics-title">Bounce Rate</p>
                            <h3 className={"rate-percentage " + (props.darkmodes ? "text-white body-dark" : "text-dark body-light")}>32.53%</h3>
                            <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>-0.5%</span></p>
                          </div>
                          <div>
                            <p className="statistics-title">Page Views</p>
                            <h3 className={"rate-percentage " + (props.darkmodes ? "text-white body-dark" : "text-dark body-light")}>7,682</h3>
                            <p className="text-success d-flex"><i className="mdi mdi-menu-up"></i><span>+0.1%</span></p>
                          </div>
                          <div>
                            <p className="statistics-title">New Sessions</p>
                            <h3 className={"rate-percentage " + (props.darkmodes ? "text-white body-dark" : "text-dark body-light")}>68.8</h3>
                            <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>68.8</span></p>
                          </div>
                          <div className="d-none d-md-block">
                            <p className="statistics-title">Avg. Time on Site</p>
                            <h3 className={"rate-percentage " + (props.darkmodes ? "text-white body-dark" : "text-dark body-light")}>2m:35s</h3>
                            <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>+0.8%</span></p>
                          </div>
                          <div className="d-none d-md-block">
                            <p className="statistics-title">New Sessions</p>
                            <h3 className={"rate-percentage " + (props.darkmodes ? "text-white body-dark" : "text-dark body-light")}>68.8</h3>
                            <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>68.8</span></p>
                          </div>
                          <div className="d-none d-md-block">
                            <p className="statistics-title">Avg. Time on Site</p>
                            <h3 className={"rate-percentage " + (props.darkmodes ? "text-white body-dark" : "text-dark body-light")}>2m:35s</h3>
                            <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>+0.8%</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                            <div className={"card card-rounded " + (props.darkmodes ? "text-white dash-chart-dark" : "text-dark dash-chart-light")}>
                              <div className="card-body">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                  <div>
                                    <h4 className={"card-title card-title-dash "+ (props.darkmodes ? "text-white " : "text-dark ")}>Performance Line Chart</h4>
                                    {/* <h5 className="card-subtitle card-subtitle-dash">Lorem Ipsum is simply dummy text of the printing</h5> */}
                                  </div>
                                  <div id="performance-line-legend">

                                  </div>
                                </div>
                                <div className="chartjs-wrapper mt-4">
                                  <ReactApexChart />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div className={"card  card-rounded Summary-status " + (props.darkmodes ? "text-white dash-chart-dark" : "text-dark bg-primary")}>
                              <div className="card-body pb-0">
                                <h4 className="card-title card-title-dash text-white mb-4">Status Summary</h4>
                                <div className="row">
                                  <div className="col-sm-4">
                                    <p className="status-summary-ight-white mb-1">Closed Value</p>
                                    <h2 className="text-info">357</h2>
                                  </div>
                                  <div className="col-sm-8">
                                    <div className="status-summary-chart-wrapper pb-4">
                                      <div className="isecstatus-div">
                                        <ResponsiveContainer width="100%" aspect={3}>
                                          <LineChart
                                            data={linedata}
                                          // margin={{
                                          //   top: 10,
                                          //   right: 120,
                                          //   left: 40,
                                          //   bottom: 0,
                                          // }}
                                          >
                                            <Line
                                              dataKey="datavalue"
                                              type="monotone"
                                              stroke="#01b6a0"
                                              strokeWidth={5}
                                              dot={false}
                                            />
                                          </LineChart>
                                        </ResponsiveContainer>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div className={"card card-rounded " + (props.darkmodes ? "text-white dash-chart-dark" : "text-dark dash-chart-light")}>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                                      <div className="circle-progress-width">
                                        <div id="totalVisitors" className="progressbar-js-circle pr-2"><div class="spinner-border spinner-border-md text-primary" role="status">
                                          <span class="visually-hidden">Loading...</span>
                                        </div></div>
                                      </div>
                                      <div>
                                        <p className="text-small mb-2">Total Visitors</p>
                                        <h4 className={"mb-0 fw-bold "+ (props.darkmodes ? "text-white " : "text-dark ")}>26.80%</h4>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="circle-progress-width">
                                        <div id="visitperday" className="progressbar-js-circle pr-2"><div class="spinner-border text-light" role="status">
                                          <span class="visually-hidden">Loading...</span>
                                        </div></div>
                                      </div>
                                      <div>
                                        <p className="text-small mb-2">Visits per day</p>
                                        <h4 className={"mb-0 fw-bold " + (props.darkmodes ? "text-white " : "text-dark ")}>9065</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-md-12">
                            {/* <div className="row abc"> */}
                            {/* <div className="col-xl-6 col-lg-12 grid-margin stretch-card pqr">
                <div className="card second-row"></div>
              </div> */}
                            {/* <div className="col-md-12 grid-margin pqr"> */}
                            <div className={"card bar-card "  + (props.darkmodes ? "text-white dash-chart-dark" : "text-dark dash-chart-light")}>
                              <div className="card-body">
                                <h4 className={"mb-0 chart-heading "+ (props.darkmodes ? "text-white " : "text-dark ")}>Market Overview</h4>
                                {/* <div className="bar-chart-para d-flex align-items-center justify-content-between w-100">
                                  <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </p>
                                  <div className="dropdown">
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        variant="btn btn-outline-secondary dropdown-toggle"
                                        id="dropdownMenuButtons4"
                                      >
                                        This month
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item >
                                          Daily
                                        </Dropdown.Item>
                                        <Dropdown.Item >
                                          Weekly
                                        </Dropdown.Item>
                                        <Dropdown.Item >
                                          Monthly
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </div> */}
                                <div className="d-flex align-items-end justify-content-between mt-3">
                                  <div className="d-flex align-items-end">
                                    <h3 className={"mb-0 font-weight-semibold bar-doller "+ (props.darkmodes ? "text-white " : "text-dark ")}>$36,2531.00</h3>
                                    <h4 className={"mb-0 font-weight-medium mr-2 ml-2 mb-1 usd-data "+ (props.darkmodes ? "text-white " : "text-dark ")}>USD</h4>
                                    <h4 className="mb-0 text-success font-weight-semibold mb-1 ms-2">
                                      (+1.37%)
                                    </h4>
                                  </div>
                                  <div class="d-flex justify-content-between mx-4 chart-color">
                                    <div><span class="dot1 mx-2"></span>This week</div>
                                    <div><span class="dot2 mx-2"></span>Last week</div></div>
                                </div>
                                <div>
                                  <BarChart
                                    width={650}
                                    height={300}
                                    data={bar_data}
                                    margin={{
                                      top: 20,
                                      right: 5,
                                      left: 2,
                                      bottom: 5,
                                    }}
                                  >
                                    <CartesianGrid vertical={false} />
                                    <XAxis dataKey="name" tickLine={false} />
                                    <YAxis axisLine={false} tickCount="4" tickLine={false} />
                                    <Tooltip />

                                    <Bar
                                      dataKey={`This week`}
                                      stackId="a"
                                      fill="#dc143c"
                                      barSize={12}
                                    // background={true}

                                    />
                                    <Bar
                                      dataKey={`Last week`}
                                      stackId="a"
                                      fill="#1f3bb3"
                                      barSize={12}
                                    // background={true}
                                    />
                                  </BarChart>
                                </div>
                              </div>
                            </div>
                            {/* </div> */}

                            {/* <div className="col-md-12 grid-margin"></div> */}
                            {/* </div> */}
                          </div>
                        </div>
                        {/* <div className="row flex-grow">
                          <div className="col-12 grid-margin stretch-card">
                            <div className="card card-rounded table-darkBGImg">
                              <div className="card-body">
                                <div className="col-sm-8">
                                  <h3 className="text-white upgrade-info mb-0">
                                    Enhance your <span className="fw-bold">Campaign</span> for better outreach
                                  </h3>
                                  <a href="#" className="btn btn-info upgrade-btn">Upgrade Account!</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="row flex-grow">
                          <div className="col-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                  <div>
                                    <h4 className="card-title card-title-dash">Pending Requests</h4>
                                    <p className="card-subtitle card-subtitle-dash">You have 50+ new requests</p>
                                  </div>
                                  <div>
                                    <button className="btn btn-primary btn-lg text-white mb-0 me-0" type="button"><i className="mdi mdi-account-plus"></i>Add new member</button>
                                  </div>
                                </div>
                                <div className="table-responsive  mt-1">
                                  <table className="table select-table">
                                    <thead>
                                      <tr>
                                        <th>
                                          <div className="form-check form-check-flat mt-0">
                                            <label className="form-check-label">
                                              <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                          </div>
                                        </th>
                                        <th>Customer</th>
                                        <th>Company</th>
                                        <th>Progress</th>
                                        <th>Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <div className="form-check form-check-flat mt-0">
                                            <label className="form-check-label">
                                              <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex ">
                                            <img src="../../images/faces/face1.jpg" alt="" />
                                            <div>
                                              <h6>Brandon Washington</h6>
                                              <p>Head admin</p>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <h6>Company name 1</h6>
                                          <p>company type</p>
                                        </td>
                                        <td>
                                          <div>
                                            <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                              <p className="text-success">79%</p>
                                              <p>85/162</p>
                                            </div>
                                            <div className="progress progress-md">
                                              <div className="progress-bar bg-success" role="progressbar" style={{ "width": "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                          </div>
                                        </td>
                                        <td><div className="badge badge-opacity-warning">In progress</div></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="form-check form-check-flat mt-0">
                                            <label className="form-check-label">
                                              <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <img src="../../images/faces/face2.jpg" alt="" />
                                            <div>
                                              <h6>Laura Brooks</h6>
                                              <p>Head admin</p>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <h6>Company name 1</h6>
                                          <p>company type</p>
                                        </td>
                                        <td>
                                          <div>
                                            <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                              <p className="text-success">65%</p>
                                              <p>85/162</p>
                                            </div>
                                            <div className="progress progress-md">
                                              <div className="progress-bar bg-success" role="progressbar" style={{ "width": "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                          </div>
                                        </td>
                                        <td><div className="badge badge-opacity-warning">In progress</div></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="form-check form-check-flat mt-0">
                                            <label className="form-check-label">
                                              <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <img src="../../images/faces/face3.jpg" alt="" />
                                            <div>
                                              <h6>Wayne Murphy</h6>
                                              <p>Head admin</p>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <h6>Company name 1</h6>
                                          <p>company type</p>
                                        </td>
                                        <td>
                                          <div>
                                            <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                              <p className="text-success">65%</p>
                                              <p>85/162</p>
                                            </div>
                                            <div className="progress progress-md">
                                              <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "38%" }} aria-valuenow="38" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                          </div>
                                        </td>
                                        <td><div className="badge badge-opacity-warning">In progress</div></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="form-check form-check-flat mt-0">
                                            <label className="form-check-label">
                                              <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <img src="../../images/faces/face4.jpg" alt="" />
                                            <div>
                                              <h6>Matthew Bailey</h6>
                                              <p>Head admin</p>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <h6>Company name 1</h6>
                                          <p>company type</p>
                                        </td>
                                        <td>
                                          <div>
                                            <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                              <p className="text-success">65%</p>
                                              <p>85/162</p>
                                            </div>
                                            <div className="progress progress-md">
                                              <div className="progress-bar bg-danger" role="progressbar" style={{ "width": "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                          </div>
                                        </td>
                                        <td><div className="badge badge-opacity-danger">Pending</div></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="form-check form-check-flat mt-0">
                                            <label className="form-check-label">
                                              <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <img src="../../images/faces/face5.jpg" alt="" />
                                            <div>
                                              <h6>Katherine Butler</h6>
                                              <p>Head admin</p>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <h6>Company name 1</h6>
                                          <p>company type</p>
                                        </td>
                                        <td>
                                          <div>
                                            <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                              <p className="text-success">65%</p>
                                              <p>85/162</p>
                                            </div>
                                            <div className="progress progress-md">
                                              <div className="progress-bar bg-success" role="progressbar" style={{ "width": "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                          </div>
                                        </td>
                                        <td><div className="badge badge-opacity-success">Completed</div></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="row flex-grow">
                          <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body card-rounded">
                                <h4 className="card-title  card-title-dash">Recent Events</h4>
                                <div className="list align-items-center border-bottom py-2">
                                  <div className="wrapper w-100">
                                    <p className="mb-2 font-weight-medium">
                                      Change in Directors
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1"></i>
                                        <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="list align-items-center border-bottom py-2">
                                  <div className="wrapper w-100">
                                    <p className="mb-2 font-weight-medium">
                                      Other Events
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1"></i>
                                        <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="list align-items-center border-bottom py-2">
                                  <div className="wrapper w-100">
                                    <p className="mb-2 font-weight-medium">
                                      Quarterly Report
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1"></i>
                                        <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="list align-items-center border-bottom py-2">
                                  <div className="wrapper w-100">
                                    <p className="mb-2 font-weight-medium">
                                      Change in Directors
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1"></i>
                                        <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="list align-items-center pt-3">
                                  <div className="wrapper w-100">
                                    <p className="mb-0">
                                      <a href="#" className="fw-bold text-primary">Show all <i className="mdi mdi-arrow-right ms-2"></i></a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                  <h4 className="card-title card-title-dash">Activities</h4>
                                  <p className="mb-0">20 finished, 5 remaining</p>
                                </div>
                                <ul className="bullet-line-list">
                                  <li>
                                    <div className="d-flex justify-content-between">
                                      <div><span className="text-light-green">Ben Tossell</span> assign you a task</div>
                                      <p>Just now</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex justify-content-between">
                                      <div><span className="text-light-green">Oliver Noah</span> assign you a task</div>
                                      <p>1h</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex justify-content-between">
                                      <div><span className="text-light-green">Jack William</span> assign you a task</div>
                                      <p>1h</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex justify-content-between">
                                      <div><span className="text-light-green">Leo Lucas</span> assign you a task</div>
                                      <p>1h</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex justify-content-between">
                                      <div><span className="text-light-green">Thomas Henry</span> assign you a task</div>
                                      <p>1h</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex justify-content-between">
                                      <div><span className="text-light-green">Ben Tossell</span> assign you a task</div>
                                      <p>1h</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex justify-content-between">
                                      <div><span className="text-light-green">Ben Tossell</span> assign you a task</div>
                                      <p>1h</p>
                                    </div>
                                  </li>
                                </ul>
                                <div className="list align-items-center pt-3">
                                  <div className="wrapper w-100">
                                    <p className="mb-0">
                                      <a href="#" className="fw-bold text-primary">Show all <i className="mdi mdi-arrow-right ms-2"></i></a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <div className="col-lg-4 d-flex flex-column">
                        {/* <div className="row flex-grow">
                          <div className="col-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <h4 className="card-title card-title-dash">Todo list</h4>
                                      <div className="add-items d-flex mb-0">
                                        {/* <!-- <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?"> --> */}
                        {/*    <button className="add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-12p"><i className="mdi mdi-plus"></i></button>
                                      </div>
                                    </div>
                                    <div className="list-wrapper">
                                      <ul className="todo-list todo-list-rounded">
                                        <li className="d-block">
                                          <div className="form-check w-100">
                                            <label className="form-check-label">
                                              <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded"></i>
                                            </label>
                                            <div className="d-flex mt-2">
                                              <div className="ps-4 text-small me-3">24 June 2020</div>
                                              <div className="badge badge-opacity-warning me-3">Due tomorrow</div>
                                              <i className="mdi mdi-flag ms-2 flag-color"></i>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="d-block">
                                          <div className="form-check w-100">
                                            <label className="form-check-label">
                                              <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded"></i>
                                            </label>
                                            <div className="d-flex mt-2">
                                              <div className="ps-4 text-small me-3">23 June 2020</div>
                                              <div className="badge badge-opacity-success me-3">Done</div>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="form-check w-100">
                                            <label className="form-check-label">
                                              <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded"></i>
                                            </label>
                                            <div className="d-flex mt-2">
                                              <div className="ps-4 text-small me-3">24 June 2020</div>
                                              <div className="badge badge-opacity-success me-3">Done</div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="border-bottom-0">
                                          <div className="form-check w-100">
                                            <label className="form-check-label">
                                              <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded"></i>
                                            </label>
                                            <div className="d-flex mt-2">
                                              <div className="ps-4 text-small me-3">24 June 2020</div>
                                              <div className="badge badge-opacity-danger me-3">Expired</div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div className="row flex-grow">
                          <div className="col-md-12 grid-margin">
                            <div className={"card pie-chart" + (props.darkmodes ? "text-white dash-chart-dark" : "text-dark dash-chart-light")}>
                              <div className="Todocard-body">
                                <h4 className={"mt-3 ml-4 ms-4 "+ (props.darkmodes ? "text-white " : "text-dark ")}>Type By Amount</h4>
                                <div>
                                  <PieChart
                                    radius={30}

                                    // label={({ dataEntry }) => dataEntry.value}
                                    // labelStyle={{
                                    //   fontSize: '5px',
                                    //   fontFamily: 'sans-serif',
                                    //   fill: '#E38627',
                                    // }}
                                    // labelPosition={100}
                                    lineWidth={50}
                                    data={[
                                      { title: "One", value: 40, color: "#dc143c" },
                                      { title: "Two", value: 15, color: "#FDD0C7" },
                                      { title: "Three", value: 10, color: "#52CDFF" },
                                      { title: "Three", value: 20, color: "#81DADA" },
                                    ]}
                                  />

                                  {/* <ul className="d-flex align-items-center justify-content-between w-100">
                        <li>
                          {" "}
                          <span>Total</span>
                        </li>
                        <li>Net</li>
                        <li>Gross</li>
                        <li>AVG</li>
                      </ul> */}
                                </div>
                                {/* <p>hello</p> */}
                                <div class="d-flex justify-content-between mx-4 type-dot">
                                  <div><span class="dot1 mx-2"></span>Total</div>
                                  <div><span class="dot2 mx-2"></span>Net</div>
                                  <div><span class="dot3 mx-2"></span>Gross</div>
                                  <div><span class="dot4 mx-2"></span>AVG</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row flex-grow">
                          <div className="col-12 grid-margin stretch-card">
                            <div className={"card card-rounded "  + (props.darkmodes ? "text-white dash-chart-dark" : "text-dark dash-chart-light")}>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                      <div>
                                        <h4 className={"card-title card-title-dash"+ (props.darkmodes ? "text-white " : "text-dark ")}>Leave Report</h4>
                                      </div>
                                      {/* <div>
                                        <div className="dropdown">
                                          <button className="btn btn-light dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Month Wise </button>
                                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                            <h6 className="dropdown-header">week Wise</h6>
                                            <a className="dropdown-item" href="#">Year Wise</a>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                    <div className="mt-3">
                                      <Chart options={optionData} series={seriesData} type="bar" height={200} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="row flex-grow">
                          <div className="col-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                      <div>
                                        <h4 className="card-title card-title-dash">Top Performer</h4>
                                      </div>
                                    </div>
                                    <div className="mt-3">
                                      <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                          <img className="img-sm rounded-10" src="../../images/faces/face1.jpg" alt="profile" />
                                          <div className="wrapper ms-3">
                                            <p className="ms-1 mb-1 fw-bold">Brandon Washington</p>
                                            <small className="text-muted mb-0">162543</small>
                                          </div>
                                        </div>
                                        <div className="text-muted text-small">
                                          1h ago
                                        </div>
                                      </div>
                                      <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                          <img className="img-sm rounded-10" src="../../images/faces/face2.jpg" alt="profile" />
                                          <div className="wrapper ms-3">
                                            <p className="ms-1 mb-1 fw-bold">Wayne Murphy</p>
                                            <small className="text-muted mb-0">162543</small>
                                          </div>
                                        </div>
                                        <div className="text-muted text-small">
                                          1h ago
                                        </div>
                                      </div>
                                      <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                          <img className="img-sm rounded-10" src="../../images/faces/face3.jpg" alt="profile" />
                                          <div className="wrapper ms-3">
                                            <p className="ms-1 mb-1 fw-bold">Katherine Butler</p>
                                            <small className="text-muted mb-0">162543</small>
                                          </div>
                                        </div>
                                        <div className="text-muted text-small">
                                          1h ago
                                        </div>
                                      </div>
                                      <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                          <img className="img-sm rounded-10" src="../../images/faces/face4.jpg" alt="profile" />
                                          <div className="wrapper ms-3">
                                            <p className="ms-1 mb-1 fw-bold">Matthew Bailey</p>
                                            <small className="text-muted mb-0">162543</small>
                                          </div>
                                        </div>
                                        <div className="text-muted text-small">
                                          1h ago
                                        </div>
                                      </div>
                                      <div className="wrapper d-flex align-items-center justify-content-between pt-2">
                                        <div className="d-flex">
                                          <img className="img-sm rounded-10" src="../../images/faces/face5.jpg" alt="profile" />
                                          <div className="wrapper ms-3">
                                            <p className="ms-1 mb-1 fw-bold">Rafell John</p>
                                            <small className="text-muted mb-0">Alaska, USA</small>
                                          </div>
                                        </div>
                                        <div className="text-muted text-small">
                                          1h ago
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- content-wrapper ends --> */}
        {/* <!-- partial:partials/_footer.html --> */}
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            {/* <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Premium <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin template</a> from BootstrapDash.</span> */}
            {/* <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span> */}
          </div>
        </footer>
        {/* <!-- partial --> */}
      </div>
      {/* <!-- main-panel ends --> */}</>
  )
}
export default Dashboard;