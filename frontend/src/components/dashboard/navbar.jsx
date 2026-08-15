import { useEffect, useState } from "react";
import { getProfile } from "../../services/profileService";
import "../../styles/navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await getProfile();
        setUser(profile);
      } catch (error) {
        console.error(
          "Failed to load profile",
          error
        );
      }
    };

    loadProfile();
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div>
          <h2>APIForge Dashboard</h2>

          <span
            style={{
              color: "#94a3b8",
              fontSize: "13px",
            }}
          >
            Build. Test. Monitor APIs.
          </span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="profile-card">
          <div className="profile-avatar">
            {user?.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <div className="profile-info">
            <h4>
              {user?.name || "User"}
            </h4>

            
          </div>
        </div>
      </div>
    </header>
  );
}