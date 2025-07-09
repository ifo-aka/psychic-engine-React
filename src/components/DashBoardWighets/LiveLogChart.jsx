import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LiveLogChart = () => {
  const maxPoints = 20;
  const [series, setSeries] = useState([
    {
      name: 'Log Events',
      data: Array.from({ length: maxPoints }, (_, i) => ({
        x: new Date().getTime() - (maxPoints - i) * 1000,
        y: Math.floor(Math.random() * 10)
      }))
    }
  ]);

  const [options] = useState({
    chart: {
      type: 'area',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: { speed: 200}
      },
      background: 'transparent',
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    xaxis: {
      type: 'datetime',
      labels: { style: { colors: '#fff' } }
    },
    yaxis: {
      labels: { style: { colors: '#fff' } },
      title: {
        text: 'Logs/sec',
        style: { color: '#fff' }
      }
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ['#02b2d4'],
    grid: {
      borderColor: '#02b2d4'
    },
    tooltip: {
      theme: 'dark'
    },
    theme: {
      mode: 'dark'
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint = {
        x: new Date().getTime(),
        y: Math.floor(Math.random() * 10)
      };

      setSeries((prevSeries) => {
        const updatedData = [...prevSeries[0].data, newPoint];
        if (updatedData.length > maxPoints) updatedData.shift();
        return [{ ...prevSeries[0], data: updatedData }];
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-white  rounded-xl shadow-lg w-full max-w-3xl mx-auto " style={{ width: '100%' }}>
      <p className="text-sm font-medium text-gray-300 mb-2">📡 Real-Time Log Activity</p>
      <ReactApexChart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default LiveLogChart;
// This component displays a real-time log activity chart using ApexCharts.
// It simulates log events every second, updating the chart dynamically.