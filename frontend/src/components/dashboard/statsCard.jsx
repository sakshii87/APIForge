import "../../styles/cards.css";
import { dashboardStats } from "../../data/dashboardData";

export default function StatsCards() {
  return (
    <section className="stats-grid">
      {dashboardStats.map((item) => {
        const Icon = item.icon;

        return (
          <div className="stat-card" key={item.id}>

            <div className={`stat-icon ${item.color}`}>
              <Icon />
            </div>

            <div className="stat-content">

              <span className="stat-title">
                {item.title}
              </span>

              <h2>{item.value}</h2>

              <p>{item.change} this month</p>

            </div>

          </div>
        );
      })}
    </section>
  );
}