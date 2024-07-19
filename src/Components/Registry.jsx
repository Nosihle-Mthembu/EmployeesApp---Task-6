
function Register() {

    return (
      <>
        <div className="regpic">
          <div className="image"></div>
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
              <button>Submit</button>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Register