// Dashboard.js
import React from 'react';
import DeviceControl from '../components/DeviceControl';
import AutomationRules from '../components/AutomationRules';
import EnergyReports from '../components/EnergyReports';
import '../styles/Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <section>
        <DeviceControl />
      </section>
      <section>
        <AutomationRules />
      </section>
      <section>
        <EnergyReports />
      </section>
    </div>
  );
};

export default Dashboard;

