import { FaFolderOpen } from "react-icons/fa";
import { collections } from "../../data/collections";
import "../../styles/tables.css";

export default function CollectionsGrid() {
  return (
    <section className="table-card">
      <div className="table-header">
        <div>
          <h3>Collections</h3>
          <p>Group your APIs by purpose and stage</p>
        </div>
      </div>

      <div className="collections-grid">
        {collections.map((collection) => (
          <article className="collection-card" key={collection.id}>
            <div className="collection-card-top">
              <div className="collection-icon">
                <FaFolderOpen />
              </div>
              <span className="status-badge">{collection.status}</span>
            </div>
            <h4>{collection.name}</h4>
            <p>{collection.apis} APIs</p>
            <span className="collection-meta">Updated {collection.updated}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
