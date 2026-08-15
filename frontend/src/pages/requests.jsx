import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/requests.css";
import { useNavigate } from "react-router-dom";

import {
  getRequests,
  deleteRequest,
} from "../services/apiRequestService";

import CreateRequestModal from
  "../components/requests/CreateRequestModal";

export default function Requests() {

  const { collectionId } = useParams();

  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);

  const [showModal, setShowModal] =
    useState(false);

  const loadRequests = async () => {

    try {

      const data =
        await getRequests(collectionId);

      setRequests(data);

    } catch (error) {

      console.error(
        "Failed to load requests",
        error
      );

    }
  };
  const handleDelete = async (id) => {

  const confirmDelete =
    window.confirm(
      "Delete this request?"
    );

  if (!confirmDelete) return;

  try {

    await deleteRequest(id);

    loadRequests();

  } catch (error) {

    console.error(
      "Delete failed",
      error
    );

  }
};

  useEffect(() => {

    loadRequests();

  }, [collectionId]);

  return (
    <div
      style={{
        padding: "24px",
        color: "white",
      }}
    >

    <div className="requests-header">
        <h1>API Requests</h1>

        <button
            className="create-request-btn"
            onClick={() => setShowModal(true)}
        >
            + Create Request
        </button>
    </div>
      {requests.length === 0 ? (

        <p>
          No Requests Found
        </p>

      ) : (

        requests.map((request) => (
        <div
            key={request.id}
            className="request-card"
        >
          <div className="request-top">

            <div className="request-title">

                <span
                    className={`method-badge ${request.method.toLowerCase()}`}
                >
                    {request.method}
                </span>

                <h3>{request.name}</h3>

            </div>

            <div className="request-actions">
              <button
                className="edit-btn"
                onClick={() => navigate(`/request/${request.id}`)}
              >
                Edit
              </button>

              <button
                  className="delete-request-btn"
                  onClick={() => handleDelete(request.id)}
                >
                  Delete
                </button>
            </div>
                        

            

          </div>

            <p className="request-url">
                {request.url}
            </p>

        </div>
        ))

      )}

      {showModal && (

        <CreateRequestModal
          collectionId={collectionId}
          onClose={() =>
            setShowModal(false)
          }
          onSuccess={loadRequests}
        />

      )}

    </div>
  );
}