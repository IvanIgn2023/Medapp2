// src/Components/Login/Login.js
import React from 'react';
import './Login.css'; // Import the CSS file for styling

function Login() {
  return (
    <div className="container"> {/* Main container div for the page content */}
      <div className="login-grid"> {/* Div for login grid layout */}
        <div className="login-text"> {/* Div for login text */}
          <h2>Login</h2>
        </div>
        <div className="login-text"> {/* Additional login text with a link to Sign Up page */}
          Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style={{ color: '#2190FF' }}>Sign Up Here</a></span>
        </div>
        <br />
        <div className="login-form"> {/* Div for login form */}
          <form>
            <div className="form-group"> {/* Form group for email input */}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group"> {/* Form group for password input */}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>
            <div className="btn-group"> {/* Button group for login and reset buttons */}
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
            <br />
            <div className="login-text"> {/* Additional login text for 'Forgot Password' option */}
              Forgot Password?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
