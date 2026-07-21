import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../styles/charts.css";

const methodsData = [
  {
    name: "GET",
    value: 45,
  },
  {
    name: "POST",
    value: 28,
  },
  {
    name: "PUT",
    value: 17,
  },
  {
    name: "DELETE",
    value: 10,
  },
];

const COLORS = [
  "#22C55E",
  "#3B82F6",
  "#F59E0B",
  "#EF4444",
];

export default function MethodsChart() {
  return (
    <div className="chart-card">

      <div className="chart-header">

        <div>
          <h3>HTTP Methods</h3>
          <p>Request distribution</p>
        </div>

      </div>

      <div className="methods-chart">

        <ResponsiveContainer width="100%" height={250}>

          <PieChart>

            <Pie
              data={methodsData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
            >
              {methodsData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="methods-legend">

        {methodsData.map((item, index) => (

          <div
            className="legend-item"
            key={item.name}
          >

            <span
              className="legend-color"
              style={{
                background: COLORS[index],
              }}
            ></span>

            <span className="legend-name">
              {item.name}
            </span>

            <span className="legend-value">
              {item.value}%
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}