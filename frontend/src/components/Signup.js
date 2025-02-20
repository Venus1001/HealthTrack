import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { signup } from '../services/api'; // Import the signup function
import './Signup.css'; // Import the CSS file for styling

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      alert(response.message); // Show success message
    } catch (error) {
      alert(error.message || 'Signup failed'); // Show error message
    }
  };

  return (
    <div className="signup-container">
      <header className="header">
        <div className="header-logo">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_535)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect width="48" height="48" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <h2>HealthTrack</h2>
        </div>
      </header>
      <div className="form-container">
        <h2>Create your account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <p>First name</p>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p>Last name</p>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <label className="checkbox-container">
            <input type="checkbox" required />
            <p>I agree to the HealthTrack Privacy Policy and Terms of Service</p>
          </label>
          <button type="submit" className="signup-button">
            Sign up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;