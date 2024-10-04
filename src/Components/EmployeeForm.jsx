const EmployeeForm = ({ employee, setEmployee, handleSubmit, editingIndex }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '400px',
      margin: '20px auto'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {editingIndex !== -1 ? 'Edit Employee' : 'Register Employee'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Name and Surname
          </label>
          <input
            type="text"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '100%'
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Email Address
          </label>
          <input
            type="email"
            value={employee.email}
            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '100%'
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Phone Number
          </label>
          <input
            type="tel"
            value={employee.phone}
            onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '100%'
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Employee Position
          </label>
          <input
            type="text"
            value={employee.position}
            onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '100%'
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Employee ID
          </label>
          <input
            type="text"
            value={employee.id}
            onChange={(e) => setEmployee({ ...employee, id: e.target.value })}
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '100%'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {editingIndex !== -1 ? 'Update Employee' : 'Register Employee'}
        </button>
      </form>
    </div>
  );
};