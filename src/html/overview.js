import React from 'react';

const Overview = () => {
  return (
    <div className="overview">
    <h1>Overview</h1>
    <div id="map" className="map"></div>
    <div className="stats">
      <div className="stat-item">
        <p>Total Number of Villages: 8</p>
      </div>
      <div className="stat-item">
        <p>Total Number of Urban Areas: 3</p>
      </div>
      <div className="stat-item">
        <p>Total Population Size: 660000</p>
      </div>
      <div className="stat-item">
        <p>Average Land Area: 11.88 sq km</p>
      </div>
    </div>
    <div className="charts">
      <div className="chart-container">
        <h3>Age Distribution</h3>
        <canvas id="ageChart" />
      </div>
      <div className="chart-container">
        <h3>Gender Ratios</h3>
        <canvas id="genderChart" />
      </div>
    </div>
    <div className="barChart_container">
      <div className="barChart">
        <canvas id="barChart" />
      </div>
    </div>
  </div>
  
  );
}

export default Overview;
