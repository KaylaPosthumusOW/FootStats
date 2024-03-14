import './blocks.css';
import icon from './soccer-player.png'

function TopScorer() {
  return (
    <div className="top-scorer">
        <div className="container scorer">
          <div className="row">
            <div class="col-3">
              <div className="icon">
                  <img src={icon} alt="soccer-icon" className="soccer-icon"></img>
              </div>
              </div>
              <div class="col-9">
              <h6>Top Scorer of Italy's top league</h6>
              <p className="scorer-name">Top Scorer Name</p>
              <p className="team-name">Team Name</p>
              </div>  
          </div>
            
        </div>
    </div>
    
  );
}

export default TopScorer;
