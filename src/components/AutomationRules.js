// AutomationRules.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AutomationRules.css'; // Import the CSS file

const AutomationRules = () => {
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState({ device: '', condition: '', action: '' });

  // Fetch automation rules from the backend
  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rules');
        setRules(response.data);
      } catch (error) {
        console.error('Error fetching rules:', error);
      }
    };

    fetchRules();
  }, []);

  // Add new automation rule
  const addRule = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/rules', newRule);
      setRules([...rules, response.data]);
      setNewRule({ device: '', condition: '', action: '' });
    } catch (error) {
      console.error('Error adding rule:', error);
    }
  };

  // Delete automation rule
  const deleteRule = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/rules/${id}`);
      setRules(rules.filter((rule) => rule._id !== id));
    } catch (error) {
      console.error('Error deleting rule:', error);
    }
  };

  return (
    <div className="automation-rules-container">
      <h2>Automation Rules</h2>
      <form onSubmit={addRule}>
        <input
          type="text"
          placeholder="Device"
          value={newRule.device}
          onChange={(e) => setNewRule({ ...newRule, device: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Condition"
          value={newRule.condition}
          onChange={(e) => setNewRule({ ...newRule, condition: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Action"
          value={newRule.action}
          onChange={(e) => setNewRule({ ...newRule, action: e.target.value })}
          required
        />
        <button type="submit">Add Rule</button>
      </form>
      <ul>
        {rules.map((rule) => (
          <li key={rule._id}>
            {rule.device} - {rule.condition} - {rule.action}
            <button onClick={() => deleteRule(rule._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutomationRules;
