import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = (props) => {
  const chartRef = useRef(null);
  const team = props.team;

  useEffect(() => {
    if (!team) return; // Exit early if team data is not available

    // Filter out players with zero shots total
    const filteredPlayers = team.players.filter(player => player.player_shots_total > 0);

    const playerNames = filteredPlayers.map(player => player.player_name);
    const playerShots = filteredPlayers.map(player => player.player_shots_total);

    const data = {
      labels: playerNames,
      datasets: [{
        label: 'Total Shots on Goal',
        backgroundColor: 'rgba(47, 139, 152, 0.5)',
        borderColor: 'rgba(47, 139, 152, 1)',
        borderWidth: 1,
        data: playerShots
      }]
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, config);
      return () => myChart.destroy();
    }
  }, [team]);

  return <canvas ref={chartRef} />;
};

export default BarGraph;
