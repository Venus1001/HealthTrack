import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Signup from './components/Signup';
import Login from './components/Login'; 
import Dashboard from './components/Dashboard'; 
import ViewAllActivities from "./components/ViewAllActivities";
import LogActions from './components/LogActions';
import './App.css'; 
import './styles.css';



// Main App Component
const App = () => {
  return (
       
    <Router>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ViewAllActivities" element={<ViewAllActivities />} />
        <Route path="/LogActions" element={<LogActions />} />
      </Routes>
    </Router>
     );
 };

export default App;