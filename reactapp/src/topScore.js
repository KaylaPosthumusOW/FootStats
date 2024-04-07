import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './blocks.css';
import icon from './soccer-player.png';

function TopScorer() {
  const [topScorer, setTopScorer] = useState(null);

  useEffect(() => {
    const fetchScorerData = async () => {
      try {
        const response = await axios.get(
          'https://apiv3.apifootball.com/?action=get_topscorers&league_id=152',
          {
            params: {
              APIkey: '738497c4a9ed8b06fcca13810a0b4388fcf0d64389822aa3cfc9dfbf3aeabc53'
            }
          }
        );
        // Extracting only the first player from the array
        setTopScorer(response.data.slice(0, 1));
        console.log('Data from API:', response.data); // Log fetched data to console
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchScorerData(); // Call the fetchData function
  }, []); // Empty dependency array to execute effect only once

  return (
    <div className="top-scorer">
      <div className="container scorer">
        <div className="row">
          <div className="col-3">
            <div className="icon">
              <img src={icon} alt="soccer-icon" className="soccer-icon" />
            </div>
          </div>
          <div className="col-9">
            <h6>Top Scorer of Premiere Leaque</h6>
            {topScorer && topScorer.map((player, index) => (
              <div key={index}>
                <p className="scorer-name">{player.player_name}</p>
                <p className="team-name">{player.team_name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopScorer;
