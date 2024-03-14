import React from 'react';
import './comparison.css'
import BarGraph from './BarGraph'
import RadarGraph from './RadarGraph'
import PieChart from './PieChart'

function Comparison() {
  return (
    <div>
      <h1 className="header">Comparison</h1>

      <div className="container">
        <div className="row">
          <div className="col-6">
          <button class="btn btn-outline-warning" type="submit">Search</button>
            <div className="container team-info">
              <div className="row">
                <div className="col-4">
                  <div className="team-emblem"></div>
                </div>
                <div className="col-8">
                  <p><strong>Name:</strong></p>
                  <p><strong>Area:</strong></p>
                  <p><strong>Founded:</strong></p>
                  <p><strong>Coach:</strong></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
          <button class="btn btn-outline-warning " type="submit">Search</button>
          <div className="container team-info">
              <div className="row">
                <div className="col-4">
                  <div className="team-emblem"></div>
                </div>
                <div className="col-8">
                  <p><strong>Name:</strong></p>
                  <p><strong>Area:</strong></p>
                  <p><strong>Founded:</strong></p>
                  <p><strong>Coach:</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* LineGraph Comparison */}
      <div className="container BarGraphs">
        <div className="row">
          <div className="col-6">
          <div className="BarGraphs-background">
              <h3>Header</h3>
                <div className="barGraph">
                  <BarGraph />
                </div>
            </div>
          </div>
          <div className="col-6">
            <div className="BarGraphs-background">
              <h3>Header</h3>
                <div className="barGraph">
                  <BarGraph />
                </div>
            </div>
          </div>
        </div>
      </div>

{/* Radar Chart comparison */}
      <div className="container radarGraphs">
        <div className="row">
          <div className="col-6">
            <div className="RadarGraphs-background">
              <h3>Header</h3>
                <div className="RadarGraphs">
                  <RadarGraph />
                </div>
            </div>
          </div>
          <div className="col-6">
            <div className="RadarGraphs-background">
              <h3>Header</h3>
                <div className="RadarGraphs">
                  <RadarGraph />
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container PieCharts">
        <div className="row">
          <div className="col-6">
            <div className="PieChart-background">
              <h3>Header</h3>
                <div className="PieChart">
                  <PieChart />
                </div>
            </div>
          </div>
          <div className="col-6">
            <div className="PieChart-background">
              <h3>Header</h3>
                <div className="PieChart">
                  <PieChart />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comparison;

