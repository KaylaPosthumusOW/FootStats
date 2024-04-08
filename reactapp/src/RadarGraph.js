import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarGraph = ({ player }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!player) return;

    const data = [
      { label: 'Blocked', value: parseInt(player.player_blocks) || 0 },
      { label: 'Shots Total', value: parseInt(player.player_shots_total) || 0 },
      { label: 'Penalty Scored', value: parseInt(player.player_pen_scored) || 0 },
      { label: 'Penalty Missed', value: parseInt(player.player_pen_missed) || 0 },
      { label: 'Total Goals', value: parseInt(player.player_goals) || 0 },
      { label: 'Penalty Won', value: parseInt(player.player_pen_won) || 0 }
    ];

    const radarLabels = data.map(item => item.label);
    const radarValues = data.map(item => item.value);

    const chartData = {
      labels: radarLabels, 
      datasets: [
        {
          label: player.player_name,
          data: radarValues,
          backgroundColor: 'rgba(242, 185, 97, 0.2)',
          borderColor: 'rgba(242, 185, 97, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(242, 185, 97, 1)',
        }
      ],
    };

    const options = {
      scale: {
        ticks: {
          beginAtZero: true,
          max: 10,
        },
      },
    };

    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'radar',
        data: chartData,
        options: options,
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [player]);

  return (
    <div>
      <canvas ref={chartRef} width="300" height="300"></canvas>
    </div>
  );
};

export default RadarGraph;
