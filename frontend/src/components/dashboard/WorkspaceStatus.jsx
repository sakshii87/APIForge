import { FaLayerGroup, FaCloud, FaPlug, FaSyncAlt } from "react-icons/fa";
import "../../styles/cards.css";

const statusItems = [
  {
    title: "Current Workspace",
    value: "API Development",
    detail: "Primary workspace",
    icon: FaLayerGroup,
  },
  {
    title: "Current Environment",
    value: "Development",
    detail: "Local sandbox",
    icon: FaCloud,
  },
  {
    title: "Connection Status",
    value: "Connected",
    detail: "Live to backend",
    icon: FaPlug,
  },
  {
    title: "Last Sync",
    value: "2 min ago",
    detail: "Collections updated",
    icon: FaSyncAlt,
  },
];

export default function WorkspaceStatus() {
  return (
    <section className="workspace-status-grid">
      {statusItems.map((item) => {
        const Icon = item.icon;

        return (
          <div className="workspace-card" key={item.title}>
            <div className="workspace-icon">
              <Icon />
            </div>
            <div>
              <p className="workspace-label">{item.title}</p>
              <h3>{item.value}</h3>
              <span>{item.detail}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
