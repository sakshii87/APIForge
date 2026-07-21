import { FaPlus, FaFileImport, FaPlay, FaBook } from "react-icons/fa";

const actions = [
  {
    title: "Create API",
    description: "Add a new API endpoint",
    icon: <FaPlus />,
    color: "#4f46e5",
  },
  {
    title: "Import Collection",
    description: "Import Postman collection",
    icon: <FaFileImport />,
    color: "#7c3aed",
  },
  {
    title: "Test API",
    description: "Send a new API request",
    icon: <FaPlay />,
    color: "#0f766e",
  },
  {
    title: "Generate Docs",
    description: "Create API documentation",
    icon: <FaBook />,
    color: "#ea580c",
  },
];

export default function QuickActions() {
  return (
    <div className="dashboard-card quick-actions-card">
      <div className="dashboard-card-header">
        <div>
          <h3>Quick Actions</h3>
          <p>Jump into your most common workflows.</p>
        </div>
      </div>

      <div className="quick-actions-grid">
        {actions.map((action) => (
          <button key={action.title} className="quick-action-item">
            <div
              className="quick-action-icon"
              style={{ backgroundColor: `${action.color}18` , color: action.color }}
            >
              {action.icon}
            </div>
            <div>
              <h4>{action.title}</h4>
              <p>{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}