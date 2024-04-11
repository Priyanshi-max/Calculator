import React, { createContext, useContext, useState } from "react";

const EmployeesContext = createContext();

export const useEmployees = () => useContext(EmployeesContext);

export const EmployeesProvider = ({ children }) => {
  const [numberOfEmployees, setNumberOfEmployees] = useState(1);
  const [profitPercentage, setProfitPercentage] = useState(0);
  const [addGst, setAddGst] = useState(false);
  const [gst, setGst] = useState(0);
  const [employeeSalary, setEmployeeSalary] = useState("0"); 
  const [totalAmount, setTotalAmount] = useState("");

  return (
    <EmployeesContext.Provider
      value={{
        numberOfEmployees,
        setNumberOfEmployees,
        profitPercentage,
        setProfitPercentage,
        addGst,
        setAddGst,
        gst,
        setGst,
        employeeSalary,
        setEmployeeSalary,
        totalAmount, setTotalAmount
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};