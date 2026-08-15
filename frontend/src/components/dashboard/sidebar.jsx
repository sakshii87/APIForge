import { NavLink, useNavigate } from "react-router-dom";
import {
  FaThLarge,
  FaFolderOpen,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import Logo from "../common/Logo";
import "../../styles/sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
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
      path: "/collections",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo />
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
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