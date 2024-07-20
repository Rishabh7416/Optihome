import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import DeviceControl from './components/DeviceControl';
import AutomationRules from './components/AutomationRules';
import EnergyReports from './components/EnergyReports';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Landingpage from './pages/Landingpage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="device-control" element={<DeviceControl />} />
          <Route path="automation-rules" element={<AutomationRules />} />
          <Route path="energy-reports" element={<EnergyReports />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



