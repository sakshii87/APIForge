import { useState } from "react";
import { createCollection } from "../../services/collectionService";

function CreateCollectionModal({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    environment: "Development",
    status: "Active",
    requestCount: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending Collection:", formData);

    try {
      await createCollection(formData);
      await onSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to create collection", error);
    }
  };

  return (
    <div className="collections-modal-overlay">
      <div className="collections-modal-card">

        <div className="collections-modal-header">
          <div>
            <h2>Create Collection</h2>
            <p>
              Create a new API collection for your project.
            </p>
          </div>

          <button
            type="button"
            className="collections-modal-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="collections-modal-body"
        >
          <div className="collections-modal-field">
            <span>Collection Name</span>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Authentication APIs"
              required
            />
          </div>

          <div className="collections-modal-field">
            <span>Description</span>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Login, registration and JWT endpoints"
            />
          </div>

          <div className="collections-modal-field">
            <span>Environment</span>

            <select
              name="environment"
              value={formData.environment}
              onChange={handleChange}
            >
              <option value="Development">
                Development
              </option>

              <option value="Staging">
                Staging
              </option>

              <option value="Production">
                Production
              </option>
            </select>
          </div>

          <div className="collections-modal-actions">
            <button
              type="button"
              className="collections-modal-secondary"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="collections-modal-primary"
            >
              Create Collection
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default CreateCollectionModal;