import "../styles/login.css";
import {
  FaGithub,
  FaGoogle,
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaCode,
  FaChartLine,
  FaShieldAlt,
  FaServer,
} from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      {/* LEFT PANEL */}

      <div className="left-panel">

        <div className="gradient-circle one"></div>
        <div className="gradient-circle two"></div>

        <div className="branding">

          <div className="logo">
            <span className="logo-text">API</span>
            <span className="logo-highlight">Forge</span>
          </div>

          <h1>
            Build.
            <br />
            Test.
            <br />
            Monitor APIs.
          </h1>

          <p>
            One powerful platform to manage, test and monitor your APIs
            securely with real-time analytics.
          </p>

        </div>

        <div className="dashboard-card">

          <div className="dashboard-header">

            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>

          </div>

          <div className="dashboard-content">

            <div className="stat-card">

              <FaServer />

              <div>
                <h4>Requests</h4>
                <span>15.2K Today</span>
              </div>

            </div>

            <div className="stat-card">

              <FaChartLine />

              <div>
                <h4>Analytics</h4>
                <span>+21%</span>
              </div>

            </div>

            <div className="stat-card">

              <FaShieldAlt />

              <div>
                <h4>Security</h4>
                <span>Protected</span>
              </div>

            </div>

            <div className="stat-card">

              <FaCode />

              <div>
                <h4>REST APIs</h4>
                <span>48 Active</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="right-panel">

        <div className="login-card">

          <div className="mobile-logo">

            <span className="logo-text">API</span>
            <span className="logo-highlight">Forge</span>

          </div>

          <h2>Welcome Back</h2>

          <p className="subtitle">
            Sign in to continue managing your APIs.
          </p>

          <form>

            <label>Email Address</label>

            <div className="input-box">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Enter your email"
              />

            </div>

            <label>Password</label>

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            <div className="login-options">

              <label className="remember">

                <input type="checkbox" />

                Remember Me

              </label>

              <a href="/">Forgot Password?</a>

            </div>

            <button
              className="login-btn"
              type="submit"
            >
              Sign In
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="social-btn">

            <FaGoogle />

            Continue with Google

          </button>

          <button className="social-btn">

            <FaGithub />

            Continue with GitHub

          </button>

          <p className="signup-text">

            Don't have an account?

            <a href="/"> Create Account</a>

          </p>

        </div>

      </div>

    </div>
  );
}