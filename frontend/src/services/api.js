import axios from 'axios';

const API_BASE_URL = 'http://104.236.200.204:5001/api'; // Replace with your backend URL

// User Signup
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// User Login
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get User Profile
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Log Activity
export const logActivity = async (activityData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/activity/activity`, activityData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};