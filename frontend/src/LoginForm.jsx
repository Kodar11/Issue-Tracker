import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import axios from 'axios';

function LoginForm() {
  const [formData, setFormData] = useState({
    userid: '',
    password: '',
  });

  // history.pushState(null, null, location.href);
    // history.back();
    // history.forward();
    // window.history.forward(1);
    // window.onpopstate = function ()
    // {
    //     history.go(1);
    // };

  const navigateToAboutPage = () => {
    window.location.href = '/home';
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const res = await axios.post('http://localhost:8000/api/v1/users/login',{
        username:formData.userid, password:formData.password
      },{withCredentials:true});

      if(res.data.statusCode == 200){
        console.log("Success ")
        navigateToAboutPage();
      }else{
        console.log("Error");
      }

    }catch(e){
      console.log(e);
      alert(e);
    }
    
  };

  return (
    <>
      <div className="login-form-container">
        <h1>Issue Tracker</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="userid"
            placeholder="User Id"
            value={formData.userid}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <br/>
        <a href='/'>Register</a>
      </div>
      
    </>
  );
}

export default LoginForm;