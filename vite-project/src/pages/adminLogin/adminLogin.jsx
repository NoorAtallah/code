import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('https://codelakeback.onrender.com/api/users/login', {
        username,
        password
      });
      
      // Check if user is admin
      if (response.data.role !== 'admin') {
        setError('Access denied: Admin privileges required');
        setLoading(false);
        return;
      }
      
      // Store token in localStorage
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminUser', JSON.stringify(response.data));
      
      setSuccess(true);
      setLoading(false);
      
      // Redirect to admin dashboard after successful login
      setTimeout(() => {
        window.location.href = '/admin/dashboard';
      }, 1000);
      
    } catch (error) {
      setError(error.response?.data?.error || 'Login failed');
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-form-wrapper">
        <h2>Admin Login</h2>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Login successful! Redirecting...</div>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="login-button" 
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
      
      <style jsx>{`
        .admin-login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f5f5f5;
        }
        
        .login-form-wrapper {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }
        
        h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #333;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        
        input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        
        .login-button {
          width: 100%;
          padding: 0.75rem;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .login-button:hover {
          background-color: #1d4ed8;
        }
        
        .login-button:disabled {
          background-color: #93c5fd;
          cursor: not-allowed;
        }
        
        .error-message {
          background-color: #fee2e2;
          color: #b91c1c;
          padding: 0.75rem;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        
        .success-message {
          background-color: #dcfce7;
          color: #15803d;
          padding: 0.75rem;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;