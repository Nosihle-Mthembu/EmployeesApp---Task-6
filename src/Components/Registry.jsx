import { useState } from "react";
import Landing from "./landingpage";
import { IoPersonSharp } from "react-icons/io5";
import { addBook } from "./local";

function Register() {
  
  // localStorage.setItem("gogo", lastname);
  // console.log (localStorage.getItem(lastname))
  const [name,setName] = useState("");
  const [surname,setSurname] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [position,setPosition] = useState("");
  const [identity,setIdentity] = useState("");
  const [myForm, setMyForm] = useState(JSON.parse(localStorage.getItem('form')));

  function RegSubmit(event){
    event.preventDefault()

    const form = {
      name:name,
      surname:surname,
      email:email,
      phone:phone,
      position:position,
      identity:identity
    };
    addBook(form)
    setMyForm([...myForm, form]);
      localStorage.setItem('form', JSON.stringify([...myForm, form]));
  }
  // employee = JSON.parse(localStorage.getItem(myForm))
 
    return (

        <div className="regpic">

          <div className="search">
            <div className="profile">
              <div className="logo" style={{backgroundImage:`url(${require("../assets/Screenshot_16-8-2024_95035_www.brandcrowd.com-removebg-preview.png")})`}}></div>   
              <input type="text" className="searchbar" placeholder="Search.." name="search"/>
              <button type="submit">Submit</button>
            </div>
          </div>

          <div className="form">
            <h2><i>Registration Form</i></h2>

             <div className="person">
              {/* <div className="frame"></div> */}
              <IoPersonSharp className="icon"/>
            </div>

            <div className="details">
              <label htmlFor="text">Name</label>
              <label htmlFor="text">Surname</label>
            </div>

            <div className="details">
              <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/> 
              <input type="text" value={surname} onChange={(event)=>setSurname(event.target.value)}/>
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
            <label htmlFor="position">Employee Position</label><br />
            <label htmlFor="text" style={{marginRight:30}}>Employee ID</label>
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
            <input id="id" name="id" style={{marginLeft:50}} value={identity} onChange={(event)=>setIdentity(event.target.value)}/>
            </div>
          
            <div className="btn">
              <button onClick={RegSubmit}>Submit</button>
            </div>
          </div>
          <Landing employee={myForm}/>
        </div>

    )
  }
  
  export default Register