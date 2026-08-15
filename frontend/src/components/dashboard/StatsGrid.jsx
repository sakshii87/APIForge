import {
  FaFolderOpen,
  FaFileImport,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";

export default function StatsGrid({
  collections,
}) {

  const totalCollections =
    collections.length;

  const totalRequests =
    collections.reduce(
      (sum, collection) =>
        sum +
        (collection.requestCount || 0),
      0
    );

  const stats = [
    {
      id: 1,
      title: "Collections",
      value: totalCollections,
      detail: "API Collections",
      icon: FaFolderOpen,
      color: "purple",
    },
    {
      id: 2,
      title: "Requests",
      value: totalRequests,
      detail: "Saved Requests",
      icon: FaFileImport,
      color: "blue",
    },
    {
      id: 3,
      title: "Workspace",
      value: "1",
      detail: "Active Workspace",
      icon: FaServer,
      color: "green",
    },
    {
      id: 4,
      title: "Status",
      value: "Live",
      detail: "Connected",
      icon: FaCheckCircle,
      color: "orange",
    },
  ];

  return (
    <section className="stats-grid">

      {stats.map((item) => {

        const Icon = item.icon;

        return (
          <div
            className="stat-card"
            key={item.id}
          >
            <div
              className={`stat-icon ${item.color}`}
            >
              <Icon />
            </div>

            <div className="stat-content">

              <span className="stat-title">
                {item.title}
              </span>

              <h2>
                {item.value}
              </h2>

              <p>
                {item.detail}
              </p>

            </div>

          </div>
        );
      })}
    </section>
  );
}