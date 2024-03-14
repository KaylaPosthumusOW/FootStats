// BarChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart
    const data = {
      labels: ['Manchester City', 'Liverpool', 'Manchester United', 'Arsenal', 'Brentford'],
      datasets: [
        {
          label: 'Team Scores',
          data: [5, 3, 7, 5, 6, 4],
          backgroundColor: [
            'rgba(47, 139, 152, 0.2)',
            'rgba(242, 185, 97, 0.2)',
            'rgba(143, 46, 78, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(242, 185, 97, 1)',
            'rgba(143, 46, 78, 01)'
          ],
          borderWidth: 1,
        },
      ],
    };

    // Options for the bar chart
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create the bar chart
    const myChart = new Chart(chartRef.current, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Cleanup on component unmount
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="300"></canvas>
    </div>
  );
};

export default BarGraph;
