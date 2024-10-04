import React from 'react';

const EmployeeCard = ({ employee, handleEdit, handleDelete }) => {
  return (
    <div style={styles.card}>
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Position: {employee.position}</p>
      <p>ID: {employee.id}</p>
      <button onClick={handleEdit} style={styles.button}>Edit</button>
      <button onClick={handleDelete} style={styles.button}>Delete</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  button: {
    margin: '5px',
    padding: '5px 10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default EmployeeCard;
