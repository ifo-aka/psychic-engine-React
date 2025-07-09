import ReactApexChart from 'react-apexcharts';


const UIAIWighet=()=>{
      const chartOptions = {
        chart: {
          type: 'bar',
          toolbar: { show: false },
        },
        xaxis: {
          categories: ['Header', 'Sidebar', 'Grid', 'Footer'],
          labels: { style: { colors: '#fff' } }
        },
        yaxis: {
          labels: { style: { colors: '#fff' } }
        },
        colors: ['#00d9ff'],
        theme: { mode: 'dark' },
        grid: { borderColor: '#444' }
      };
    
      const chartSeries = [
        {
          name: 'Refactor Score',
          data: [85, 90, 78, 65],
        },
      ];
    
      return  <div className="bg-gray-900 p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">Layout Refactor Insights</h2>
        <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={300} />
      </div>

}
export default UIAIWighet;