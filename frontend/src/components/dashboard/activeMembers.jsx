import { FaArrowRight } from "react-icons/fa";

const members = [
  {
    name: "Alice Johnson",
    role: "Developer",
    avatar: "AJ",
    status: "Online",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Bob Smith",
    role: "QA Engineer",
    avatar: "BS",
    status: "Online",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Carol White",
    role: "DevOps",
    avatar: "CW",
    status: "Away",
    color: "from-green-500 to-emerald-500",
  },
];

export default function ActiveMembers() {
  return (
    <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-white text-lg font-semibold">
            Active Members
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Team members online now
          </p>
        </div>
        <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm">
          View all
          <FaArrowRight size={12} />
        </button>
      </div>

      {/* Members List */}
      <div className="space-y-4">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex items-center justify-between hover:bg-[#273449] p-3 rounded-xl transition"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-white text-sm font-bold`}
              >
                {member.avatar}
              </div>
              <div>
                <p className="text-white font-medium">
                  {member.name}
                </p>
                <p className="text-slate-400 text-xs">
                  {member.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-xs text-slate-400">
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
