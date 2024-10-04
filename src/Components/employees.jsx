import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.length > 0 ? (
        employees.map((emp, index) => (
          <EmployeeCard
            key={index}
            employee={emp}
            handleEdit={() => handleEdit(index)}
            handleDelete={() => handleDelete(index)}
          />
        ))
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
