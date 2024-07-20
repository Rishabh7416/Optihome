import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';

const DeviceControl = () => {
  const [devices, setDevices] = useState([]);

  // Fetch devices from the backend
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/devices');
        setDevices(response.data);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    };

    fetchDevices();
  }, []);

  // Toggle device status
  const toggleDeviceStatus = async (device) => {
    const updatedDevice = { ...device, status: device.status === 'on' ? 'off' : 'on' };
    try {
      await axios.put(`http://localhost:5000/devices/${device._id}`, updatedDevice);
      setDevices((prevDevices) =>
        prevDevices.map((d) => (d._id === device._id ? updatedDevice : d))
      );
    } catch (error) {
      console.error('Error updating device status:', error);
    }
  };

  return (
    <div>
      <h2>Device Control</h2>
      <ul>
        {devices.map((device) => (
          <li key={device._id}>
            {device.name} - {device.status}
            <button onClick={() => toggleDeviceStatus(device)}>
              Turn {device.status === 'on' ? 'Off' : 'On'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceControl;
