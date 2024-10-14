// PieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ player }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!player) return;

    const data = {
      labels: ['Fouls Committed', 'Yellow Cards', 'Tackles Made', 'Saves Made', 'Red Cards'],
      datasets: [
        {
          data: [player.player_fouls_committed, player.player_yellow_cards, player.player_tackles_made, player.player_saves_made, player.player_red_cards],
          backgroundColor: ['#2F8B98', '#F2B961', '#CA7692', '#F7D5A0', '#FF5634'], // Example colors
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    const myChart = new Chart(chartRef.current, {
      type: 'pie',
      data: data,
      options: options,
    });

    return () => {
      myChart.destroy();
    };
  }, [player]);

  return (
    <div>
      <canvas ref={chartRef} width="300" height="300"></canvas>
    </div>
  );
};

export default PieChart;
