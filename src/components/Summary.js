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
        <p style={{ color: "#3D475C" }}> Total Cost - Rs.{totalAmount}</p>
        <p style={{ color: "#3D475C" }}>
          Cost Per Person - Rs.{(totalAmount / numberOfEmployees).toFixed(2)}
        </p>
        <p style={{ color: "#3D475C" }}>
          Total Cost Per Employee - Rs.{totalCostPerEmployee.toFixed(2)}
        </p>
        <p style={{ color: "#3D475C" }}>
          Profit - Rs.
          {(totalCostPerEmployee / numberOfEmployees) *
            (profitPercentage / 100).toFixed(2)}
        </p>

        {addGst && (
          <p style={{ color: "#3D475C" }}>
            Total Cost Per Employee with GST - Rs.
            {gst + totalCostPerEmployee}
          </p>
        )}
      </div>
    </div>
  );
}
