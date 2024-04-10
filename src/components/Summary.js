import React, { useState } from "react";
import { useEmployees } from "../context/EmployeesContext";
import "./summary.css";

export default function Summary({ totalAmount }) {
  const { numberOfEmployees, profitPercentage } = useEmployees();
  const [employeeSalary, setEmployeeSalary] = useState(0);

  const costPerPerson = totalAmount / numberOfEmployees;
  const profit = (totalAmount * profitPercentage) / 100;
  const totalCostPerEmployee = costPerPerson + parseFloat(employeeSalary);

  return (
    <div className="summary-block">
      <div className="employee-info">
        <div className="input-group">
          <p>Employee Name</p>
          <input type="text"></input>
        </div>
        <div className="input-group">
          <p>Employee Salary</p>
          <input type="number" value={employeeSalary} onChange={(e) => setEmployeeSalary(e.target.value)}></input>
        </div>
      </div>
      <div className="summary-info">
        <p>Total Cost - Rs.{totalAmount}</p>
        <p>Cost Per Person - Rs.{costPerPerson}</p>
        <p>Profit - Rs.{profit}</p>
        <p>Total Cost Per Employee - Rs.{totalCostPerEmployee}</p>
      </div>
    </div>
  );
}
