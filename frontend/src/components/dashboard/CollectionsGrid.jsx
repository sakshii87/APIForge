import { FaFolderOpen, FaEllipsisV } from "react-icons/fa";
import { collections } from "../../data/collections";
import "../../styles/tables.css";

export default function CollectionsGrid() {
  return (
    <section className="collections-grid-wrapper">
      <div className="collections-grid">
        {collections.map((collection) => (
          <article className="collection-card" key={collection.id}>
            <div className="collection-card-header">
              <div className="collection-folder">
                <FaFolderOpen />
              </div>

              <button className="collection-menu">
                <FaEllipsisV />
              </button>
            </div>

            <h3 className="collection-title">
              {collection.name}
            </h3>

            <p className="collection-description">
              {collection.description}
            </p>

            <div className="collection-stats">
              <span>{collection.requestCount} Requests</span>
              <span>{collection.folderCount} Folders</span>
            </div>

            <div className="collection-info">
              <div>
                <small>Updated</small>
                <p>{collection.lastUpdated}</p>
              </div>

              <div>
                <small>Owner</small>
                <p>{collection.owner}</p>
              </div>
            </div>

            <button className="open-collection-btn">
              Open Collection
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}