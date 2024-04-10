import React from "react";
import { useEmployees } from "../context/EmployeesContext";
import "./summary.css";

export default function Summary({ totalAmount }) {
  const { numberOfEmployees ,profitPercentage } = useEmployees();

  const costPerPerson = totalAmount / numberOfEmployees;
  const profit = (totalAmount * profitPercentage) / 100;

  return (
    <div className="summary-block">
      <div className="employee-info">
        <div className="input-group">
          <p>Employee Name</p>
          <input type="text"></input>
        </div>
        <div className="input-group">
          <p>Employee Salary</p>
          <input type="number"></input>
        </div>
      </div>
      <div className="summary-info">
        <p>Total Cost - Rs.{totalAmount}</p>
        <p>Cost Per Person - Rs.{costPerPerson}</p>
        <p>Profit - Rs.{profit}</p>
        <p>Total Cost Per Employee</p>
      </div>
    </div>
  );
}
