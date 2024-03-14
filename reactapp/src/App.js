import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Comparison from './Comparison'
import Timeline from './Timeline'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-colour">
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Navbar />
            </div>
            <div className="col-10">
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/Comparison" element={<Comparison />} />
                <Route path="/Timeline" element={<Timeline />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
