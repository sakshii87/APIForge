import {
  FaPlusCircle,
  FaEdit,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTrash,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaPlusCircle className="text-blue-400" />,
    title: "New API Collection Created",
    description: "Authentication Collection",
    time: "2 mins ago",
  },
  {
    icon: <FaEdit className="text-yellow-400" />,
    title: "API Updated",
    description: "POST /api/auth/login",
    time: "8 mins ago",
  },
  {
    icon: <FaCheckCircle className="text-green-400" />,
    title: "Health Check Passed",
    description: "GET /api/products",
    time: "15 mins ago",
  },
  {
    icon: <FaExclamationTriangle className="text-red-400" />,
    title: "Monitor Alert",
    description: "POST /api/payment returned 500",
    time: "32 mins ago",
  },
  {
    icon: <FaTrash className="text-slate-400" />,
    title: "Collection Deleted",
    description: "Old Testing APIs",
    time: "1 hour ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-6">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-white text-lg font-semibold">
          Recent Activity
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Latest updates across your API workspace
        </p>

      </div>

      {/* Timeline */}

      <div className="space-y-5">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="flex items-start gap-4"
          >

            {/* Icon */}

            <div className="w-10 h-10 rounded-full bg-[#0F172A] border border-slate-700 flex items-center justify-center flex-shrink-0">
              {activity.icon}
            </div>

            {/* Content */}

            <div className="flex-1 border-b border-slate-700 pb-5">

              <div className="flex justify-between items-center">

                <h3 className="text-white font-medium">
                  {activity.title}
                </h3>

                <span className="text-xs text-slate-500">
                  {activity.time}
                </span>

              </div>

              <p className="text-slate-400 text-sm mt-2">
                {activity.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}