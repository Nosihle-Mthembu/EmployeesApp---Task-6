import Landing from "./landingpage";
import { IoPersonSharp } from "react-icons/io5";

const lastname = "gogo";

function Register() {
  
  localStorage.setItem("gogo", lastname);
  console.log (localStorage.getItem(lastname))

  function RegSubmit(){
    
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
              <input type="text" /> 
              <input type="text" />
            </div>

            <div>
              <label htmlFor="text">Address</label><br />
              <textarea name="" id=""></textarea>
            </div>

            <div className="details">
              <input type="text" placeholder="City"/>
              <input type="text" placeholder="Code"/>
            </div>

            <div>
              <div className="details">
                <label htmlFor="text">Gmail</label>
                <label htmlFor="text">Cellphone</label>
              </div>
              
              <div className="details">
                <input type="text" />
                <input type="tel" id="phone" name="phone" pattern="+27"/>
              </div>
            </div>     

          <div className="details">
            <label htmlFor="position">Position</label><br />
            <div className='text'>When did you start?</div>
          </div>
    
            <div className="details">
              <form className='text dropdown'>
                <select>
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