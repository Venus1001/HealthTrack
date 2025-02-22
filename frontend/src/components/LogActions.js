import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LogActions.css';
import { getCurrentDate } from '../util/util';

const LogActions = () => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState(null);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const apiBaseUrl = 'http://104.236.200.204:5001/api';
  const token = localStorage.getItem('token');

  const handleOpenForm = (formName) => {
    setActiveForm(formName);
    setError(null);
    setSuccess(null);
  };

  const handleCloseForm = () => {
    setActiveForm(null);
    setFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      let endpoint = '';
      let payload = {};

      switch (activeForm) {
        case 'Log Weight':
          endpoint = `${apiBaseUrl}/profile`;
          payload = { weight: parseFloat(formData.weight) };
          break;
        case 'Log Height':
          endpoint = `${apiBaseUrl}/profile`;
          payload = { height: parseFloat(formData.height) };
          break;
        case 'Log Fitness Goal':
          endpoint = `${apiBaseUrl}/profile`;
          payload = { fitnessGoal: formData.fitnessGoal };
          break;
        case 'Log Sleep':
          endpoint = `${apiBaseUrl}/user/fitness`;
          payload = {
            date: getCurrentDate(),
            steps: 0,
            activity: "Sleep",
            calories: 0,
            comment: `Total hours: ${formData.sleepDuration}`
          };
          break;
        case 'Log Food':
          endpoint = `${apiBaseUrl}/user/nutrition`;
          payload = {
            date: getCurrentDate(),
            calories: parseFloat(formData.calories),
            category: formData.category,
            grams: parseInt(formData.grams)
          };
          break;
        case 'Log Workout':
          endpoint = `${apiBaseUrl}/user/fitness`;
          payload = {
            date: getCurrentDate(),
            steps: 0,
            activity: formData.activityType,
            calories: parseFloat(formData.calories),
            activity: `Total hours: ${formData.duration}`
          };
          break;
        case 'Log Blood Pressure':
          endpoint = `${apiBaseUrl}/fitness`;
          payload = {
            systolic: parseFloat(formData.systolic),
            diastolic: parseFloat(formData.diastolic),
          };
          break;
        case 'Log Heart Rate':
          endpoint = `${apiBaseUrl}/fitness`;
          payload = { heartRate: parseFloat(formData.heartRate) };
          break;
        default:
          setError('Invalid form type.');
          return;
      }

      const response = await axios.post(endpoint, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess(response.data.message || 'Data logged successfully!');
      setFormData({});
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'An error occurred.');
      } else if (error.request) {
        setError('No response from server. Please check your connection.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="quick-actions-container">
      <header className="header">
        <div className="header-logo">
          <h2><a href="/dashboard">HealthTrack</a></h2>
        </div>
      </header>
      <h2 className="quick-actions-title">Quick Actions</h2>
      <div className="quick-actions">
        <button className="action-btn" onClick={() => handleOpenForm('Log Weight')}>
          Log Weight
        </button>
        <button className="action-btn" onClick={() => handleOpenForm('Log Height')}>
          Log Height
        </button>
        <button className="action-btn" onClick={() => handleOpenForm('Log Fitness Goal')}>
          Log Fitness Goal
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
      </div>

      {/* Log Weight Form */}
      {activeForm === 'Log Weight' && (
        <div className="log-form">
          <h3>Log Weight</h3>
          <form onSubmit={handleSubmit}>
            <label>Weight (lb):</label>
            <input
              type="number"
              name="weight"
              placeholder="Enter your weight"
              value={formData.weight || ''}
              onChange={handleInputChange}
              required
            />
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

      {activeForm === 'Log Height' && (
        <div className="log-form">
          <h3>Log Height</h3>
          <form onSubmit={handleSubmit}>
            <label>Height (inches):</label>
            <input
              type="number"
              name="height"
              placeholder="Enter your height"
              value={formData.height || ''}
              onChange={handleInputChange}
              required
            />
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

    {activeForm === 'Log Fitness Goal' && (
        <div className="log-form">
          <h3>Log Fitness Goal</h3>
          <form onSubmit={handleSubmit}>
            <label>Fitness Goal:</label>
            <input
              type="string"
              name="fitnessGoal"
              placeholder="Enter your fitness goal"
              value={formData.fitnessGoal || ''}
              onChange={handleInputChange}
              required
            />
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
          <form onSubmit={handleSubmit}>
            <label>Time (hours):</label>
            <input
              type="number"
              name="sleepDuration"
              placeholder="Enter your sleep time"
              value={formData.sleepDuration || ''}
              onChange={handleInputChange}
              required
            />
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
          <form onSubmit={handleSubmit}>
            <label>Calories:</label>
            <input
              type="number"
              name="calories"
              placeholder="Enter calories consumed"
              value={formData.calories || ''}
              onChange={handleInputChange}
              required
            />
            <label>Category:</label>
            <input
              type="string"
              name="category"
              placeholder="Enter food category"
              value={formData.category || ''}
              onChange={handleInputChange}
              required
            />
            <label>Grams:</label>
            <input
              type="number"
              name="grams"
              placeholder="Enter total grams consumed"
              value={formData.grams || ''}
              onChange={handleInputChange}
              required
            />
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
          <form onSubmit={handleSubmit}>
            <label>Duration (minutes):</label>
            <input
              type="number"
              name="duration"
              placeholder="Enter workout duration"
              value={formData.duration || ''}
              onChange={handleInputChange}
              required
            />
            <label>Activity type</label>
            <input
              type="string"
              name="activityType"
              placeholder="Enter activity type"
              value={formData.activityType || ''}
              onChange={handleInputChange}
              required
            />
            <label>Calories:</label>
            <input
              type="number"
              name="calories"
              placeholder="Enter calories consumed"
              value={formData.calories || ''}
              onChange={handleInputChange}
              required
            />
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
          <form onSubmit={handleSubmit}>
            <label>Systolic (mmHg):</label>
            <input
              type="number"
              name="systolic"
              placeholder="Enter systolic pressure"
              value={formData.systolic || ''}
              onChange={handleInputChange}
              required
            />
            <label>Diastolic (mmHg):</label>
            <input
              type="number"
              name="diastolic"
              placeholder="Enter diastolic pressure"
              value={formData.diastolic || ''}
              onChange={handleInputChange}
              required
            />
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
          <form onSubmit={handleSubmit}>
            <label>Heart Rate (BPM):</label>
            <input
              type="number"
              name="heartRate"
              placeholder="Enter your heart rate"
              value={formData.heartRate || ''}
              onChange={handleInputChange}
              required
            />
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

      {/* Display success/error messages */}
      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LogActions;