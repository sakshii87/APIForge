// import { useEffect, useState } from "react";
// import { getProfile } from "../services/profileService";

// import "../styles/profile.css";

// export default function Profile() {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     loadProfile();
//   }, []);

//   const loadProfile = async () => {
//     try {
//       const data = await getProfile();
//       setProfile(data);
//     } catch (error) {
//       console.error(
//         "Failed to load profile",
//         error
//       );
//     }
//   };

//   if (!profile) {
//     return (
//       <div className="profile-container">
//         Loading Profile...
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <h1 className="profile-title">
//         Profile
//       </h1>

//       <div className="profile-card">

//         <div className="profile-header">

//           <div className="profile-avatar">
//             {profile.name
//               ? profile.name.charAt(0).toUpperCase()
//               : "U"}
//           </div>

//           <h2 className="profile-name">
//             {profile.name}
//           </h2>

//           <span className="profile-role">
//              Developer
//           </span>

//         </div>

//         <div className="profile-details">

//           <div className="detail-row">
//             <span className="detail-label">
//               Full Name
//             </span>

//             <span className="detail-value">
//               {profile.name}
//             </span>
//           </div>

//           <div className="detail-row">
//             <span className="detail-label">
//               Email
//             </span>

//             <span className="detail-value">
//               {profile.email}
//             </span>
//           </div>

//           <div className="detail-row">
//             <span className="detail-label">
//               Role
//             </span>

//             <span className="detail-value">
//               Developer
//             </span>
//           </div>

//           <div className="detail-row">
//             <span className="detail-label">
//               Status
//             </span>

//             <span className="status-active">
//               Active
//             </span>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }





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
      console.error("Failed to load profile", error);
    }
  };

  if (!profile) {
    return (
      <div className="profile-container">
        <div className="profile-loading">
          Loading Profile...
        </div>
      </div>
    );
  }

  const profileName = profile.name || "User";

  return (
    <div className="profile-container">

      {/* PAGE TITLE */}
      <div className="profile-page-header">
        <h1 className="profile-title">
          Profile
        </h1>

        <p className="profile-subtitle">
          View your APIForge account information.
        </p>
      </div>


      {/* PROFILE CARD */}
      <div className="profile-card">

        {/* PROFILE SUMMARY */}
        <div className="profile-summary">

          <div className="profile-avatar">
            {profileName.charAt(0).toUpperCase()}
          </div>

          <h2 className="profile-name">
            {profileName}
          </h2>

          <span className="profile-role">
            Developer
          </span>

        </div>


        {/* PROFILE DETAILS */}
        <div className="profile-details">

          <div className="detail-row">

            <div className="detail-label">
              Full Name
            </div>

            <div className="detail-value">
              {profileName}
            </div>

          </div>


          <div className="detail-row">

            <div className="detail-label">
              Email
            </div>

            <div className="detail-value">
              {profile.email || "Not available"}
            </div>

          </div>


          <div className="detail-row">

            <div className="detail-label">
              Role
            </div>

            <div className="detail-value">
              Developer
            </div>

          </div>


          <div className="detail-row">

            <div className="detail-label">
              Status
            </div>

            <div className="detail-value status-active">
              <span className="status-dot"></span>
              Active
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}