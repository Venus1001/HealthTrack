const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const activityRoutes = require('./routes/activityRoutes');
const userFitnessRoutes = require('./routes/userFitnessRoutes');
const userNutritionRoutes = require('./routes/userNutritionRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/activity', activityRoutes);

app.use('/api/user', userFitnessRoutes);
app.use('/api/user', userNutritionRoutes);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const PORT = process.env.PORT || 5001; // Change to a different port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));