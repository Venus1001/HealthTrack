import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './LogActions.css'; // Import the CSS file for styling

const LogActions = () => {
  const navigate = useNavigate(); // For programmatic navigation
  const [activeForm, setActiveForm] = useState(null); // Track which form is open

  // Handle opening a form
  const handleOpenForm = (formName) => {
    setActiveForm(formName);
  };

  // Handle closing the form
  const handleCloseForm = () => {
    setActiveForm(null);
  };

  return (
    <div className="quick-actions-container">
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
      <h2 className="quick-actions-title">Quick Actions</h2>
      <div className="quick-actions">
        <button className="action-btn" onClick={() => handleOpenForm('Log Weight')}>
          Log Weight
        </button>
        <button className="action-btn" onClick={() => handleOpenForm('Log Sleep')}>
          Log Sleep
        </button>
        <button className="action-btn" onClick={() => handleOpenForm('Log Food')}>
          Log Food
        </button>
        <button className="action-btn" onClick={() => handleOpenForm('Log Workout')}>
          Log Workout
        </button>
        <button className="action-btn" onClick={() => handleOpenForm('Log Blood Pressure')}>
          Log Blood Pressure
        </button>
        <button className="action-btn" onClick={() => handleOpenForm('Log Heart Rate')}>
          Log Heart Rate
        </button>
      </div>

      {/* Log Weight Form */}
      {activeForm === 'Log Weight' && (
        <div className="log-form">
          <h3>Log Weight</h3>
          <form>
            <label>Weight (kg):</label>
            <input type="number" placeholder="Enter your weight" required />
            <div className="form-actions">
              <button type="submit" className="small-btn">
                Submit
              </button>
              <button type="button" className="small-btn" onClick={handleCloseForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Log Sleep Form */}
      {activeForm === 'Log Sleep' && (
        <div className="log-form">
          <h3>Log Sleep</h3>
          <form>
            <label>Time (hours):</label>
            <input type="number" placeholder="Enter your sleep time" required />
            <div className="form-actions">
              <button type="submit" className="small-btn">
                Submit
              </button>
              <button type="button" className="small-btn" onClick={handleCloseForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Log Food Form */}
      {activeForm === 'Log Food' && (
        <div className="log-form">
          <h3>Log Food</h3>
          <form>
            <label>Calories:</label>
            <input type="number" placeholder="Enter calories consumed" required />
            <div className="form-actions">
              <button type="submit" className="small-btn">
                Submit
              </button>
              <button type="button" className="small-btn" onClick={handleCloseForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Log Workout Form */}
      {activeForm === 'Log Workout' && (
        <div className="log-form">
          <h3>Log Workout</h3>
          <form>
            <label>Duration (minutes):</label>
            <input type="number" placeholder="Enter workout duration" required />
            <div className="form-actions">
              <button type="submit" className="small-btn">
                Submit
              </button>
              <button type="button" className="small-btn" onClick={handleCloseForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Log Blood Pressure Form */}
      {activeForm === 'Log Blood Pressure' && (
        <div className="log-form">
          <h3>Log Blood Pressure</h3>
          <form>
            <label>Systolic (mmHg):</label>
            <input type="number" placeholder="Enter systolic pressure" required />
            <label>Diastolic (mmHg):</label>
            <input type="number" placeholder="Enter diastolic pressure" required />
            <div className="form-actions">
              <button type="submit" className="small-btn">
                Submit
              </button>
              <button type="button" className="small-btn" onClick={handleCloseForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Log Heart Rate Form */}
      {activeForm === 'Log Heart Rate' && (
        <div className="log-form">
          <h3>Log Heart Rate</h3>
          <form>
            <label>Heart Rate (BPM):</label>
            <input type="number" placeholder="Enter your heart rate" required />
            <div className="form-actions">
              <button type="submit" className="small-btn">
                Submit
              </button>
              <button type="button" className="small-btn" onClick={handleCloseForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LogActions;