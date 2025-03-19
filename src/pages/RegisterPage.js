import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = ({ onRegister }) => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_BACKEND_REGISTER_API', userData);
      onRegister(response.data.user);
      alert('Registration successful! Please log in.');
    } catch (error) {
      console.error('Error registering:', error);
      alert('Registration failed.');
    }
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;