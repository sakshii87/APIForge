import { recentApis } from "../../data/recentApis";

import "../../styles/tables.css";

export default function RecentApis() {
  return (
    <div className="table-card">

      <div className="table-header">

        <div>
          <h3>Recent APIs</h3>
          <p>Latest API requests and responses</p>
        </div>

        <button className="view-btn">
          View All
        </button>

      </div>


      <div className="api-table">

        <div className="api-row api-header">

          <span>Method</span>
          <span>Endpoint</span>
          <span>Status</span>
          <span>Response</span>

        </div>


        {recentApis.map((api) => (

          <div
            className="api-row"
            key={api.id}
          >

            <span>

              <span
                className={`method-badge ${api.method.toLowerCase()}`}
              >
                {api.method}
              </span>

            </span>


            <span className="endpoint-text">
              {api.endpoint}
            </span>


            <span
              className={
                api.status.startsWith("2")
                  ? "success-status"
                  : "error-status"
              }
            >
              {api.status}
            </span>


            <span className="response-time">
              {api.time}
            </span>


          </div>

        ))}


      </div>

    </div>
  );
}