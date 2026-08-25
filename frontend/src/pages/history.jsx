import { useEffect, useState } from "react";
import { getAllExecutionHistory } from "../services/historyService";
import "../styles/history.css";

export default function History() {
  const [executions, setExecutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getAllExecutionHistory();

      setExecutions(data);
    } catch (err) {
      console.error("Failed to load execution history:", err);

      if (err.response?.status === 403) {
        setError("Session expired. Please login again.");
      } else {
        setError("Failed to load execution history.");
      }
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateTime) => {
    if (!dateTime) return "-";

    return new Date(dateTime).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusClass = (statusCode) => {
    if (statusCode >= 200 && statusCode < 300) {
      return "success";
    }

    if (statusCode >= 400 && statusCode < 500) {
      return "client-error";
    }

    if (statusCode >= 500) {
      return "server-error";
    }

    return "other";
  };

  return (
    <div className="history-page">

      <div className="history-header">
        <div>
          <h1>Execution History</h1>
          <p>
            View your previously executed API requests.
          </p>
        </div>

        <button
          className="history-refresh-btn"
          onClick={loadHistory}
        >
          Refresh
        </button>
      </div>

      {loading && (
        <div className="history-message">
          Loading execution history...
        </div>
      )}

      {!loading && error && (
        <div className="history-error">
          {error}
        </div>
      )}

      {!loading && !error && executions.length === 0 && (
        <div className="history-empty">
          <h3>No execution history</h3>
          <p>
            Execute an API request to see its history here.
          </p>
        </div>
      )}

      {!loading && !error && executions.length > 0 && (
        <div className="history-table-container">
          <table className="history-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Method</th>
                <th>URL</th>
                <th>Status</th>
                <th>Response Time</th>
                <th>Executed At</th>
              </tr>
            </thead>

            <tbody>
              {executions.map((execution) => (
                <tr key={execution.id}>
                  <td>
                    #{execution.id}
                  </td>

                  <td>
                    <span
                      className={`method-badge ${execution.method?.toLowerCase()}`}
                    >
                      {execution.method}
                    </span>
                  </td>

                  <td className="history-url">
                    {execution.url}
                  </td>

                  <td>
                    <span
                      className={`status-badge ${getStatusClass(
                        execution.statusCode
                      )}`}
                    >
                      {execution.statusCode}
                    </span>
                  </td>

                  <td>
                    {execution.responseTime} ms
                  </td>

                  <td>
                    {formatDate(execution.executedAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}