import React from 'react';

function TeamInfo(props) {
  const team = props.team;
  console.log(team)

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12" key={team.team_key}>
            <div className="container team-info">
              <div className="row">
                <div className="col-4">
                  <div className="emblem-background">
                    <img className="team-emblem" src={team.team_badge} alt="Team Emblem" />
                  </div>
                </div>
                <div className="col-8">
                  <p><strong>Name:</strong> {team.team_name}</p>
                  <p><strong>Area:</strong> {team.team_country}</p>
                  <p><strong>Founded:</strong> {team.team_founded}</p>
                  <p><strong>Coach:</strong> {team.coaches.length > 0 ? team.coaches[0].coach_name : 'Unknown'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
