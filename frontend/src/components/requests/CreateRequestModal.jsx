import { useState } from "react";
import { createRequest } from "../../services/apiRequestService";
import "../../styles/requestModal.css";

export default function CreateRequestModal({
  collectionId,
  onClose,
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    name: "",
    method: "GET",
    url: "",
    headers: "{}",
    requestBody: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createRequest(
        collectionId,
        formData
      );

      await onSuccess();
      onClose();

    } catch (error) {
      console.error(
        "Failed to create request",
        error
      );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        <h2>Create Request</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Request Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <select
            name="method"
            value={formData.method}
            onChange={handleChange}
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>

          <input
            type="text"
            name="url"
            placeholder="URL"
            value={formData.url}
            onChange={handleChange}
            required
          />

          <textarea
            name="headers"
            placeholder="Headers"
            value={formData.headers}
            onChange={handleChange}
          />

          <textarea
            name="requestBody"
            placeholder="Request Body"
            value={formData.requestBody}
            onChange={handleChange}
          />

        <div className="modal-actions">

            <button
                type="button"
                className="cancel-btn"
                onClick={onClose}
            >
                Cancel
            </button>

            <button
                type="submit"
                className="create-btn"
            >
                Create Request
        </button>

            </div>
        </form>

      </div>
    </div>
  );
}