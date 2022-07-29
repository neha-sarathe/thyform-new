import React, { Component } from 'react';
import {Line, Bar, Doughnut, Pie, Scatter} from 'react-chartjs-2';


 const Chartss = () => {
   
 const  data = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [10, 19, 3, 5, 2, 3],
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
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
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

const areaData = {
  labels: ["2013", "2014", "2015", "2016", "2017"],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
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
    fill: true, // 3: no fill
  }]
};

const areaOptions = {
  plugins: {
    filler: {
      propagate: true
    }
  }
}
const doughnutPieData = {
  datasets: [{
    data: [30, 40, 30],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Pink',
    'Blue',
    'Yellow',
  ]
};

const doughnutPieOptions = {
  responsive: true,
  animation: {
    animateScale: true,
    animateRotate: true
  }
};

const scatterChartData = {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: -10,
      y: 0
    },
    {
      x: 0,
      y: 3
    },
    {
      x: -25,
      y: 5
    },
    {
      x: 40,
      y: 5
    }
    ],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)'
    ],
    borderWidth: 1
  },
  {
    label: 'Second Dataset',
    data: [{
      x: 10,
      y: 5
    },
    {
      x: 20,
      y: -30
    },
    {
      x: -25,
      y: 15
    },
    {
      x: -10,
      y: 5
    }
    ],
    backgroundColor: [
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
    ],
    borderWidth: 1
  }
  ]
}

const scatterChartOptions = {
  scales: {
    xAxes: [{
      type: 'linear',
      position: 'bottom'
    }]
  }
}

  return (
   <>
     {/* <!-- partial --> */}
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Line chart </h4>
                  <Line data={data} options={options} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Bar chart</h4>
                  {/* <canvas id="barChart"></canvas> */}
                  <Bar data={data} options={options} /> 
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Area chart</h4>
                  {/* <canvas id="areaChart"></canvas> */}
                  <Line data={areaData} options={areaOptions} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Doughnut chart</h4>
                  {/* <canvas id="doughnutChart"></canvas> */}
                  <Doughnut data={doughnutPieData} options={doughnutPieOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Pie chart</h4>
                  {/* <canvas id="pieChart"></canvas> */}
                  <Pie data={doughnutPieData} options={doughnutPieOptions} /> 
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Scatter chart</h4>
                  {/* <canvas id="scatterChart"></canvas> */}
                  <Scatter data={scatterChartData} options={scatterChartOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- content-wrapper ends -->
        <!-- partial:../../partials/_footer.html --> */}
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Premium <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin template</a> from BootstrapDash.</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span>
          </div>
        </footer>
        {/* <!-- partial --> */}
      </div></>
  )
}
export default Chartss;