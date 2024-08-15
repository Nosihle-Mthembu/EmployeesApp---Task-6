
// import { useState } from "react";
// function Landing({employee}){
//     // console.log(employee)

//     const [updateMode, setUpdateMode] = useState(false);
//     const [updatedEmployee, setUpdatedEmployee] = useState({});

//     let employees = JSON.parse(localStorage.getItem("form"))
    
    
//     function handleDelete(name) {
//         const filtering = employees.filter((employer) => employer.name !== name);
//         localStorage.setItem("form", JSON.stringify(filtering));
//     }

//     function handleUpdate(name) {
//         const selectedEmployee = employees.find((employer) => employer.name === name);
//         setUpdateMode(true);
//         setUpdatedEmployee(selectedEmployee);
//       }
    
//       function handleUpdateSubmit(event) {
//         event.preventDefault();
//         const updatedEmployees = employees.map((employer) => {
//           if (employer.name === updatedEmployee.name) {
//             return updatedEmployee;
//           }
//           return employer;
//         });
//         localStorage.setItem("form", JSON.stringify(updatedEmployees));
//         setEmployees(updatedEmployees);
//         setUpdateMode(false);
//       }

//     return (
//         <div className="employees">
//             <ul>
//                 <div className="nav">
//                     <li><a href="">Home</a></li>
//                     <li><a href="">Contact</a></li>
//                     <li className="logout"><a href="">LogOut</a></li>
//                 </div>
//             </ul>
//             <h2>Employee List</h2>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Name and Surname</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Employee Position</th>
//                     <th>ID</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {employee.map((employer, index) => (
//                 <tr key={index}>
//                     <td>{employer.name}  {employer.surname}</td>
//                     <td>{employer.email}</td>
//                     <td>{employer.phone}</td>
//                     <td>{employer.position}</td>
//                     <td>ID</td>
//                     <td><button onClick={() => handleDelete(employer.name)}>Delete</button></td>
//                     <td><button onClick={() => handleUpdate(employer.name)}>Update</button></td>
//                 </tr>
//                 ))}
//                 </tbody>
//             </table>

//             {updateMode && (
//         <form onSubmit={handleUpdateSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={updatedEmployee.name}
//               onChange={(event) => setUpdatedEmployee({ ...updatedEmployee, name: event.target.value })}
//             />
//           </label>
//           <br />
//           <label>
//             Surname:
//             <input
//               type="text"
//               value={updatedEmployee.surname}
//               onChange={(event) => setUpdatedEmployee({ ...updatedEmployee, surname: event.target.value })}
//             />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input
//               type="email"
//               value={updatedEmployee.email}
//               onChange={(event) => setUpdatedEmployee({ ...updatedEmployee, email: event.target.value })}
//             />
//           </label>
//           <br />
//           <label>
//             Phone:
//             <input
//               type="tel"
//               value={updatedEmployee.phone}
//               onChange={(event) => setUpdatedEmployee({ ...updatedEmployee, phone: event.target.value })}
//             />
//           </label>
//           <br />
//           <label>
//             Position:
//             <input
//               type="text"
//               value={updatedEmployee.position}
//               onChange={(event) => setUpdatedEmployee({ ...updatedEmployee, position: event.target.value })}
//             />
//           </label>
//           <br />
//           <button type="submit">Update</button>
//           <button type="button" onClick={() => setUpdateMode(false)}>
//             Cancel
//           </button>
//         </form>
//       )}
//         </div>

//     )
// }
// export default Landing

// function Landing({ employee }) {
//     // console.log(employee)
//     let employees = JSON.parse(localStorage.getItem("form"));
  
//     function handleDelete(name) {
//       const filtering = employees.filter((employer) => employer.name !== name);
//       localStorage.setItem("form", JSON.stringify(filtering));
//     }
  
//     function handleUpdate(name) {
//       const selectedEmployee = employees.find((employer) => employer.name === name);
//       if (selectedEmployee) {
//         // Open the update form with the selected employee's data
//         setShowUpdateForm(true);
//         setSelectedEmployee(selectedEmployee);
//       }
//     }
  
//     const [showUpdateForm, setShowUpdateForm] = useState(false);
//     const [selectedEmployee, setSelectedEmployee] = useState({});
  
//     const handleUpdateSubmit = (updatedEmployee) => {
//       const updatedEmployees = employees.map((employer) => {
//         if (employer.name === updatedEmployee.name) {
//           return updatedEmployee;
//         }
//         return employer;
//       });
//       localStorage.setItem("form", JSON.stringify(updatedEmployees));
//       setShowUpdateForm(false);
//     };
  
//     return (
//       <div className="employees">
//         <ul>
//           <div className="nav">
//             <li><a href="">Home</a></li>
//             <li><a href="">Contact</a></li>
//             <li className="logout"><a href="">LogOut</a></li>
//           </div>
//         </ul>
//         <h2>Employee List</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name and Surname</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Employee Position</th>
//               <th>ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employee.map((employer, index) => (
//               <tr key={index}>
//                 <td>{employer.name}  {employer.surname}</td>
//                 <td>{employer.email}</td>
//                 <td>{employer.phone}</td>
//                 <td>{employer.position}</td>
//                 <td>ID</td>
//                 <td>
//                   <button onClick={() => handleDelete(employer.name)}>Delete</button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleUpdate(employer.name)}>Update</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
  
//         {showUpdateForm && (
//           <UpdateForm
//             employee={selectedEmployee}
//             onSubmit={handleUpdateSubmit}
//             onCancel={() => setShowUpdateForm(false)}
//           />
//         )}
//       </div>
//     );
//   }
  
//   const UpdateForm = ({ employee, onSubmit, onCancel }) => {
//     const [name, setName] = useState(employee.name);
//     const [surname, setSurname] = useState(employee.surname);
//     const [email, setEmail] = useState(employee.email);
//     const [phone, setPhone] = useState(employee.phone);
//     const [position, setPosition] = useState(employee.position);
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       onSubmit({ name, surname, email, phone, position });
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input style={{marginLeft:30}} type="text" value={name} onChange={(event) => setName(event.target.value)} />
//         </label>
//         <br />
//         <label >
//           Surname:
//           <input style={{marginLeft:10}} type="text" value={surname} onChange={(event) => setSurname(event.target.value)} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input style={{marginLeft:35}} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//         </label>
//         <br />
//         <label>
//           Phone:
//         <input style={{marginLeft:27}} type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
//         </label>
//         <br />
//         <label>
//           Position:
//           <input style={{marginLeft:16}} type="text" value={position} onChange={(event) => setPosition(event.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Update</button>
//         <button type="button" onClick={onCancel}>
//           Cancel
//         </button>
//       </form>
//     );
//   };
  
//   export default Landing;


import { useState } from "react";
import Landing from "./landingpage";
import { IoPersonSharp } from "react-icons/io5";
import { addBook } from "./local";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [myForm, setMyForm] = useState(JSON.parse(localStorage.getItem('form')));
  const [updateMode, setUpdateMode] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});

  function RegSubmit(event) {
    event.preventDefault();

    if (updateMode) {
      // Update mode
      const updatedForm = {
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        position: position,
      };
      const updatedMyForm = myForm.map((employee) => {
        if (employee.name === selectedEmployee.name) {
          return updatedForm;
        }
        return employee;
      });
      setMyForm(updatedMyForm);
      localStorage.setItem('form', JSON.stringify(updatedMyForm));
      setUpdateMode(false);
    } else {
      // Create new employee
      const form = {
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        position: position,
      };
      addBook(form);
      setMyForm([...myForm, form]);
      localStorage.setItem('form', JSON.stringify([...myForm, form]));
    }
  }

  function handleUpdate(employee) {
    setUpdateMode(true);
    setSelectedEmployee(employee);
    setName(employee.name);
    setSurname(employee.surname);
    setEmail(employee.email);
    setPhone(employee.phone);
    setPosition(employee.position);
  }

  return (
    <div className="regpic">

<div className="search">
  <div className="profile">
    <div className="logo"><a href="">Logo</a></div>   
    <input type="text" className="searchbar" placeholder="Search.." name="search"/>
    <button type="submit">Submit</button>
    <div className="frame"><IoPersonSharp className="icon"/></div>
  </div>
    
  <div className="person">
    <i>Nosihle Mthembu</i><br/>
    <i>Employee</i>
  </div>
</div>

<div className="form">
  <h2><i>Registration Form</i></h2>
  <div className="details">
    <label htmlFor="text">Name</label>
    <label htmlFor="text">Surname</label>
  </div>

  <div className="details">
    <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/> 
    <input type="text" value={surname} onChange={(event)=>setSurname(event.target.value)}/>
  </div>

  <div>
    <label htmlFor="text">Address</label><br />
    <textarea name="" id=""></textarea>
  </div>

  <div className="details">
    <input type="text" placeholder="City" />
    <input type="text" placeholder="Code"/>
  </div>

  <div>
    <div className="details">
      <label htmlFor="text">Gmail</label>
      <label htmlFor="text">Cellphone</label>
    </div>
    
    <div className="details">
      <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)}/>
      <input type="tel" id="phone" name="phone" pattern="+27" value={phone} onChange={(event)=>setPhone(event.target.value)}/>
    </div>
  </div>     

<div className="details">
  <label htmlFor="position">Position</label><br />
  <div className='text'>When did you start?</div>
</div>

  <div className="details">
    <form className='text dropdown'>
      <select value={position} onChange={(event)=>setPosition(event.target.value)}>
          <option placeholder="eg. Worker"></option>
          <option value="general worker">General worker</option>
          <option value="supervisor">Supervisor</option>
          <option value="manager">Manager</option>
      </select>
  </form>
  <input type="date" name="" id="" />
  </div>

  <div className="btn">
    <button onClick={RegSubmit}>Submit</button>
  </div>
</div>

      <div className="btn">
        {updateMode ? (
          <button onClick={RegSubmit}>Update</button>
        ) : (
          <button onClick={RegSubmit}>Submit</button>
        )}
      </div>
      <Landing employee={myForm} onUpdate={handleUpdate} />
    </div>
  );
}

export default Register;