
export default function Landing(){
    return (
        <>
            <ul>
                <div className="search">
                <li action="action_page.php">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit">Submit</button>
                </li>
                </div>
                <div className="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">LogOut</a></li>
                    <li className="logo"><a href="">Logo</a></li>

                    <div className="details">
                <p>Img</p>
               
            </div>
                </div>
            </ul>
            {/* Profile */}
           
        
        </>
    )
}