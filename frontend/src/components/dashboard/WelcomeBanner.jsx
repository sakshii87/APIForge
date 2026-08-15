import { FaBolt, FaFileImport, FaPlus } from "react-icons/fa";
import "../../styles/welcome.css";

export default function WelcomeBanner({ user }) {
  return (
  <section className="welcome-card">
    <div className="welcome-content">
      <span className="welcome-badge">
        <FaBolt />
        API Workspace
      </span>

      <h1>
        Welcome back,{" "}
        <span>
          {user?.name?.split(" ")[0] || "User"}
        </span>
      </h1>

      <p>
        Build, organize and manage your API collections
        from one centralized workspace.
      </p>

      <div className="welcome-actions">
        <button className="primary-btn">
          <FaPlus />
          New Collection
        </button>

        <button className="secondary-btn">
          <FaFileImport />
          API Requests
        </button>
      </div>
    </div>
  </section>
  );
}