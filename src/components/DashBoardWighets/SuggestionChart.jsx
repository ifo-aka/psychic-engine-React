
import ReactApexChart from 'react-apexcharts';

const SuggestionChart = ({ good , bad  }) => {
  const series = [good, bad];

  const options = {
    chart: {
      type: 'pie',
    },
            plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
    labels: ['Marked Good', 'Marked Bad'],
    colors: ['#02b2d4', '#ff4d4d'],
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#ffffff']
      }
    },
    legend: {
      position: 'bottom',
      labels: {
        colors: '#ffffff'
      }
    },
    tooltip: {
      y: {
        formatter: val => `${val} suggestions`
      }
    },
    theme: {
      mode: 'none'
    }
  };

  return (
    <div className="bg-gray-900 text-white  rounded-xl shadow-lg w-full max-w-sm">
      <p className="text-sm font-medium text-gray-300 mb-2">AI Suggestion Feedback</p>
      <ReactApexChart options={options} series={series} type="pie" height={260} />
    </div>
  );
};

export default SuggestionChart;
