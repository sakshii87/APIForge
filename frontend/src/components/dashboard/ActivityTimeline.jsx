import { FaCheckCircle, FaCode, FaServer } from "react-icons/fa";
import { activity } from "../../data/activity";
import "../../styles/activity.css";

const iconMap = {
  create: <FaCode />,
  update: <FaServer />,
  default: <FaCheckCircle />,
};

export default function ActivityTimeline() {
  return (
    <section className="activity-card">
      <div className="activity-header">
        <div>
          <h3>Activity Timeline</h3>
          <p>Your latest workspace actions</p>
        </div>
      </div>

      <div className="activity-list">
        {activity.map((item) => {
          const icon = item.type === "create" ? iconMap.create : item.type === "update" ? iconMap.update : iconMap.default;

          return (
            <div className="activity-item" key={item.id}>
              <div className="activity-icon">{icon}</div>
              <div className="activity-content">
                <h4>{item.action}</h4>
                <span>{item.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
