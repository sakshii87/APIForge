import { FaBolt, FaFileImport, FaPlus } from "react-icons/fa";
import "../../styles/welcome.css";

export default function WelcomeBanner() {
  return (
    <section className="welcome-card">
      <div className="welcome-content">
        <span className="welcome-badge">
          <FaBolt />
          API workspace overview
        </span>

        <h1>
          Welcome back, <span>Sakshi</span>
        </h1>

        <p>
          Track your current workspace, review recent requests, and jump into your next API task without leaving the flow.
        </p>

        <div className="welcome-actions">
          <button className="primary-btn">
            <FaPlus />
            New API
          </button>

          <button className="secondary-btn">
            <FaFileImport />
            Import Collection
          </button>
        </div>
      </div>

      <div className="welcome-panel">
        <div className="welcome-panel-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <div className="welcome-panel-body">
          <div className="welcome-request-row">
            <span className="method-badge get">GET</span>
            <span>/api/users</span>
          </div>
          <div className="welcome-request-row">
            <span className="method-badge post">POST</span>
            <span>/api/auth/login</span>
          </div>
          <div className="welcome-request-row">
            <span className="method-badge put">PUT</span>
            <span>/api/profile</span>
          </div>
        </div>
      </div>
    </section>
  );
}
