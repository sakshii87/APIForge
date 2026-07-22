import { NavLink, useNavigate } from "react-router-dom";
import {
  FaThLarge,
  FaFolderOpen,
  FaPlug,
  FaHistory,
  FaCloud,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import Logo from "../common/Logo";
import "../../styles/sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove JWT Token
    localStorage.removeItem("token");

    // Redirect to Login Page
    navigate("/login", { replace: true });
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaThLarge />,
      path: "/dashboard",
    },
    {
      name: "Collections",
      icon: <FaFolderOpen />,
      path: "/dashboard",
    },
    {
      name: "API Requests",
      icon: <FaPlug />,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: <FaHistory />,
      path: "/history",
    },
    {
      name: "Environments",
      icon: <FaCloud />,
      path: "/workspace",
    },
    {
      name: "Monitoring",
      icon: <FaChartLine />,
      path: "/monitoring",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-header">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span className="sidebar-text">
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="sidebar-footer">
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}