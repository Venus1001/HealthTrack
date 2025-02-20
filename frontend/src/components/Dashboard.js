// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // For programmatic navigation
// Fetch user data from localStorage (or API)
useEffect(() => {
  const storedUser = localStorage.getItem('loggedInUser'); 
  if (storedUser) {
      setUsername(storedUser);
  }
}, []);

  return (
    <div className="dashboard-container">
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
      {/* <h1>Dashboard</h1> */}
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-layout">
        <div className="sidebar">
          <div className="profile">
            <div className="profile-pic"></div>
            <h1 className="profile-name"><span className="user-name">{username || 'User'}</span></h1>
          </div>
          <nav className="sidebar-nav">
            <Link to="#">Today</Link>
            <Link to="#">Activity</Link>
            <Link to="#">Sleep</Link>
            <Link to="#">Nutrition</Link>
            <Link to="#">Weight</Link>
          </nav>
          <button className="view-all-btn" onClick={() => navigate('/ViewAllActivities')}>
            View All Activities
          </button>
        </div>
        {/* //UPDATE */}
        {/* <div className="main-content"> */}
        <div className="stats-container">
          <h1 className="greeting">Good morning, <span className="user-name">{username || 'User'}</span></h1>
          <div className="stats">
            <div className="stat-card">Steps: 1,500</div>
            <div className="stat-card">Calories: 500</div>
            <div className="stat-card">Heart Rate: 70 BPM</div>
            <div className="stat-card">Sleep: 8h 30m</div>
          </div>


          <div className="stats-container">
                        <div className="stat-box">Steps: 1,500</div>
                        <div className="stat-box">Calories: 500</div>
                        <div className="stat-box">Heart Rate: 70 BPM</div>
                        <div className="stat-box">Sleep: 8h 30m</div>
                    </div>

                    <div className="recent-activities">
                        <h3>Recent Activities</h3>
                        <ul>
                            <li>Morning Walk - 1,500 steps</li>
                            <li>Breakfast - 500 calories</li>
                            <li>Heart Rate - 70 BPM</li>
                            <li>Last Night's Sleep - 8h 30m</li>
                        </ul>
                    </div>
          {/* <h2 className="recent-activities-title">Recent Activities</h2> */}
          {/* <div className="recent-activities">
            <div className="activity-card">
              <div className="activity-icon walk"></div>
              <div className="activity-details">
                <p>Morning Walk</p>
                <span>1,500 steps</span>
              </div>
              <span className="activity-time">8:00 AM</span>
            </div>
            <div className="activity-card">
              <div className="activity-icon breakfast"></div>
              <div className="activity-details">
                <p>Breakfast</p>
                <span>500 calories</span>
              </div>
              <span className="activity-time">7:30 AM</span>
            </div>
            <div className="activity-card">
              <div className="activity-icon heart-rate"></div>
              <div className="activity-details">
                <p>Heart Rate</p>
                <span>70 BPM</span>
              </div>
              <span className="activity-time">70 BPM</span>
            </div>
            <div className="activity-card">
              <div className="activity-icon sleep"></div>
              <div className="activity-details">
                <p>Last Night's Sleep</p>
                <span>8 hours 30 minutes</span>
              </div>
              <span className="activity-time">8:30 PM</span>
            </div>
          </div> */}
          <button className="quick-actions-button" onClick={() => navigate('/LogActions')}>
            Log Actions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;