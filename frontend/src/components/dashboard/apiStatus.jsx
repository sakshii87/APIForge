import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaArrowRight,
} from "react-icons/fa";

const apiStatusList = [
  {
    name: "Authentication API",
    status: "Online",
    icon: <FaCheckCircle className="text-green-400" />,
    badge: "bg-green-500/20 text-green-400",
  },
  {
    name: "Payments API",
    status: "Degraded",
    icon: <FaExclamationTriangle className="text-yellow-400" />,
    badge: "bg-yellow-500/20 text-yellow-400",
  },
  {
    name: "Orders API",
    status: "Offline",
    icon: <FaTimesCircle className="text-red-400" />,
    badge: "bg-red-500/20 text-red-400",
  },
];

export default function APIStatus() {
  return (
    <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-white text-lg font-semibold">
            API Status
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Real-time API availability
          </p>
        </div>
        <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm">
          View all
          <FaArrowRight size={12} />
        </button>
      </div>

      {/* Status Items */}
      <div className="space-y-3">
        {apiStatusList.map((api) => (
          <div
            key={api.name}
            className="flex items-center justify-between hover:bg-[#273449] p-3 rounded-xl transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{api.icon}</span>
              <p className="text-white font-medium text-sm">
                {api.name}
              </p>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full ${api.badge}`}>
              {api.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
