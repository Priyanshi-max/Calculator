import React, { useEffect, useState } from "react";
import "./settings.css";
import { useEmployees } from "../../context/EmployeesContext";

export default function Settings() {
  const {
    numberOfEmployees,
    setNumberOfEmployees,
    setProfitPercentage,
    addGst,
    setAddGst,
    setGst,
    employeeSalary,
    totalAmount,
  } = useEmployees();

  const handleNumberOfEmployeesChange = (event) => {
    const newValue = parseInt(event.target.value);
    setNumberOfEmployees(newValue);
  };

  const handleProfitPercentageChange = (event) => {
    const newValue = parseInt(event.target.value);
    setProfitPercentage(newValue);
  };

  const toggleAddGst = () => {
    setAddGst(!addGst);
  };

  const totalCostPerEmployee =
    totalAmount / numberOfEmployees + parseFloat(employeeSalary);

  const calculateGst = () => {
    if (addGst) {
      const gstAmount = totalCostPerEmployee * 0.18;
      return gstAmount;
    }
    return 0;
  };

  useEffect(() => {
    const data = calculateGst();
    setGst(data);
  }, [addGst, totalAmount, numberOfEmployees, employeeSalary]);

  return (
    <div className="settings-container">
      <p style={{ color: "#3D475C", fontSize: "14px" }}>Settings</p>
      <div className="setting-item">
        <label>Number of Employees:</label>
        <input type="number" onChange={handleNumberOfEmployeesChange} />
      </div>
      <div className="setting-item">
        <label>Profit Percentage:</label>
        <input type="number" onChange={handleProfitPercentageChange} />
      </div>
      <div className="setting-item">
        <label>Other:</label>
      </div>
      <div className="setting-item">
        <label className="switch">
          <input type="checkbox" onChange={toggleAddGst} checked={addGst} />
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
