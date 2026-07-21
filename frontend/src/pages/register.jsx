import api from "../services/api";
import "../styles/register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbTopologyComplex } from "react-icons/tb";

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


export default function Register() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Check password match
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  console.log("Sending Data:", formData);

  try {
    const response = await api.post("/auth/register", {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });

    alert(response.data.message);

    navigate("/login");

    // Clear form after successful registration
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  } catch (error) {

    console.error("Registration Error:", error.response?.data);

    if (error.response) {
      alert(
        error.response.data.message ||
        JSON.stringify(error.response.data)
      );
    } else {
      alert("Server Error");
    }
  }
};

  return (

    <div className="register-page">

      {/* ================= LEFT PANEL ================= */}

      <div className="left-panel">

        <div className="gradient-circle one"></div>
        <div className="gradient-circle two"></div>

        <div className="branding">

          <div className="logo">

      <div className="logo-icon">
        <TbTopologyComplex />
      </div>

      <div className="logo-name">
        <span className="logo-text">API</span>
        <span className="logo-highlight">Forge</span>
      </div>

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

          <form onSubmit={handleSubmit}>

            {/* Name & Username */}

            <div className="two-column">

              <div>

                <label>Full Name</label>

                <div className="input-box">

                  <FaUser className="input-icon" />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />

                </div>

              </div>

              <div>

                <label>Username</label>

                <div className="input-box">

                  <FaAt className="input-icon" />

                  <input
                    type="text"
                    name="username"
                    placeholder="Choose username"
                    value={formData.username}
                    onChange={handleChange}
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
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

                        {/* Password */}

            <label>Password</label>

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
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
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
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