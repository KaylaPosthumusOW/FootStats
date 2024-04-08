import Highlight from './highlights'
import TopScorer from './topScore'
import UpcomingGame from './upcomingGame'
import LinkBlocks from './linkBlocks'


function Dashboard() {
  return (
          <div>
            <h1 className="header">Dashboard</h1>
              <div className="row">
                <div className="col-6">
                  <Highlight />
                </div>
                <div className="col-6">
                  <TopScorer />
                  <UpcomingGame />
                </div>
              </div>

            <div className="row"> 
              <div className="col-6">
                <LinkBlocks />
              </div>
              <div className="col-6">
              <LinkBlocks />
              </div>
            </div>
          </div>
    
  );
}

export default Dashboard;
