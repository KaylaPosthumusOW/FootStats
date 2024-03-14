import './blocks.css';

function UpcomingGame() {
  return (
   <div className="upcoming-block">
      <h6>Upcoming Game</h6>
      <p className="date">00/00/0000</p>

      <div className="container">
        <div className="row teams">
          <div className="col-3">
            <p>Name</p>
          </div>
          <div className="col-3">
            <div className="img-placeholder"></div>
          </div>
          <div className="col-3">
          <div className="img-placeholder"></div>
          </div>
          <div className="col-3">
          <p>Name</p>
          </div>
        </div>
      </div>
   </div>
    
  );
}

export default UpcomingGame;
