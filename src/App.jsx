import React, { useState, useEffect } from 'react';
import Header from './Components/header';
import './App.css'

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  input: {
    margin: '5px 0',
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    margin: '5px 0',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  employeeList: {
    listStyle: 'none',
    padding: 0,
    display:"grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  employeeItem: {
    border: '1px solid #ddd',
    margin: '10px 0',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  employeeImage: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    marginRight: '10px',
  },
};

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    image: '',
    position: '',
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setEmployees(employees.map(emp => emp.id === formData.id ? formData : emp));
      setEditMode(false);
    } else {
      setEmployees([...employees, { ...formData, id: Date.now().toString() }]);
    }
    setFormData({ id: '', name: '', email: '', phone: '', image: '', position: '' });
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handleEdit = (employee) => {
    setFormData(employee);
    setEditMode(true);
  };

  return (
    <div style={styles.container}>
      <Header />
      <h1 style={styles.header}>Employee Registration</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:"centre" }}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name and Surname"
            required
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            required
          />
          <input
            style={styles.input}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
          />
          <input
            style={styles.input}
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
          />
          <input
            style={styles.input}
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            placeholder="Employee Position"
            required
          />
          <button style={styles.button} type="submit">
            {editMode ? 'Update Employee' : 'Add Employee'}
          </button>
        </form>
      
      <div>
        <ul style={styles.employeeList}>
          {employees.map(employee => (
            <li key={employee.id} style={styles.employeeItem}>
              <div>
                <img src={employee.image || '/api/placeholder/50/50'} alt={employee.name} style={styles.employeeImage} />
                <strong>{employee.name}</strong> - {employee.position}
                <br />
                Email: {employee.email} | Phone: {employee.phone}
                <br />
                ID: {employee.id}
              </div>
              <div>
                <button style={styles.button} onClick={() => handleEdit(employee)}>Edit</button>
                <button style={styles.button} onClick={() => handleDelete(employee.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul></div>
      </div>
    </div>
    
  );
};

export default App;