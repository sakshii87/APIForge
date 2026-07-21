import {
  FaPlus,
  FaFileImport,
  FaCode,
  FaBolt,
} from "react-icons/fa";

import "../../styles/welcome.css";

export default function Welcome() {
  return (
    <section className="welcome-card">

      <div className="welcome-left">

        <span className="welcome-badge">
          <FaBolt />
          API Management Platform
        </span>

        <h1>
          Welcome back,
          <span> Sakshi 👋</span>
        </h1>

        <p>
          Build, test and monitor your REST APIs from one
          centralized workspace. Manage collections,
          track response performance and streamline your
          API development workflow with APIForge.
        </p>

        <div className="welcome-buttons">

          <button className="primary-btn">
            <FaPlus />
            Create API
          </button>

          <button className="secondary-btn">
            <FaFileImport />
            Import Collection
          </button>

        </div>

      </div>

      <div className="welcome-right">

        <div className="welcome-preview">

          <div className="preview-header">

            <div className="preview-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>

            <span className="preview-title">
              APIForge Workspace
            </span>

          </div>

          <div className="preview-body">

            <div className="endpoint get">
              <span className="method">GET</span>
              <span>/api/users</span>
            </div>

            <div className="endpoint post">
              <span className="method">POST</span>
              <span>/api/login</span>
            </div>

            <div className="endpoint put">
              <span className="method">PUT</span>
              <span>/api/profile</span>
            </div>

            <div className="endpoint delete">
              <span className="method">DELETE</span>
              <span>/api/user/12</span>
            </div>

            <div className="preview-footer">

              <FaCode />

              <span>
                Ready to Build & Test APIs
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}