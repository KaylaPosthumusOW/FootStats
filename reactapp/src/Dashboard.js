import Highlight from './highlights'
import TopScorer from './topScore'
import UpcomingGame from './upcomingGame'
import LinkBlocks from './linkBlocks'


function Dashboard() {
  return (
    //use this file to define the routes that you want to be navigating to
    //just add the navbar component only
    //navbar then routes
          <div>
            <h1 className="header">Dashboard</h1>
            {/* <div className="container"> */}
              <div className="row">
                <div className="col-6">
                  <Highlight />
                </div>
                <div className="col-6">
                  <TopScorer />
                  <UpcomingGame />
                </div>
              </div>
            {/* </div> */}

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
