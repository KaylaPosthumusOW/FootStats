// LineGraph.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = ({ dataType }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let data;
    switch (dataType) {
      case 'goals':
        data = {
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
        break;
      case 'cards':
        data = {
          labels: ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'],
          datasets: [ 
            {
              label: 'Number of Cards Issued',
              data: [20, 25, 15, 30, 22, 28, 18, 16], 
              borderColor: '#2F8B98',
              borderWidth: 2,
              fill: false,
            },
          ],
        };
        break;
      case 'substitutions':
        data = {
          labels: ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'],
          datasets: [ 
            {
              label: 'Number of Substitutions',
              data: [10, 12, 8, 15, 11, 14, 9, 8], 
              borderColor: '#CA7692',
              borderWidth: 2,
              fill: false,
            },
          ],
        };
        break;
      case 'inactive':
        data = {
          labels: ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'],
          datasets: [ 
            {
              label: 'Number of Inactive Players',
              data: [5, 6, 4, 8, 7, 6, 5, 4], 
              borderColor: '#82B9C1',
              borderWidth: 2,
              fill: false,
            },
          ],
        };
        break;
        case 'possession':
          data = {
            labels: ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'],
            datasets: [ 
              {
                label: 'Possession Percentage',
                data: [50, 52, 48, 55, 53, 56, 51, 49], // Sample data for possession percentage
                borderColor: '#F7D5A0',
                borderWidth: 2,
                fill: false,
              },
            ],
          };
        break;
      default:
        data = {
          labels: [],
          datasets: [],
        };
    }

    const myChart = new Chart(chartRef.current, {
      type: 'line',
      data: data,
    });

    return () => {
      myChart.destroy();
    };
  }, [dataType]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default LineGraph;
