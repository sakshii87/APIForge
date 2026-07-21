import { FaBell, FaSearch, FaMoon } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search APIs, collections..." />
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-btn">
          <FaBell />
          <span className="notification-dot"></span>
        </button>

        <button className="icon-btn">
          <FaMoon />
        </button>

        <div className="profile-card">
          <div className="profile-avatar">SG</div>
          <div className="profile-info">
            <h4>Sakshi Ghogare</h4>
            <span>Developer</span>
          </div>
          <FiChevronDown className="profile-arrow" />
        </div>
      </div>
    </header>
  );
}