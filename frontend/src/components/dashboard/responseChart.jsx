import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../styles/charts.css";

const requestData = [
  { day: "Mon", requests: 132 },
  { day: "Tue", requests: 151 },
  { day: "Wed", requests: 168 },
  { day: "Thu", requests: 144 },
  { day: "Fri", requests: 179 },
  { day: "Sat", requests: 163 },
  { day: "Sun", requests: 156 },
];

export default function APIRequestsChart() {
  return (
    <section className="chart-card">
      <div className="chart-header">
        <div>
          <h3>API Requests</h3>
          <p>Request activity across your workspace</p>
        </div>
        <span className="chart-badge">+14% this week</span>
      </div>

      <div className="chart-body">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={requestData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#293042" />
            <XAxis dataKey="day" tick={{ fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="requests" stroke="#A855F7" strokeWidth={3} dot={{ fill: "#A855F7", r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}