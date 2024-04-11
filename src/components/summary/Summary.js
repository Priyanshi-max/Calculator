import React from "react";
import { useEmployees } from "../../context/EmployeesContext";
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

  const totalcash =
    totalCostPerEmployee + totalCostPerEmployee * (profitPercentage / 100);

  const cashFlowPerMonth = totalcash - totalcash * 0.1;

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
        <p> Total Cost - Rs.{totalAmount}</p>
        <p>
          Cost Per Person - Rs.{(totalAmount / numberOfEmployees).toFixed(2)}
        </p>
        <p>Total Cost Per Employee - Rs.{totalCostPerEmployee.toFixed(2)}</p>
        <p>
          Profit - Rs.
          {(totalCostPerEmployee * (profitPercentage / 100)).toFixed(2)}
        </p>

        {addGst && (
          <p>
            Total Cost Per Employee with GST - Rs.
            {(gst + totalCostPerEmployee).toFixed(2)}
          </p>
        )}
        <p>CashFlow per Month : Rs.{cashFlowPerMonth}</p>
        {/* <p>
          Company Paying from Pocket : Rs.
          {gst + totalCostPerEmployee - cashFlowPerMonth}
        </p> */}
      </div>
    </div>
  );
}
