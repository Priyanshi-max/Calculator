import React from "react";
import { useEmployees } from "../context/EmployeesContext";
import "./summary.css";

export default function Summary({ totalAmount }) {
  const {
    numberOfEmployees,
    profitPercentage,
    addGst,
    gst,
    employeeSalary,
    setEmployeeSalary,
  } = useEmployees();

  const totalCostPerEmployee =
    totalAmount / numberOfEmployees + parseFloat(employeeSalary);

  return (
    <div className="summary-block">
      <div className="employee-info">
        <div className="input-group">
          <p>Employee Name</p>
          <input type="text" />
        </div>
        <div className="input-group">
          <p>Employee Salary</p>
          <input
            type="number"
            value={employeeSalary}
            onChange={(e) => setEmployeeSalary(e.target.value)}
          />
        </div>
      </div>
      <div className="summary-info">
        <p style={{ color: "#ccc" }}> Total Cost - Rs.{totalAmount}</p>
        <p style={{ color: "#ccc" }}>Cost Per Person - Rs.{totalAmount / numberOfEmployees}</p>
        <p style={{ color: "#ccc" }}>Total Cost Per Employee - Rs.{totalCostPerEmployee}</p>
        <p style={{ color: "#ccc" }}>Profit - Rs.{(totalCostPerEmployee / numberOfEmployees) * (profitPercentage / 100)}</p>
        
        {addGst && <p style={{ color: "#ccc" }}>GST - Rs.{gst+totalCostPerEmployee}</p>}
        
      </div>
    </div>
  );
}