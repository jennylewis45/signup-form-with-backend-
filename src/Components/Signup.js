import React, { useState } from 'react'
import './app.css'
import axios from 'axios'
//  import { useNavigate ,Link} from 'react-router-dom'


function Signup() {
  // const history=useNavigate()
    const[signup,setSignup]=useState({name:"",email:"",password:""})
    let name,value
const handleChange=(e)=>{
    name=e.target.name
    value=e.target.value
    setSignup({...signup,[name]:value})

    
}
async function handleSubmit(e) {
  e.preventDefault();

  try {
    const { name, email, password } = signup; // Destructure from signup state

    await axios.post("http://localhost:8000/signup", {
      name,
      email,
      password,
    })
    .then(res => {
      if (res.data === "exist") {
        alert("User already exists");
      } else if (res.data === "notexist") {

        // history("/home", { state: { id: signup.name } }); // Use signup.name
        alert("User signup sucessgully");
}

    })
    .catch(e => {
      alert("Wrong details");
      console.log(e);
    });
  } catch (e) {
    console.error(e);
  }
}

  return (
    <div>
        <h1>Signup Form

        </h1>
        <form action="POST"onSubmit={handleSubmit}>
<input type="text" name='name'placeholder='Name' value={signup.name} onChange={handleChange}autoComplete='off' />

<br /><br />
<input type="email" name='email'placeholder='Email' value={signup.email}onChange={handleChange}autoComplete='off' />
<br /><br />
<input type="password" name='password'placeholder='Password' value={signup.password}onChange={handleChange}autoComplete='off' />
<button type='submit'>Submit</button>
</form>
 {/* <Link to="home">Home</Link>  */}
    </div>
  )
}

export default Signup
