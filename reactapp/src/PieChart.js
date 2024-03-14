// PieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the pie chart
    const data = {
      labels: ['Goals Scored', 'Assists', 'Possession', 'Shots on Target'],
      datasets: [
        {
          data: [45, 30, 15, 20], // Example percentages (adjust as needed)
          backgroundColor: ['#2F8B98', '#CA7692', '#F2B961', '#F7D5A0'], // Example colors
        },
      ],
    };

    // Options for the pie chart
    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    // Create the pie chart
    const myChart = new Chart(chartRef.current, {
      type: 'pie',
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
      <canvas ref={chartRef} width="300" height="300"></canvas>
    </div>
  );
};

export default PieChart;
