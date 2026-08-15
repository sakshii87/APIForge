import {
  FaFolderOpen,
  FaFileImport,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";

export const dashboardStats = [
  {
    id: 1,
    title: "Collections",
    value: "12",
    detail: "API Collections",
    icon: FaFolderOpen,
    color: "purple",
  },
  {
    id: 2,
    title: "Requests",
    value: "48",
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