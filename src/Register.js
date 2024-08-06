import React, { useState } from 'react';
import './styles/Register.css'; // Ensure the correct path

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted: ' + JSON.stringify(formData));
  };

  return (
    <div className="Register">
      <div className="register-form-container">
        <div className="left-div">
          <img src={require('./styles/images/logo.png')} alt="Logo" className="left-div-image" />
          <div className='slogan'>
            <h1>Empower Your Sales Pipeline</h1>
            <p>Transform Leads into Lifelong Customers</p>
          </div>
        </div>
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <h1>Create an account</h1>
            <h2>Please enter your details to sign up</h2><br/>
            <div className='inp_div'>
              <label>Name:</label><br />
              <input
                type="text"
                name="name"
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='inp_div'>
              <label>Email:</label><br />
              <input
                type="email"
                name="email"
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='inp_div'>
              <label>Phone Number:</label><br />
              <input
                type="tel"
                name="phone"
                placeholder='Enter your phone number'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className='inp_div'>
              <label>Password:</label><br />
              <input
                type="password"
                name="password"
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
            <p>Already have an account? <a href="/login">Login</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
