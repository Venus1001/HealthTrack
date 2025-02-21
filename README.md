# HealthTrack

**HealthTrack** is a web-based application designed to help users monitor and manage their health data effectively. Whether you're tracking your daily steps, calorie intake, or exercise routines, HealthTrack provides a simple and intuitive interface to log and analyze your health metrics.

## Features

- **User Authentication**: Secure login and registration system to protect user data.
- **Health Data Logging**: Log daily health metrics such as steps, calories, food, and exercise.
- **Goal Setting**: Set and track personalized health goals.
- **OpenAI Integration**: Get personalized health recommendations based on your logged data.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **OpenAI Integration**: OpenAI API for personalized recommendations
- **Deployment**: Heroku (Backend)

---

## Getting Started

Follow these instructions to set up the HealthTrack project locally on your machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account or local MongoDB installation
- OpenAI API key

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Venus1001/HealthTrack.git
   cd HealthTrack
   ```

2. **Install Dependencies:**

   Navigate to the backend folder and install backend dependencies:
   
   ```bash
   cd healthtrack-back
   npm install
   ```
   
   Navigate to the frontend folder and install frontend dependencies:
   
   ```bash
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the backend folder and add the following variables:

   ```env
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   OPENAI_API_KEY=<your-openai-api-key>
   PORT=5000
   ```

   Replace `<your-mongodb-connection-string>` with your MongoDB connection string, `<your-jwt-secret-key>` with a secure secret key, and `<your-openai-api-key>` with your OpenAI API key.

4. **Run the Backend Server:**

   From the backend folder, start the server:

   ```bash
   npm start
   ```

   The backend server will run on [http://localhost:5001](http://localhost:5001).

5. **Run the Frontend Application:**

   From the frontend folder, start the React application:

   ```bash
   npm start
   ```

   The frontend application will run on [http://localhost:3000](http://localhost:3000).

6. **Access the Application:**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to use HealthTrack.

## Usage

### Register/Login

Create a new account or log in with existing credentials.

### Log Health Data

Navigate to the dashboard and log your daily health metrics (steps, calories, water intake, etc.).

### Set Goals

Set personalized health goals and track your achievements.

### Get Recommendations

Use the OpenAI-powered recommendation feature to get personalized health tips based on your logged data.

---

## Technical Implementation: OpenAI Recommendation Model

The OpenAI Recommendation Model is integrated into HealthTrack to provide users with personalized health recommendations. Here’s how it works:

### 1. Data Collection:

Users log their daily health metrics (e.g., steps, calories, exercise) through the application.

### 2. Data Processing:

The logged data is sent to the backend, where it is processed and formatted into a prompt for the OpenAI API.

### 3. OpenAI API Integration:

The backend sends the formatted prompt to the OpenAI API (e.g., GPT-4) to generate personalized recommendations.

**Example prompt:**

```text
Fitness Recommendation:
Fitness Plan for Venus Hu:

Day 1: Resistance Training - Burn 200 calories
Day 2: HIIT Workout - Burn 250 calories
Day 3: Yoga - Burn 150 calories
Day 4: Cardio - Burn 300 calories
Day 5: Rest day

Total expected calories burned over 5 days: 900 calories.
```

### 4. Response Handling:

The OpenAI API returns a text-based recommendation, which is displayed to the user on the frontend.

### 5. User Interaction:

Users can view and follow the recommendations to improve their health habits.

---

## Contributing

Contributions are welcome! If you'd like to contribute to HealthTrack, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to the branch.
4. Submit a pull request detailing your changes.


## Contact

For any questions or feedback, feel free to reach out:

- **Venus Hu**
- **GitHub**: [Venus1001](https://github.com/Venus1001)
- **Email**: [huxiaowen.venus@gmail.com](mailto:huxiaowen.venus@gmail.com)

