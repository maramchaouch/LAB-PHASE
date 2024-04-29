import React, { useState } from 'react'
import './CSS/Loginsignup.css'


const Longinsignup = () => {
  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const login = async(e) => {
   console.log("login function execute", formData);
   let responseData ;
    await fetch("http://localhost:4000/login",{
      method: "POST",
      headers: {
        "Accept": "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)
    
    if ( responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
      
    }
    else{
      alert(responseData.errors)
    }


  }
  const signup = async(e) => {
    console.log("signup function execute", formData);
    let responseData ;
    await fetch("http://localhost:4000/signup",{
      method: "POST",
      headers: {
        "Accept": "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)
    
    if ( responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
      
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='longinsignup'>
      <div className="loginsignup-container">
        <h1>{state} </h1>
        <div className="loginsignup-fields">
          {state === "Sign Up"? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='You Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state === "Login" ? login() : signup()}}>Continue</button>
        {state === "Sign Up" ? <p className="loginsignup-login">
          Already have an account? <span onClick={() => setState("Login")}>Log In</span></p> :<p className="loginsignup-login">
          Create an account? <span onClick={() => setState("Sign Up")}>Sign Up Here</span></p>}
        
          
          <div className="loginsignup-agree">
           <input type="checkbox" name="" id="" />
           <p>By continuing, I agree to the Terms of Use & Privacy Policy </p>
          </div>
        
      </div>
      
    </div>
  )
}

export default Longinsignup
