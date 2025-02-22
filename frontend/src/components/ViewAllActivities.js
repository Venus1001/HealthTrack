

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ViewAllActivities.css';



const ViewAllActivities = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const context = queryParams.get('context');
  console.log(context)
  const token = localStorage.getItem('token');
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aiRecommendation = await axios.get(`http://104.236.200.204:5001/api/user/${context}/recommendation`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(`ai response -> ${aiRecommendation.data}`);
        setRecommendation(aiRecommendation.data);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      {
        !context && <div className="view-all-activities-container">
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
          <h1>View All Activities</h1>

          <div className="dashboard-layout">
            <div className="sidebar">
              <div className="profile">
                <div className="profile-pic"></div>
                <h1 className="profile-name">Venus's Tracker</h1>
              </div>
              <nav className="sidebar-nav">
                <Link to="#">Today</Link>
                <Link to="#">Activity</Link>
                <Link to="#">Sleep</Link>
                <Link to="#">Nutrition</Link>
                <Link to="#">Weight</Link>
              </nav>
              <button className="view-all-btn" onClick={() => navigate('/dashboard')}>
                Back to Dashboard
              </button>
            </div>
            <div className="main-content">
              <h2 className="recent-activities-title">Recent Activities</h2>
              <div className="recent-activities">
                <div className="activity-card">
                  <div className="activity-icon walk"></div>
                  <div className="activity-details">
                    <p>Morning Walk</p>
                    <span>1,000 steps</span>
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
              </div>
            </div>
          </div>
        </div>
      }
      {
        ['fitness', 'nutrition'].includes(context) && <div className="view-all-activities-container">
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
          <h1>View All Activities</h1>

          <div className="dashboard-layout">
            <div className="sidebar">
              <div className="profile">
                <div className="profile-pic"></div>
                <h1 className="profile-name">Venus's Tracker</h1>
              </div>
              { context == 'nutrition' ? 'Nutrition Recommendation:' : 'Fitness Recommendation:' }
              <br/>
              <div style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                maxWidth: '100%'
              }}>
                <pre style={{
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                  overflowX: 'auto',
                  maxWidth: '100%'
                }}>
                  {recommendation?.aiResponse ?? ''}
                </pre>
              </div>
              <button className="view-all-btn" onClick={() => navigate('/dashboard')}>
                Back to Dashboard
              </button>
            </div>
            <div className="main-content">
              <h2 className="recent-activities-title">Recent Activities</h2>
              <div className="recent-activities">
                <div className="activity-card">
                  <div className="activity-icon walk"></div>
                  <div className="activity-details">
                    <p>Morning Walk</p>
                    <span>1,000 steps</span>
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
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ViewAllActivities;
