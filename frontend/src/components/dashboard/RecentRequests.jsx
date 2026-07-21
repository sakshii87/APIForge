import { recentApis } from "../../data/recentApis";
import "../../styles/tables.css";

export default function RecentRequests() {
  return (
    <section className="table-card">
      <div className="table-header">
        <div>
          <h3>Recent Requests</h3>
          <p>Latest executions across your workspace</p>
        </div>
      </div>

      <div className="requests-table">
        {recentApis.map((request) => (
          <div className="request-row" key={request.id}>
            <span className={`method-badge ${request.method.toLowerCase()}`}>{request.method}</span>
            <span className="request-endpoint">{request.endpoint}</span>
            <span className="request-status">{request.status}</span>
            <span className="request-response">{request.responseTime}</span>
            <span className="request-time">{request.executedAt}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
