import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import { getGreeting } from '../util/util';


const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [fitnessData, setFitnessData] = useState([]);
  const [nutritionData, setNutritionData] = useState([]);
  const [recommendation, setRecommendation] = useState(null);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [totalSleep, setTotalSleep] = useState(0);
  const [weight, setWeight] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const apiBaseUrl = 'http://104.236.200.204:5001/api';

  const token = localStorage.getItem('token');


  // Fetch user profile, fitness, and nutrition data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await axios.get(`${apiBaseUrl}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,

          },
        });
        console.log(`Profile response -> ${JSON.stringify(profileResponse.data)}`);
        setUsername(profileResponse.data.firstName);
        setWeight(profileResponse.data.weight);

        const fitnessResponse = await axios.get(`${apiBaseUrl}/user/fitness`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(`Fitness response -> ${JSON.stringify(fitnessResponse)}`)
        setFitnessData(fitnessResponse.data);

        let caloriesBurned = 0;

        fitnessResponse.data.forEach(fitness => {
          caloriesBurned += fitness.calories;
        });
        console.log(`calories -> ${caloriesBurned}`);

        setCaloriesBurned(caloriesBurned);

        console.log(`Total calories burned -> ${caloriesBurned}`);

        let totalSteps = 0;

        fitnessResponse.data.forEach(fitness => {
          totalSteps += fitness.steps;
        });
        console.log(`steps -> ${totalSteps}`);

        setTotalSteps(totalSteps);

        let totalSleep = 0;

        fitnessResponse.data.forEach(fitness => {
          const sleep = fitness.activity == "Sleep" ? 8 : 0
          totalSleep += sleep;
        });
        console.log(`totalSleep -> ${totalSleep}`);

        setTotalSleep(totalSleep);

        const nutritionResponse = await axios.get(`${apiBaseUrl}/user/nutrition`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(`Nutrition response -> ${JSON.stringify(nutritionResponse)}`);
        setNutritionData(nutritionResponse.data);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  // Fetch AI recommendation
  const fetchRecommendation = async (type) => {
    try {
      const endpoint =
        type === 'fitness'
          ? `${apiBaseUrl}/fitness/recommendation`
          : `${apiBaseUrl}/nutrition/recommendation`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRecommendation(response.data.recommendation);
    } catch (error) {
      setError('Failed to fetch recommendation.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="dashboard-container">
      <header className="header-healthtrack">
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
          <h2><a className="header-logo-text" href="/">HealthTrack</a></h2>
        </div>
      </header>
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-layout">
        <div className="sidebar">
          <div className="profile">
            <h1 className="profile-name">{username || 'User'}</h1>
          </div>
          <nav className="sidebar-nav">
            <Link to="/today">Today</Link>
            <Link to="/activity">Activity</Link>
            <Link to="/sleep">Sleep</Link>
            <Link to="/nutrition">Nutrition</Link>
            <Link to="/weight">Weight</Link>
          </nav>
          <button className="view-all-btn" onClick={() => navigate('/ViewAllActivities')}>
            View All Activities
          </button>
          <button className="view-all-btn" onClick={() => navigate('/ViewAllActivities?context=fitness')}>
            Generate Fitness Recommendation
          </button>
          <button className="view-all-btn" onClick={() => navigate('/ViewAllActivities?context=nutrition')}>
            Generate Nutrition Recommendation
          </button>
        </div>

        <div className="stats-container">
          <h1 className="greeting">
            {getGreeting()}, <span className="user-name">{username || 'User'}</span>
          </h1>

          {/* Display Stats */}
          <div className="stats">
            <div className="stat-card">Steps: {totalSteps}</div>
            <div className="stat-card">Calories Burned: {caloriesBurned}</div>
            <div className="stat-card">Weight: {weight || 'N/A'} lbs</div>
            <div className="stat-card">Sleep: {totalSleep} hours</div>
          </div>

          {/* Display Fitness Logs */}
          <div className="recent-activities">
            <h3>Fitness Logs</h3>
            <ul>
              {fitnessData.length > 0 ? (
                fitnessData.map((activity, index) => (
                  <li key={index}>
                    <strong>Activity:</strong> {activity.date}: {activity.activity} <br />
                    <strong>Steps:</strong> {activity.steps} <br />
                    <strong>Calories:</strong> {activity.calories} <br />


                  </li>
                ))
              ) : (
                <p>No fitness data available.</p>
              )}
            </ul>
          </div>

          {/* Display Nutrition Logs */}
          <div className="recent-activities">
            <h3>Nutrition Logs</h3>
            <ul>
              {nutritionData.length > 0 ? (
                nutritionData.map((nutrition, index) => (
                  <li key={index}>
                    <strong>Category:</strong>{nutrition.date}: {nutrition.category} - {nutrition.grams} grams
                  </li>
                ))
              ) : (
                <p>No nutrition data available.</p>
              )}
            </ul>
          </div>

          {/* Display AI Recommendation */}
          {recommendation && (
            <div className="recommendation-section">
              <h2>AI Recommendation</h2>
              <p>{recommendation}</p>
            </div>
          )}

          {/* Log Actions Button */}
          <button className="recommendation-btn" onClick={() => navigate('/LogActions')}>
            Log Actions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;