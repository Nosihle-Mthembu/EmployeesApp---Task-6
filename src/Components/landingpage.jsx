
import { useState } from "react";

function Landing({ employee }) {
    // console.log(employee)
    let employees = JSON.parse(localStorage.getItem("form"));
  
    function handleDelete(name) {
      const filtering = employees.filter((employer) => employer.name !== name);
      localStorage.setItem("form", JSON.stringify(filtering));
    }

    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState({});
  
    function handleUpdate(name) {
      const selectedEmployee = employees.find((employer) => employer.name === name);
      if (selectedEmployee) {
        // Open the update form with the selected employee's data
        setShowUpdateForm(true);
        setSelectedEmployee(selectedEmployee);
      }
    }
  
    const handleUpdateSubmit = (updatedEmployee) => {
      const updatedEmployees = employees.map((employer) => {
        if (employer.name === updatedEmployee.name) {
          return updatedEmployee;
        }
        return employer;
      });
      localStorage.setItem("form", JSON.stringify(updatedEmployees));
      setShowUpdateForm(false);
    };
  
    return (
      <div className="employees">
        <ul>
          <div className="nav">
            <li><a href="">Home</a></li>
            <li><a href="">Contact</a></li>
            <li className="logout"><a href="">LogOut</a></li>
          </div>
        </ul>
        <h2>Employee List</h2>
        <table>
          <thead>
            <tr>
              <th>Name and Surname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Employee Position</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employer, index) => (
              <tr key={index}>
                <td>{employer.name}  {employer.surname}</td>
                <td>{employer.email}</td>
                <td>{employer.phone}</td>
                <td>{employer.position}</td>
                <td>{employer.identity}</td>
                <td>
                  <button onClick={() => handleDelete(employer.name)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleUpdate(employer.name)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {showUpdateForm && (
          <UpdateForm
            employee={selectedEmployee}
            onSubmit={handleUpdateSubmit}
            onCancel={() => setShowUpdateForm(false)}
          />
        )}
      </div>
    );
  }
  
  const UpdateForm = ({ employee, onSubmit, onCancel }) => {
    const [name, setName] = useState(employee.name);
    const [surname, setSurname] = useState(employee.surname);
    const [email, setEmail] = useState(employee.email);
    const [phone, setPhone] = useState(employee.phone);
    const [position, setPosition] = useState(employee.position);
    const [identity,setIdentity] = useState("");

  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ name, surname, email, phone, position,identity });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input style={{marginLeft:30}} type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label >
          Surname:
          <input style={{marginLeft:10}} type="text" value={surname} onChange={(event) => setSurname(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input style={{marginLeft:35}} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Phone:
        <input style={{marginLeft:27}} type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <br />
        <label>
          Position:
          <input style={{marginLeft:15}} type="text" value={position} onChange={(event) => setPosition(event.target.value)} />
        </label>
        <br />
        <label>
          ID:
          <input style={{marginLeft:55}} type="text" value={identity} onChange={(event) => setIdentity(event.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    );
  };
  
  export default Landing;