import { useState } from "react";
import Landing from "./landingpage";
import { IoPersonSharp } from "react-icons/io5";

function Register() {
  
  // localStorage.setItem("gogo", lastname);
  // console.log (localStorage.getItem(lastname))
  const [name,setName] = useState([""])
  const [surname,setSurname] = useState([""])
  const [email,setEmail] = useState([""])
  const [phone,setPhone] = useState([""])
  const [position,setPosition] = useState([""])

  function RegSubmit(event){
    event.preventDefault()

    const form = {
      name:name,
      surname:surname,
      email:email,
      phone:phone,
      position:position,
    };
     
    console.log(form);
  }

    return (
      <>

        <div className="regpic">

          <div className="search">
            <div className="profile">
              <div className="logo"><a href="">Logo</a></div>   
              <input type="text" className="searchbar" placeholder="Search.." name="search"/>
              <button type="submit">Submit</button>
              <div className="frame"><IoPersonSharp className="icon"/></div>
            </div>
              
            <div className="person">
              <input type="text" placeholder="Name and Surname"/>
              <input type="text" placeholder="Position"/>
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
          <Landing/>
        </div>
      </>
    )
  }
  
  export default Register