import { useEffect, useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { getCollections } from "../../services/collectionService";

export default function CollectionsGrid() {
  const [collections, setCollections] = useState([]);
  const recentCollections = collections.slice(0, 5);

  useEffect(() => {
    loadCollections();
  }, []);

  const loadCollections = async () => {
    try {
      const data = await getCollections();
      setCollections(data);
    } catch (error) {
      console.error(
        "Failed to load collections",
        error
      );
    }
  };

  return (
    <section
      style={{
        marginTop: "20px",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        Recent Collections
      </h2>

      {collections.length === 0 ? (
        <p style={{ color: "#aaa" }}>
          No Collections Found
        </p>
      ) : (
        recentCollections.map((collection) => (
          <div
            key={collection.id}
            style={{
              background: "#1f2937",
              padding: "16px",
              borderRadius: "10px",
              marginBottom: "12px",
              color: "white",
            }}
          >
            <h3>
              <FaFolderOpen />
              {" "}
              {collection.name}
            </h3>

            <p>
              {collection.description}
            </p>
          </div>
        ))
      )}
    </section>
  );
}