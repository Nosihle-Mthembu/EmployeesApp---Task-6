
function Landing(){
    // console.log(employee)
    let employees = JSON.parse(localStorage.getItem("form"))
    console.log(employees,"jhv")

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
                {employees.map((employer, index) => (
                <tr key={index}>
                    <td>{employees.name}  {employees.surname}</td>
                    <td>{employees.email}</td>
                    <td>{employees.phone}</td>
                    <td>{employees.position}</td>
                    <td>ID</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}
export default Landing