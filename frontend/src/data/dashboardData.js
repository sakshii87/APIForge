import {
  FaCode,
  FaFolderOpen,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

export const dashboardStats = [
  {
    id: 1,
    title: "Total APIs",
    value: "48",
    change: "+12%",
    icon: FaCode,
    color: "blue",
  },
  {
    id: 2,
    title: "Collections",
    value: "12",
    change: "+3",
    icon: FaFolderOpen,
    color: "purple",
  },
  {
    id: 3,
    title: "Success Rate",
    value: "98.4%",
    change: "+1.2%",
    icon: FaCheckCircle,
    color: "green",
  },
  {
    id: 4,
    title: "Avg Response",
    value: "186 ms",
    change: "-14 ms",
    icon: FaClock,
    color: "orange",
  },
];