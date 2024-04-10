import React, { createContext, useContext, useState } from 'react';

const EmployeesContext = createContext();

export const useEmployees = () => useContext(EmployeesContext);

export const EmployeesProvider = ({ children }) => {
  const [numberOfEmployees, setNumberOfEmployees] = useState(1);

  return (
    <EmployeesContext.Provider value={{ numberOfEmployees, setNumberOfEmployees }}>
      {children}
    </EmployeesContext.Provider>
  );
};
