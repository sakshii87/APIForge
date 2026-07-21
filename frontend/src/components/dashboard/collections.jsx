import { FaFolder } from "react-icons/fa";

import { collections } from "../../data/collections";

import "../../styles/tables.css";

export default function Collections() {
  return (
    <div className="table-card">

      <div className="table-header">

        <div>
          <h3>Collections</h3>
          <p>Your API groups and workspaces</p>
        </div>

        <button className="view-btn">
          View All
        </button>

      </div>


      <div className="collections-list">

        {collections.map((collection) => (

          <div
            className="collection-item"
            key={collection.id}
          >

            <div className="collection-icon">
              <FaFolder />
            </div>


            <div className="collection-info">

              <h4>
                {collection.name}
              </h4>

              <span>
                {collection.apis} APIs
              </span>

            </div>


            <div className="collection-status">

              <span className="status-badge">
                {collection.status}
              </span>

              <small>
                {collection.updated}
              </small>

            </div>


          </div>

        ))}

      </div>

    </div>
  );
}