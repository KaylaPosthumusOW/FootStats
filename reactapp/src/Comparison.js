import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './comparison.css';
import TeamInfo from './TeamInfo';
import BarGraph from './BarGraph';
import RadarGraph from './RadarGraph';
import PieChart from './PieChart';

function Comparison() {
  const [teamData, setTeamData] = useState([]);
  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);
  const [selectedPlayerA, setSelectedPlayerA] = useState(null);
  const [selectedPlayerB, setSelectedPlayerB] = useState(null);

  useEffect(() => {
    axios.get('https://apiv3.apifootball.com/?action=get_teams&league_id=152&APIkey=738497c4a9ed8b06fcca13810a0b4388fcf0d64389822aa3cfc9dfbf3aeabc53')
      .then(response => {
        const slicedData = response.data.slice(0, 40);
        setTeamData(slicedData);
      })
      .catch(error => {
        console.error('Error Fetching Data ', error);
      });
  }, []);

  return (
    <div>
      <h1 className="header">Comparison</h1>

      <div className="container">
        {/* Dropdown Buttons */} 
        <div className="row">
          {/* Team A Dropdown */}
          <div className="col-6">
            <select
              onChange={(e) => {
                const selectedTeam = teamData.find((team) => team.team_key === e.target.value);
                setTeamA(selectedTeam);
                setSelectedPlayerA(null); // Reset selected player when team changes
              }}
            >
              <option value="">Choose Your First Team</option>
              {teamData.map(team => (
                <option key={team.team_key} value={team.team_key}>{team.team_name}</option>
              ))}
            </select>
          </div>

          {/* Team B Dropdown */}
          {teamA && (
            <div className="col-6">
              <select
                onChange={(e) => {
                  const selectedTeam = teamData.find((team) => team.team_key === e.target.value);
                  setTeamB(selectedTeam);
                  setSelectedPlayerB(null); // Reset selected player when team changes
                }}
              >
                <option value="">Choose Your Second Team</option>
                {teamData.map(team => (
                  <option key={team.team_key} value={team.team_key}>{team.team_name}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Team Info */}
      {teamA && teamB && (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <TeamInfo team={teamA} />
            </div>
            <div className="col-6">
              <TeamInfo team={teamB} />
            </div>
          </div>
        </div>
      )}

      {/* LineGraph Comparison */}
      {teamA && teamB && (
        <div className="container BarGraphs">
          <div className="row">
            <div className="col-6">
              <div className="BarGraphs-background">
                <h3>Team Players Shots Total</h3>
                <div className="barGraph">
                  <BarGraph team={teamA} />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="BarGraphs-background">
                <h3>Team Players Shots Total</h3>
                <div className="barGraph">
                  <BarGraph team={teamB} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Player Dropdowns */}
      {teamA && teamB && (
        <div className="container dropdown2">
          <div className="row">
            <div className="col-6">
              <select onChange={(e) => {
                const selectedPlayer = teamA.players.find((players) => players.player_id === e.target.value);
                setSelectedPlayerA(selectedPlayer);
              }}>
                <option value="">Choose Your Player from Team A</option>
                {teamA.players.map(players => (
                  <option key={players.players_id} value={players.player_id}>{players.player_name}</option>
                ))}
              </select>
            </div>

            <div className="col-6">
              <select onChange={(e) => {
                const selectedPlayer = teamB.players.find((players) => players.player_id === e.target.value);
                setSelectedPlayerB(selectedPlayer);
              }}>
                <option value="">Choose Your Player from Team B</option>
                {teamB.players.map(players => (
                  <option key={players.player_id} value={players.player_id}>{players.player_name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Radar Chart Comparison */}
      {selectedPlayerA && selectedPlayerB && (
        <div className="container radarGraphs">
          <div className="row">
            <div className="col-6">
              <div className="RadarGraphs-background">
                <h3>Player Radar Graph</h3>
                <div className="RadarGraphs">
                <RadarGraph player={selectedPlayerA} /></div>
              </div>
            </div>
            <div className="col-6">
              <div className="RadarGraphs-background">
                <h3>Player Radar Graph</h3>
                <div className="RadarGraphs">
                <RadarGraph player={selectedPlayerB} /></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pie Chart Comparison */}
      {selectedPlayerA && selectedPlayerB && (
        <div className="container radarGraphs">
          <div className="row">
            <div className="col-6">
              <div className="RadarGraphs-background">
                <h3>Player Pie Chart</h3>
                <PieChart player={selectedPlayerA} />
              </div>
            </div>
            <div className="col-6">
              <div className="RadarGraphs-background">
                <h3>PLayer Pie Chart</h3>
                <PieChart player={selectedPlayerB} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comparison;
