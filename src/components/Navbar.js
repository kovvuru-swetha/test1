import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-title">
          E-Learning Dashboard
        </Link>
        <div className="navbar-links">
          <Link to="/">Dashboard</Link>

          {token ? (
            <>
              <Link to="/create-course">Create Course</Link>
              <Link to="/quiz">Quiz</Link> {/* Add Quiz link */}
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;