import { useEffect, useState } from "react";
import { getProfile } from "../services/profileService";

import "../styles/profile.css";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (error) {
      console.error(
        "Failed to load profile",
        error
      );
    }
  };

  if (!profile) {
    return (
      <div className="profile-container">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">
        Profile
      </h1>

      <div className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            {profile.name
              ? profile.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <h2 className="profile-name">
            {profile.name}
          </h2>

          <span className="profile-role">
             Developer
          </span>

        </div>

        <div className="profile-details">

          <div className="detail-row">
            <span className="detail-label">
              Full Name
            </span>

            <span className="detail-value">
              {profile.name}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">
              Email
            </span>

            <span className="detail-value">
              {profile.email}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">
              Role
            </span>

            <span className="detail-value">
              Developer
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">
              Status
            </span>

            <span className="status-active">
              Active
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}