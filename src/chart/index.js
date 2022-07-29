import React,{useState} from 'react'
import Chart from 'react-apexcharts';
import {
  ResponsiveContainer,
  LineChart,

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
const  options = {
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  legend: {
    show:true,
    position: 'top',
    floating: true,
    verticalAlign: 'bottom',
    align:'right'
  },
}
const series = [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}]
const ReactApexChart  = ()=> {
  const pdata = [
    {
      name: "SUN",
      ["This week"]: 50,
      ["Last week"]: 30,
    },
    {
      // name: "SUN",
      ["This week"]: 110,
      ["Last week"]: 130,
    },
    {
      name: "MON",
      ["This week"]: 60,
      ["Last week"]: 190,
    },
    {
      // name: "SUN",
      ["This week"]: 290,
      ["Last week"]: 250,
    },
    {
      name: "TUE",
      ["This week"]: 200,
      ["Last week"]: 130,
    },
    {
      // name: "SUN",
      ["This week"]: 115,
      ["Last week"]: 150,
    },
    {
      name: "WED",
      ["This week"]: 130,
      ["Last week"]: 130,
    },
    {
      ["This week"]: 170,
      ["Last week"]: 20,
    },
    {
      name: "THU",
      ["This week"]: 90,
      ["Last week"]: 30,
    },
    {
      ["This week"]: 210,
      ["Last week"]: 15,
    },
    {
      name: "FRI",
      ["This week"]: 240,
      ["Last week"]: 40,
    },
    {
      ["This week"]: 280,
      ["Last week"]: 95,
    },
    {
      name: "SAT",
      ["This week"]: 200,
      ["Last week"]: 180,
    },
  ];
    return (
      <div id="chart">
            {/* <Chart options={options} series={series} type="area" width={500} height={320} /> */}
            <ResponsiveContainer width="100%" aspect={3}>
                    <AreaChart
                      width={700}
                      height={150}
                      data={pdata}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="name"
                        interval={"preserveStartEnd"}
                        axisLine={false}
                        tickLine={false}
                        height={20}
                      />
                      <YAxis axisLine={false} tickCount="4" tickLine={false} />
                      <Legend
                        align="right"
                        verticalAlign="top"
                        iconType="circle"
                      />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey={`This week`}
                        fillOpacity={0.5}
                        stroke={'#1f3bb3'}
                        strokeWidth={2}
                        fill={'#e1ecfc'}
                        activeDot={true}
                        dot={{ strokeWidth: 3 }}
                      />
                      <Area
                        type="monotone"
                        dataKey={`Last week`}
                        fillOpacity={0.5}
                        stroke={'#52cdff'}
                        strokeWidth={2}
                        fill={'#ddf8fe'}
                        activeDot={true}
                        dot={{ strokeWidth: 3 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
      </div>    
    );
}

export default ReactApexChart;