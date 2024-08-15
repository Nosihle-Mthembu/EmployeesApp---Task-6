
function Landing({employee}){
    // console.log(employee)
    
    function handleDelete(){
        console.log("fdbagueir")
        const filtering = employee.filter((employer) => employer.name !== employer)
        employee = filtering
        localStorage.setItem("form",JSON.stringify(employee))
    }

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
                    <td>ID</td>
                    <td><button onClick={handleDelete}>Delete</button></td>
                    <td><button>Update</button></td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}
export default Landing