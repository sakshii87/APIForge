import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/requestDetails.css";
import {
  executeRequest,
  getRequestById,
  updateRequest,
} from "../services/apiRequestService";

function RequestDetails() {
  const { id } = useParams();

  const [requestName, setRequestName] = useState("");
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState("");
  const [requestBody, setRequestBody] = useState("");
  const [response, setResponse] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    const loadRequest = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getRequestById(id);

        setRequestName(data.name || "");
        setMethod(data.method || "GET");
        setUrl(data.url || "");
        setHeaders(data.headers || "");
        setRequestBody(data.requestBody || "");
      } catch (err) {
        console.error("Failed to load request:", err);

        setError("Failed to load request details.");
      } finally {
        setLoading(false);
      }
    };

    loadRequest();
  }, [id]);

  const handleSave = async () => {
    try {
      setSaving(true);
      setSaveMessage("");
      setError("");

      const requestData = {
        name: requestName,
        method: method,
        url: url,
        headers: headers,
        requestBody: requestBody,
      };

      await updateRequest(id, requestData);

      setSaveMessage("Request saved successfully.");
    } catch (err) {
      console.error("Failed to save request:", err);

      setError("Failed to save request.");
    } finally {
      setSaving(false);
    }
  };


  const handleSend = async () => {
    try {
      setIsSending(true);
      setSendError("");
      setResponse(null);

      const result = await executeRequest(id);

      setResponse(result);

    } catch (error) {
      console.error("API execution failed:", error);

      setSendError(
        error.response?.data?.message ||
        error.message ||
        "Failed to execute API request."
      );

    } finally {
      setIsSending(false);
    }
  };

  if (loading) {
    return (
      <div className="request-details-page">
        <div className="request-details-card">
          <p>Loading request details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="request-details-page">
        <div className="request-details-card">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="request-details-page">

      {/* PAGE HEADER */}
      <div className="request-details-header">
        <div>
          <h1>Request Details</h1>
          <p>Edit, save and test your API request.</p>
        </div>

        <div className="request-details-actions">
          <button
            className="request-save-btn"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save"}
          </button>

          <button
            className="request-send-btn"
            onClick={handleSend}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      </div>

      {/* REQUEST INFORMATION */}
      <div className="request-details-card">

        {/* REQUEST NAME */}
        <div className="request-section">
          <label htmlFor="requestName">
            Request Name
          </label>

          <input
            id="requestName"
            type="text"
            placeholder="Enter request name"
            value={requestName}
            onChange={(e) => setRequestName(e.target.value)}
          />
        </div>

        {/* METHOD + URL */}
        <div className="request-url-row">

          <div className="method-field">
            <label htmlFor="method">
              Method
            </label>

            <select
              id="method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="PATCH">PATCH</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>

          <div className="url-field">
            <label htmlFor="url">
              Request URL
            </label>

            <input
              id="url"
              type="text"
              placeholder="https://api.example.com/users"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

        </div>

        {/* HEADERS */}
        <div className="request-section">
          <label htmlFor="headers">
            Headers
          </label>

          <textarea
            id="headers"
            placeholder={`Content-Type: application/json
Authorization: Bearer your-token`}
            value={headers}
            onChange={(e) => setHeaders(e.target.value)}
          />
        </div>

        {/* REQUEST BODY */}
        <div className="request-section">
          <label htmlFor="requestBody">
            Request Body
          </label>

          <textarea
            id="requestBody"
            className="request-body-editor"
            placeholder={`{
  "name": "John",
  "email": "john@example.com"
}`}
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
          />
        </div>

      </div>

      {saveMessage && (
        <div className="save-message">
          {saveMessage}
        </div>
      )}

      
      {/* RESPONSE SECTION */}
      <div className="response-card">

        <div className="response-header">
          <div>
            <h2>Response</h2>
            <p>
              API response will appear here after sending the request.
            </p>
          </div>

          {response && (
            <span className="response-status">
              {response.statusCode}
            </span>
          )}
        </div>

        {/* SENDING */}
        {isSending && (
          <div className="response-placeholder">
            <p>Sending request...</p>
          </div>
        )}

        {/* ERROR */}
        {!isSending && sendError && (
          <div className="response-placeholder">
            <p>{sendError}</p>
          </div>
        )}

        {/* RESPONSE */}
        {!isSending && response && (
          <div className="response-content">

            {/* RESPONSE INFORMATION */}
            <div className="response-meta">

              <div>
                <span>Status</span>
                <strong>
                  {response.statusCode}
                </strong>
              </div>

              <div>
                <span>Response Time</span>
                <strong>
                  {response.responseTime} ms
                </strong>
              </div>

            </div>

            {/* RESPONSE HEADERS */}
            <div className="response-headers-section">

              <h3>Response Headers</h3>

              <div className="response-headers-list">

                {Object.entries(response.responseHeaders || {}).map(
                  ([key, value]) => (
                    <div
                      className="response-header-row"
                      key={key}
                    >
                      <span className="response-header-key">
                        {key}
                      </span>

                      <span className="response-header-value">
                        {value}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>


            {/* RESPONSE BODY */}
            <div className="response-body-section">

              <h3>Response Body</h3>

              <pre>
                {(() => {
                  try {
                    return JSON.stringify(
                      JSON.parse(response.responseBody),
                      null,
                      2
                    );
                  } catch {
                    return response.responseBody;
                  }
                })()}
              </pre>

            </div>

          </div>
        )}

        {/* INITIAL STATE */}
        {!isSending &&
          !response &&
          !sendError && (
            <div className="response-placeholder">
              <p>
                Click <strong>Send</strong> to execute this API request.
              </p>
            </div>
          )}

      </div>

    </div>
  );
}

export default RequestDetails;