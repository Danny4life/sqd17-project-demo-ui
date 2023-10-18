
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./component/EmployeeList";
import AddEmployee from "./component/AddEmployee";



function App() {
  return (
    <>
      <div>
       <BrowserRouter>
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Routes>
       </BrowserRouter>
      </div>
    </>
  );
}

export default App;
