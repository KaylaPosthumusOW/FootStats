import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'],
      datasets: [ 
        {
          label: 'Goals Scored in Premiere League',
          data: [150, 160, 140, 180, 170, 180, 150, 140], 
          borderColor: '#8F2E4E',
          borderWidth: 2,
          fill: false,
        },
      ],
    };

    // Create the line chart
    const myChart = new Chart(chartRef.current, {
      type: 'line',
      data: data,
    });

    // Cleanup on component unmount
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default LineChart;
