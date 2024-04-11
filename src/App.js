import "./App.css";
import Calculator from "./controller/Calculator";
import { EmployeesProvider } from "./context/EmployeesContext";

function App() {
  return (
    <EmployeesProvider>
      <div className="App">
        <Calculator />
      </div>
    </EmployeesProvider>
  );
}

export default App;
