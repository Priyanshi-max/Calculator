import React from 'react';
import "./settings.css";
import { useEmployees } from '../context/EmployeesContext';

export default function Settings() {
  const { setNumberOfEmployees,setProfitPercentage}  = useEmployees();
 

  const handleNumberOfEmployeesChange = (event) => {
    const newValue = parseInt(event.target.value);
    setNumberOfEmployees(newValue);
  };
 const handleProfitPercentageChange = (event)=>{
  const newValue = parseInt(event.target.value);
  setProfitPercentage(newValue);
 }
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting-item">
        <label>Number of Employees:</label>
        <input type='number' onChange={handleNumberOfEmployeesChange} />
      </div>
      <div className="setting-item">
        <label>Profit Percentage:</label>
        <input type='number' onChange={handleProfitPercentageChange} />
      </div>
      <div className="setting-item">
        <label>Other:</label>
      </div>
      <div className="setting-item">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <label>Add GST:</label>
      </div>
      <div className="setting-item">
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider round"></span>
        </label>
        <label>Reduce TDS:</label>
      </div>
    </div>
  );
}