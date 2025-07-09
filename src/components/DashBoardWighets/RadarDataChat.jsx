
import ReactApexChart from 'react-apexcharts';

const RadarDataChart = () => {
  const series = [
    {
      name: 'Spider AI',
      data: [85, 70, 90, 65, 78], // Data-based performance values
    },
    {
      name: 'Security AI',
      data: [60, 85, 95, 40, 60], // Compare with another AI
    }
  ];

  const options = {
    chart: {
      type: 'radar',
      background: 'transparent', // to Make chart background transparent
    },
    title: {
      text: 'AI System Comparison',
      style: {
        color: '#fff',
        fontSize: '18px'
      }
    },
    xaxis: {
      categories: ['Accuracy', 'Speed', 'Threat Response', 'Crawling Depth', 'Autonomy'],
      labels: {
        style: {
          colors: ['#fff', '#fff', '#fff', '#fff', '#fff'],
          fontSize: '13px',
          width: '100%',
        }
      }
    },
    yaxis: {
      show: false
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.2
    },
    colors: ['#00ff99', '#0099ff'],
    legend: {
      labels: {
        colors: '#fff'
      }
    },
    theme: {
      mode: 'dark',
    }
  };

  return (
  
  <div className=" " style={{
   width:"100%"
  
  }} >
    <ReactApexChart options={options} series={series} type="radar" height={340} />
  </div>


  );
};

export default RadarDataChart;
// This component renders a radar chart comparing two AI systems' performance across various metrics.
// It uses ReactApexChart for rendering and includes options for styling, colors, and labels