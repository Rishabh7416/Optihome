// EnergyReports.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import '../styles/EnergyReports.css'; // Import the CSS file

Chart.register(...registerables);

const EnergyReports = () => {
  const [energyData, setEnergyData] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [deviceEnergyData, setDeviceEnergyData] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);

  // Fetch energy data and recommendations from the backend
  useEffect(() => {
    const fetchEnergyData = async () => {
      try {
        const energyResponse = await axios.get('http://localhost:5000/energy');
        setEnergyData(energyResponse.data);

        const recommendationsResponse = await axios.get('http://localhost:5000/recommendations');
        setRecommendations(recommendationsResponse.data);
      } catch (error) {
        console.error('Error fetching energy data or recommendations:', error);
      }
    };

    fetchEnergyData();
  }, []);

  // Fetch device energy data when selectedDevice changes
  useEffect(() => {
    if (selectedDevice) {
      const fetchDeviceEnergyData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/device-energy');
          setDeviceEnergyData(response.data);
        } catch (error) {
          console.error('Error fetching device energy data:', error);
        }
      };

      fetchDeviceEnergyData();
    }
  }, [selectedDevice]);

  // Prepare data for the chart
  const chartData = {
    labels: energyData.map((data) => data.date),
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: energyData.map((data) => data.consumption),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const deviceChartData = {
    labels: deviceEnergyData.map((device) => device.name),
    datasets: [
      {
        label: 'Device Energy Consumption (kWh)',
        data: deviceEnergyData.map((device) => device.consumption),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="energy-reports-container">
      <h2>Energy Reports</h2>
      <Bar 
        data={chartData}
        onClick={(event, elements) => {
          if (elements.length > 0) {
            // Handle the click event
            // For example, you might want to set the selected device based on the click
            // Assuming you have some logic to determine which device was clicked
            setSelectedDevice(someDeviceId);
          }
        }}
      />
      {selectedDevice && (
        <>
          <h3>Device Energy Consumption</h3>
          <Bar data={deviceChartData} />
        </>
      )}
      <h3>Energy Saving Recommendations</h3>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default EnergyReports;


