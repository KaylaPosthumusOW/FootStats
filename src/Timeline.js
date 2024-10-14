// Timeline.js
import React, { useState } from 'react';
import './timeline.css';
import LineGraph from './LineGraph';

function Timeline() {
  const [dataType, setDataType] = useState('goals');

  return (
    <div>
      <h1 className="header">Timeline</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="lineGraph-background">
              <div className="lineGraph">
                <LineGraph dataType={dataType} />
              </div>

              {/* Radio Buttons */}
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked onChange={() => setDataType('goals')} />
                <label className="btn btn-outline-warning" htmlFor="btnradio1">Goals Scored</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onChange={() => setDataType('cards')} />
                <label className="btn btn-outline-warning" htmlFor="btnradio2">Cards</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onChange={() => setDataType('substitutions')} />
                <label className="btn btn-outline-warning" htmlFor="btnradio3">Substitution</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" onChange={() => setDataType('inactive')} />
                <label className="btn btn-outline-warning" htmlFor="btnradio4">Inactive</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" onChange={() => setDataType('possession')} />
                <label className="btn btn-outline-warning" htmlFor="btnradio5">Possession</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
