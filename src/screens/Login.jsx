import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
function Login() {
   const [Credential, setCredentials] = useState({  email: "", password: "" });
  let navigate=useNavigate();
      const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(JSON.stringify(Credential));
  
          const response = await fetch("http://localhost:5005/api/login/loginuser", {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(Credential)
          });
  
          const json = await response.json();
          console.log(json);
  
          if (!json.success) {
              alert("Enter valid credentials");
          }
          if(json.success){
            localStorage.setItem("user_email_id",Credential.email)
            localStorage.setItem("authtoken",json.authtoken)
            console.log(localStorage.getItem("authtoken"))
            navigate("/");
          }
      };
      const onChange = (event) => {
        setCredentials({ ...Credential, [event.target.name]: event.target.value });
    };
  return (
    
    <div>
        <form onSubmit={handleSubmit}>
               

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name='email' value={Credential.email} placeholder="Enter email" onChange={onChange} />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name='password' value={Credential.password} placeholder="Password" onChange={onChange} />
                </div>

                

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/Createuser" className='m-3 btn btn-danger'>I'm a new user</Link>
            </form>
    </div>
  )
}

export default Login
