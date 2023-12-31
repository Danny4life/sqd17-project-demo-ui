import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {

    const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/employeelist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {

    e.preventDefault();
    setEmployee(
      {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
      }
    )
  }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
           
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
           onClick={saveEmployee}
            className="rounded bg-green-500 hover:bg-green-800 text-white font-semibold py-2 px-6"
          >
            Save
          </button>
          <button 
            onClick={reset}
            className="rounded bg-red-500 hover:bg-red-800 text-white font-semibold py-2 px-6">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
