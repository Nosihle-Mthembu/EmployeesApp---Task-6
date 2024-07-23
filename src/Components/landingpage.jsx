
export default function Landing(){
    return (
        <>
        <div className="employees">
            <ul>
                <div className="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li className="logout"><a href="">LogOut</a></li>
                </div>
            </ul>
            <table>
                <tr>
                    <th>
                        Name and Surname
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Employee Position
                    </th>
                    <th>
                        ID
                    </th>
                </tr>
            </table>
        </div>
            
           
        
        </>
    )
}