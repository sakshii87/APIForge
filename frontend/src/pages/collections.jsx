
import {
  FaChevronDown,
  FaEllipsisV,
  FaFolderOpen,
  FaPlus,
  FaSearch,
} from "react-icons/fa";

import { useEffect, useMemo, useState } from "react";
import { getCollections } from "../services/collectionService";
import "../styles/collections.css";
import CreateCollectionModal from "../components/collections/collectionModal";


const sortOptions = [
  "Recently Updated",
  "Name A-Z",
  "Name Z-A",
  "Most Requests",
];

const environmentOptions = [
  "All Environments",
  "Development",
  "Staging",
  "Production",
];

const statusOptions = [
  "All Statuses",
  "Active",
  "Draft",
  "Review",
  "Archived",
];

const normalizedStatusMap = {
  stable: "Active",
  monitoring: "Review",
};

function normalizeStatus(status) {
  return normalizedStatusMap[status?.toLowerCase?.()] ?? status ?? "Draft";
}

function formatUpdatedAt(collection) {
  if (collection.updatedAt) {
    const date = new Date(collection.updatedAt);

    if (!Number.isNaN(date.valueOf())) {
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    }
  }

  return collection.lastUpdated ?? "Unknown";
}

function StatCard({ label, value }) {
  return (
    <article className="collections-stat-card">
      <span className="collections-stat-label">
        {label}
      </span>

      <strong className="collections-stat-value">
        {value}
      </strong>
    </article>
  );
}

function CollectionsToolbar({
  searchTerm,
  onSearchChange,
  sortOption,
  onSortChange,
  environmentOption,
  onEnvironmentChange,
  statusOption,
  onStatusChange,
  onResetFilters,
}) {
  return (
    <section className="collections-toolbar">

      <label className="collections-search">
        <FaSearch className="collections-search-icon" />

        <input
          type="search"
          className="collections-search-input"
          placeholder="Search collections..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Search collections"
        />
      </label>

      <div className="collections-filters">

        <div className="collections-filter-control">
          <span>Sort</span>

          <div className="collections-filter-select">
            <select
              value={sortOption}
              onChange={(event) => 
                onSortChange(event.target.value)
              }
            >
              {sortOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>

            <FaChevronDown className="collections-filter-icon" />
          </div>
        </div>

        <div className="collections-filter-control">
          <span>Environment</span>

          <div className="collections-filter-select">
            <select
              value={environmentOption}
              onChange={(event) =>
                onEnvironmentChange(event.target.value)
              }
            >
              {environmentOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>

            <FaChevronDown className="collections-filter-icon" />
          </div>
        </div>

        <div className="collections-filter-control">
          <span>Status</span>

          <div className="collections-filter-select">
            <select
              value={statusOption}
              onChange={(event) =>
                onStatusChange(event.target.value)
              }
            >
              {statusOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>

            <FaChevronDown className="collections-filter-icon" />
          </div>
        </div>

        <button
          type="button"
          className="collections-reset-button"
          onClick={onResetFilters}
        >
          Reset Filters
        </button>

      </div>
    </section>
  );
}

function CollectionCard({
  collection,
  isSelected,
  onSelect,
  isMenuOpen,
  onToggleMenu,
}) {
  return (
    <article
      className={`collection-card ${
        isSelected ? "selected" : ""
      }`}
      onClick={() => onSelect(collection.id)}
      role="button"
      tabIndex={0}
    >
      <div className="collection-card-header">

        <div className="collection-card-title">

          <span className="collection-icon">
            <FaFolderOpen />
          </span>

          <div className="collection-heading-copy">
            <h3>{collection.name}</h3>

            <p>
              {collection.description}
            </p>
          </div>

        </div>

        <div className="collection-card-actions">

          <button
            type="button"
            className="collection-menu-button"
            onClick={(event) => {
              event.stopPropagation();
              onToggleMenu(collection.id);
            }}
          >
            <FaEllipsisV />
          </button>

          {isMenuOpen && (
            <div
              className="collection-menu-dropdown"
              role="menu"
            >
              <button type="button">
                Open
              </button>

              <button type="button">
                Edit
              </button>

              <button type="button">
                Duplicate
              </button>

              <button type="button">
                Share
              </button>

              <button type="button">
                Archive
              </button>

              <button
                type="button"
                className="danger"
              >
                Delete
              </button>
            </div>
          )}

        </div>

      </div>

      <div className="collection-body">

        <div className="collection-summary-row">

          <div className="collection-summary-block">
            <span className="collection-summary-label">
              API Requests
            </span>

            <strong className="collection-summary-value">
              {collection.requestCount}
            </strong>
          </div>

          <div className="collection-badges">

            <span
              className={`collection-badge collection-badge-env ${
                collection.environment?.toLowerCase() || ""
              }`}
            >
              {collection.environment}
            </span>

            <span
              className={`collection-badge collection-badge-status ${
                normalizeStatus(
                  collection.status
                ).toLowerCase()
              }`}
            >
              {normalizeStatus(collection.status)}
            </span>

          </div>

        </div>

        <div className="collection-meta-row">

          <span className="collection-meta-label">
            Updated
          </span>

          <span className="collection-meta-value">
            {formatUpdatedAt(collection)}
          </span>

        </div>

      </div>

      <button
        type="button"
        className="collection-open-button"
      >
        Open Collection
      </button>

    </article>
  );
}
function CollectionGrid({
  collections,
  selectedCollectionId,
  onSelectCollection,
  openMenuId,
  onToggleMenu,
}) {
  return (
    <div className="collection-grid">
      {collections.map((collection) => (
        <CollectionCard
          key={collection.id}
          collection={collection}
          isSelected={
            selectedCollectionId === collection.id
          }
          onSelect={onSelectCollection}
          isMenuOpen={openMenuId === collection.id}
          onToggleMenu={onToggleMenu}
        />
      ))}
    </div>
  );
}

function EmptyCollections({ onCreate }) {
  return (
    <section className="collections-empty-state">
      <div className="collections-empty-illustration">
        <FaFolderOpen />
      </div>

      <div className="collections-empty-copy">
        <h2>No Collections Found</h2>
        <p>
          Create your first API collection to organize
          API requests, endpoints, and environments.
        </p>
      </div>

      <button
        type="button"
        className="collections-primary-button"
        onClick={onCreate}
      >
        <FaPlus />
        Create Collection
      </button>
    </section>
  );
}

export default function CollectionsPage() {

  const [collectionsList, setCollectionsList] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [sortOption, setSortOption] =
    useState(sortOptions[0]);

  const [environmentOption, setEnvironmentOption] =
    useState(environmentOptions[0]);

  const [statusOption, setStatusOption] =
    useState(statusOptions[0]);

  const [selectedCollectionId, setSelectedCollectionId] =
    useState(null);

  const [openMenuId, setOpenMenuId] = useState(null);

  const [isModalOpen, setIsModalOpen] =
  useState(false);


  useEffect(() => {

    const fetchCollections = async () => {
      try {

        const data = await getCollections();

        setCollectionsList(data);

        if (data.length > 0) {
          setSelectedCollectionId(data[0].id);
        }

      } catch (error) {

        console.error(
          "Failed to fetch collections:",
          error
        );

      }
    };


    fetchCollections();

  }, []);



  
  const totalRequests = useMemo(
    () =>
      collectionsList.reduce(
        (sum, collection) =>
          sum + collection.requestCount,
        0
      ),
    [collectionsList]
  );

  const activeCollections = useMemo(
    () =>
      collectionsList.filter(
        (collection) =>
          collection.status === "Active"
      ).length,
    [collectionsList]
  );

  const sharedCollections = useMemo(
    () =>
      collectionsList.filter(
        (collection) =>
          collection.sharedMembers?.length > 1
      ).length,
    [collectionsList]
  );

  const filteredCollections = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    return collectionsList
      .filter((collection) => {
        const matchesSearch =
          search === "" ||
          `${collection.name}
           ${collection.description}
           ${collection.environment}
           ${collection.status}`
            .toLowerCase()
            .includes(search);

        const matchesEnvironment =
          environmentOption ===
            "All Environments" ||
          collection.environment ===
            environmentOption;

        const matchesStatus =
          statusOption === "All Statuses" ||
          collection.status === statusOption;

        return (
          matchesSearch &&
          matchesEnvironment &&
          matchesStatus
        );
      })
      .sort((a, b) => {
        switch (sortOption) {
          case "Name A-Z":
            return a.name.localeCompare(
              b.name
            );

          case "Name Z-A":
            return b.name.localeCompare(
              a.name
            );

          case "Most Requests":
            return (
              b.requestCount -
              a.requestCount
            );

          default:
            return 0;
        }
      });
  }, [
    collectionsList,
    searchTerm,
    environmentOption,
    statusOption,
    sortOption,
  ]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSortOption(sortOptions[0]);
    setEnvironmentOption(
      environmentOptions[0]
    );
    setStatusOption(statusOptions[0]);
  };

  return (
    <main className="collections-page">
      <section className="collections-hero">
        <div className="collections-hero-copy">
          <h1>Collections</h1>

          <p>
            Organize, manage, and
            collaborate on API request
            collections.
          </p>
        </div>

        <button
          type="button"
          className="collections-primary-button"
          onClick={() =>
            setIsModalOpen(true)
          }
        >
          <FaPlus />
          Create Collection
        </button>
      </section>

      <section className="collections-overview">
        <StatCard
          label="Total Collections"
          value={collectionsList.length}
        />

        <StatCard
          label="Active Collections"
          value={activeCollections}
        />

        <StatCard
          label="Shared Collections"
          value={sharedCollections}
        />

        <StatCard
          label="Total Requests"
          value={totalRequests}
        />
      </section>

      <CollectionsToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
        environmentOption={
          environmentOption
        }
        onEnvironmentChange={
          setEnvironmentOption
        }
        statusOption={statusOption}
        onStatusChange={
          setStatusOption
        }
        onResetFilters={
          handleResetFilters
        }
      />

      
      {filteredCollections.length === 0 ? (
        <EmptyCollections
          onCreate={() =>
            setIsModalOpen(true)
          }
        />
      ) : (
        <CollectionGrid
          collections={filteredCollections}
          selectedCollectionId={selectedCollectionId}
          onSelectCollection={setSelectedCollectionId}
          openMenuId={openMenuId}
          onToggleMenu={setOpenMenuId}
        />
      )}

      {isModalOpen && (
        <CreateCollectionModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={async () => {
            const data = await getCollections();
            setCollectionsList(data);

            if (data.length > 0) {
              setSelectedCollectionId(data[0].id);
            }
          }}
        />
      )}
    </main>
  );
}