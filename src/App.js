import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashboardPage from './pages/DashboardPage';
import CoursePage from './pages/CoursePage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateCoursePage from './pages/CreateCoursePage'; // Import the new page
import './App.css';

const App = () => {
  console.log("App rendered");

  useEffect(() => {
    console.log("Index.js loaded equivalent - App mounted");
  }, []);

  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleRegister = () => {
    window.location.href = '/login';
  };

  const token = localStorage.getItem('token');

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={token ? <DashboardPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route
              path="/register"
              element={<RegisterPage onRegister={handleRegister} />}
            />
            <Route
              path="/courses/:courseId"
              element={token ? <CoursePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/courses/:courseId/quiz"
              element={token ? <QuizPage /> : <Navigate to="/login" />}
            />
            
<Route path="/quiz" element={<QuizPage />} />
            <Route
              path="/create-course"
              element={token ? <CreateCoursePage /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;