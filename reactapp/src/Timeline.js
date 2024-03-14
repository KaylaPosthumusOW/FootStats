import React from 'react';
import './timeline.css'
import LineGraph from './LineGraph'

function Timeline() {
  return ( 
    <div>
      <h1 className="header">Timeline</h1>
      <button class="btn btn-outline-warning" type="submit">Search</button>
      <div className="container">
        <div classNAme="row">
          <div className="col-12">
            <div className="lineGraph-background">
              <div className="lineGraph">
                <LineGraph />
              </div>

              {/* Radio Buttons */}
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked></input>
                <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
                <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"></input>
                <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;

