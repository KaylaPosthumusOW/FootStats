import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './blocks.css';

function UpcomingGame() {
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios.get('https://apiv3.apifootball.com/?action=get_teams&league_id=152&APIkey=738497c4a9ed8b06fcca13810a0b4388fcf0d64389822aa3cfc9dfbf3aeabc53')
      .then(response => {
        const slicedData = response.data.slice(0, 2); // Using second and third array items
        setUpcomingGames(slicedData);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        setError('Error Fetching Data: ' + error.message);
        setLoading(false); // Set loading to false in case of error
      });
  }, []); 

  return (
    <div className="upcoming-block">
      <h6>Head2Head</h6>
      {upcomingGames.length > 0 && (
        <div className="container"> 
          {upcomingGames.map((game, index) => (
            <div key={game.team_key}>
              <p className="date">08 / 04 / 2024</p>
              <div className="row teams">
                <div className="col-3 team1">
                  <h5>{index === 0 ? game.team_name : upcomingGames[0].team_name}</h5>
                </div>
                <div className="col-3">
                  <div>
                    <img src={index === 0 ? game.team_badge : upcomingGames[0].team_badge || 'placeholder.png'} alt="Team Badge" className="img-placeholder" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="img-placeholder">
                    <img src={index === 1 ? game.team_badge : upcomingGames[1].team_badge || 'placeholder.png'} alt="Team Badge" className="img-placeholder" />
                  </div>
                </div>
                <div className="col-3 team2">
                  <h5>{index === 1 ? game.team_name : upcomingGames[1].team_name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UpcomingGame;
