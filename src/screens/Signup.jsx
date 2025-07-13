// import React, { useState } from 'react'
// import {Link} from  'react-router-dom'
// const Signup = () => {

//   const [Credential,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

//   const handlesubmit= async(e)=>{
//  e.preventDefault();
//  console.log(JSON.stringify({name:Credential.name, email:Credential.email, password:Credential.password,location:Credential.location}))
 
//  const response = await fetch("http://localhost:5005/api/createuser",{
//   method: 'POST',
//   headers: {
//   'Content-Type': 'application/json'
// },
// body:JSON.stringify({name: Credential.name, email:Credential.email, password:Credential.password,location:Credential.geolocation})
//  })

//  const json =await response.json();
//  console.log(json);

//  if(!json.success){
//   alert("Enter valid credntials")
//  }
//   }

//   const onChange=(event)=>{
//     setcredentials({...Credential,[event.target.name]:event.target.value})
//   }
//   return (
//     <>
//     <div className='container'>
//       <form onSubmit= {handlesubmit}>

//       <div className="form-group">
//     <label htmlFor="name">Name</label>
//     <input type="text" className="form-control" name='name' value={Credential.name} placeholder="Enter email" onChange={onChange}/>
  
//   </div>


//   <div className="form-group">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input type="email" className="form-control" name='email' value= {Credential.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
//     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input type="password" className="form-control" name='password' value={Credential.password} id="exampleInputPassword1" placeholder="Password" onChange={onChange}/>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Address</label>
//     <input type="text" className="form-control" name='geolocation' value={Credential.geolocation} id="exampleInputLocation1" placeholder="Address" onChange={onChange}/>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
//   <Link  to="/login" className='m-3 btn btn-danger'>Already a user </Link>
// </form>
// </div>
//     </>
//   )
// }















import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [Credential, setCredentials] = useState({ name: "", email: "", password: "", location: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(Credential));

        const response = await fetch("http://localhost:5005/api/createuser/register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Credential)
        });

        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert("Enter valid credentials");
        }
    };

    const onChange = (event) => {
        setCredentials({ ...Credential, [event.target.name]: event.target.value });
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name='name' value={Credential.name} placeholder="Enter name" onChange={onChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name='email' value={Credential.email} placeholder="Enter email" onChange={onChange} />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name='password' value={Credential.password} placeholder="Password" onChange={onChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Address</label>
                    <input type="text" className="form-control" name='location' value={Credential.location} placeholder="Address" onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/Login" className='m-3 btn btn-danger'>Already a user</Link>
            </form>
        </div>
    );
}

export default Signup;

