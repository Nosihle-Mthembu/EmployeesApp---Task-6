import { useState } from 'react';
import './App.css';

const App = () => {
    // State to handle employees data
    const [employees, setEmployees] = useState([]);
    
    // State to handle search input
    const [searchTerm, setSearchTerm] = useState("");

    // State for employee form
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        image: "",
        position: "",
        id: ""
    });

    // State to track whether the form is in edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Function to handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Function to handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Update existing employee
            setEmployees(employees.map(employee => 
                employee.id === form.id ? form : employee
            ));
            setIsEditing(false);
        } else {
            // Add new employee
            const newEmployee = { ...form, id: Date.now() }; // Unique ID based on timestamp
            setEmployees([...employees, newEmployee]);
        }
        setForm({ name: "", email: "", phone: "", image: "", position: "", id: "" }); // Reset form
    };

    // Function to handle deleting an employee
    const handleDelete = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    // Function to handle editing an employee
    const handleEdit = (employee) => {
        setForm(employee);
        setIsEditing(true);
    };

    // Filtered employees based on the search term
    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.phone.includes(searchTerm)
    );

    return (
        <div className="container">
            <main className="main">
                <section className="section">
                    <div className="header">
                        <div>
                            <h1>Employee App</h1>
                            <p>A beautiful place to start your day by knowing your co-workers</p>
                        </div>
                    </div>
                    <div className="search-bar">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            value={searchTerm} 
                            onChange={handleSearchChange} 
                        />
                        <button>Submit</button>
                    </div>
                    <div className="grid">
                        <div className="assistant">
                            <div className="header">
                                <div className="icon">
                                    <i className="fas fa-robot"></i>
                                </div>
                                <span>Assistant</span>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Name and Surname</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={form.name} 
                                        onChange={handleInputChange} 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label>Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={form.email} 
                                        onChange={handleInputChange} 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label>Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        value={form.phone} 
                                        onChange={handleInputChange} 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label>Image URL</label>
                                    <input 
                                        type="url" 
                                        name="image" 
                                        value={form.image} 
                                        onChange={handleInputChange} 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label>Employee Position</label>
                                    <input 
                                        type="text" 
                                        name="position" 
                                        value={form.position} 
                                        onChange={handleInputChange} 
                                        required 
                                    />
                                </div>
                                <div>
                                    <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
                                </div>
                            </form>
                        </div>
                        <div className="info-container">
                            <ul>
                                {filteredEmployees.length > 0 ? (
                                    filteredEmployees.map(employee => (
                                        <li key={employee.id}>
                                            <img src={employee.image} alt={employee.name} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                                            <span className="value">{employee.name}</span>
                                            <span className="label">{employee.position}</span>
                                            <span className="label">{employee.email}</span>
                                            <span className="label">{employee.phone}</span>
                                            <button onClick={() => handleEdit(employee)}>Edit</button>
                                            <button onClick={() => handleDelete(employee.id)}>Delete</button>
                                        </li>
                                    ))
                                ) : (
                                    <li>No employees found</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
