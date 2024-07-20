import React from 'react';
import '../styles/Landingpage.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <h1>OptiHome</h1>
          <div className="auth-buttons">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
      </header>
      <main>
        <section className="overview">
          <h2>Smart Home Automation System</h2>
          <p>
            OptiHome is an advanced smart home automation system designed to seamlessly integrate artificial intelligence and blockchain technology to provide a secure, efficient, and user-friendly experience in managing and optimizing home devices.
          </p>
        </section>
        <section className="features">
          <h2>Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>Intelligent Device Management</h3>
              <p>Control devices, set automation rules, and monitor real-time status.</p>
            </div>
            <div className="feature-item">
              <h3>AI-Driven Optimization</h3>
              <p>Analyze historical data to optimize device usage and reduce energy consumption.</p>
            </div>
            <div className="feature-item">
              <h3>Blockchain Integration</h3>
              <p>Ensure secure data storage, transparency, and integrity with blockchain technology.</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2024 OptiHome. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
