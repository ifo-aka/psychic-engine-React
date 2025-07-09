
import ReactApexChart from 'react-apexcharts';

const LineGraph = () => {
  const series = [
    {
      name: 'Memory Usage',
      data: [100, 5, 50, 5, 48, 80, 20],
    }
  ];

  const options = {
    chart: {
      type: 'line',
      toolbar: { show: false },
        zoom: { enabled: true },
        
      background: 'none',
      
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ['#02b2d4'],
    title: {
      text: 'AI Memory Usage (MB)',
      style: { color: '#fff' }
    },
    grid: {
      borderColor: '#444'
    },
    theme: {
      mode: 'dark'
    }
  };

  return (
    <div className="  ">
      <ReactApexChart options={options} series={series} type="line" height={340}  />
    </div>
  );
};

export default LineGraph;
