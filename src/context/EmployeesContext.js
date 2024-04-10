import React, { createContext, useContext, useState } from 'react';

const EmployeesContext = createContext();

export const useEmployees = () => useContext(EmployeesContext);

export const EmployeesProvider = ({ children }) => {
  const [numberOfEmployees, setNumberOfEmployees] = useState(1);
  const [profitPercentage, setProfitPercentage] = useState(0);

  return (
    <EmployeesContext.Provider value={{ numberOfEmployees, setNumberOfEmployees, profitPercentage,setProfitPercentage }}>
      {children}
    </EmployeesContext.Provider>
  );
};
