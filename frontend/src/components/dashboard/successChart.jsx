import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Successful",
    value: 98,
  },
  {
    name: "Warnings",
    value: 1,
  },
  {
    name: "Failed",
    value: 1,
  },
];

const COLORS = [
  "#22C55E",
  "#FACC15",
  "#EF4444",
];

export default function SuccessChart() {
  return (
    <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-6">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-white text-lg font-semibold">
          API Health Overview
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Overall health of monitored APIs
        </p>

      </div>

      {/* Chart */}

      <div className="h-[260px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={5}
            >

              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "12px",
              }}
              labelStyle={{
                color: "#fff",
              }}
            />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-3 gap-4 mt-4">

        <div className="bg-[#0F172A] rounded-xl p-3 text-center">

          <p className="text-green-400 text-xl font-bold">
            98%
          </p>

          <p className="text-slate-400 text-sm">
            Healthy
          </p>

        </div>

        <div className="bg-[#0F172A] rounded-xl p-3 text-center">

          <p className="text-yellow-400 text-xl font-bold">
            1%
          </p>

          <p className="text-slate-400 text-sm">
            Warning
          </p>

        </div>

        <div className="bg-[#0F172A] rounded-xl p-3 text-center">

          <p className="text-red-400 text-xl font-bold">
            1%
          </p>

          <p className="text-slate-400 text-sm">
            Failed
          </p>

        </div>

      </div>

    </div>
  );
}