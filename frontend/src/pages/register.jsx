import "../styles/register.css";

import {
  FaGoogle,
  FaGithub,
  FaEnvelope,
  FaLock,
  FaUser,
  FaAt,
  FaEye,
  FaEyeSlash,
  FaCode,
  FaChartLine,
  FaShieldAlt,
  FaServer,
} from "react-icons/fa";

import { useState } from "react";

export default function Register() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (

    <div className="register-page">

      {/* ================= LEFT PANEL ================= */}

      <div className="left-panel">

        <div className="gradient-circle one"></div>
        <div className="gradient-circle two"></div>

        <div className="branding">

          <div className="logo">

            <span className="logo-text">API</span>

            <span className="logo-highlight">Forge</span>

          </div>

          <h1>

            Create APIs.

            <br />

            Deploy Faster.

            <br />

            Scale Confidently.

          </h1>

          <p>

            Join thousands of developers building,
            testing and monitoring APIs using one
            powerful platform.

          </p>

        </div>

        {/* Dashboard */}

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

      {/* ================= RIGHT PANEL ================= */}

      <div className="right-panel">

        <div className="register-card">

          <div className="mobile-logo">

            <span className="logo-text">API</span>

            <span className="logo-highlight">Forge</span>

          </div>

          <h2>Create Account</h2>

          <p className="subtitle">

            Join APIForge and start managing your APIs.

          </p>

          <form>

            {/* Name & Username */}

            <div className="two-column">

              <div>

                <label>Full Name</label>

                <div className="input-box">

                  <FaUser className="input-icon" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                  />

                </div>

              </div>

              <div>

                <label>Username</label>

                <div className="input-box">

                  <FaAt className="input-icon" />

                  <input
                    type="text"
                    placeholder="Choose username"
                  />

                </div>

              </div>

            </div>

            {/* Email */}

            <label>Email Address</label>

            <div className="input-box">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Enter your email"
              />

            </div>

                        {/* Password */}

            <label>Password</label>

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

            {/* Confirm Password */}

            <label>Confirm Password</label>

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {/* Terms */}

            <label className="terms">

              <input type="checkbox" />

              I agree to the
              <a href="/"> Terms of Service</a>
              {" "}and{" "}
              <a href="/">Privacy Policy</a>

            </label>

            {/* Create Account */}

            <button
              className="register-btn"
              type="submit"
            >
              Create Account
            </button>

          </form>

          {/* Divider */}

          <div className="divider">

            <span>OR</span>

          </div>

          {/* Social Buttons */}

          <button className="social-btn">

            <FaGoogle />

            Continue with Google

          </button>

          <button className="social-btn">

            <FaGithub />

            Continue with GitHub

          </button>

          {/* Sign In */}

          <p className="signin-text">

            Already have an account?

            <a href="/"> Sign In</a>

          </p>

        </div>

      </div>

    </div>

  );

}