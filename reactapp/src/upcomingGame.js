import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './blocks.css';

function UpcomingGame() {
  const [upcomingGame, setUpcomingGame] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = '738497c4a9ed8b06fcca13810a0b4388fcf0d64389822aa3cfc9dfbf3aeabc53';
    
    axios.get(`https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=7274&secondTeamId=161&league_id=152&APIkey=${API_KEY}`)
      .then(response => {
        const data = response.data;
        if (data && data.length > 0) {
          setUpcomingGame(data[0]); // Set the first upcoming game
        } else {
          setError('No upcoming games found.');
        }
      })
      .catch(error => {
        console.error('Error Fetching Data:', error);
        setError('Error Fetching Data: ' + error.message);
      });
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="upcoming-block">
      <h6>Head2Head</h6>
      {error && <p className="error">{error}</p>}
      {upcomingGame && (
        <div>
          <p className="date">{upcomingGame.match_date}</p>
          <div className="container">
            <div className="row teams">
              <div className="col-3">
                <p>{upcomingGame.match_hometeam_name}</p>
              </div>
              <div className="col-3">
                <div className="img-placeholder">
                  <img src={upcomingGame.team_home_badge || 'placeholder.png'} alt="Home Team Badge" />
                </div>
              </div>
              <div className="col-3">
                <div className="img-placeholder">
                  <img src={upcomingGame.team_away_badge || 'placeholder.png'} alt="Away Team Badge" />
                </div>
              </div>
              <div className="col-3">
                <p>{upcomingGame.match_awayteam_name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpcomingGame;
