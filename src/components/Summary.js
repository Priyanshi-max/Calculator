import React from "react";
import "./summary.css";

export default function Summary({totalAmount}) {
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
        <p>Total Cost - Rs.{ totalAmount }</p>
        <p>Per Employee Cost</p>
        <p>Profit</p>
        <p>Total cost Per Employee</p>
      </div>
    </div>
  );
}
