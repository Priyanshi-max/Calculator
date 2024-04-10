import React, { useState } from "react";
import { useEmployees } from "../context/EmployeesContext";
import "./summary.css";

export default function Summary({ totalAmount }) {
  const { numberOfEmployees, profitPercentage } = useEmployees();
  const [employeeSalary, setEmployeeSalary] = useState(0);
  const [addGst, setAddGst] = useState(false);

  const costPerPerson = totalAmount / numberOfEmployees;
  
  const totalCostPerEmployee = costPerPerson + parseFloat(employeeSalary);
  const profit = (totalCostPerEmployee * profitPercentage) / 100;
  const calculateGst = () => {
    if (addGst) {
      const gstAmount = (totalCostPerEmployee * 18) / 100;
      return gstAmount;
    }
    return 0;
  };

  const gst = calculateGst();
  const totalCostWithGst = totalCostPerEmployee + gst;

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
      <p style={{color:"#ccc"}}> Total Cost - Rs.{totalAmount}</p>
        <p style={{color:"#ccc"}}>Cost Per Person - Rs.{costPerPerson}</p>
       
        <p style={{color:"#ccc"}}>Profit - Rs.{profit}</p>
       
        <p style={{color:"#ccc"}}>Total Cost Per Employee - Rs.{totalCostPerEmployee}</p>
        {addGst && <p style={{ color: "#ccc" }}>GST - Rs.{gst}</p>} 
        
      </div>
    </div>
  );
}
