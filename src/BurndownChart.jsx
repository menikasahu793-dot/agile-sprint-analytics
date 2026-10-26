
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { day: "Day 1", ideal: 20, remaining: 18 },
  { day: "Day 2", ideal: 16, remaining: 17 },
  { day: "Day 3", ideal: 12, remaining: 12 },
  { day: "Day 4", ideal: 8, remaining: 9 },
  { day: "Day 5", ideal: 4, remaining: 5 },
  { day: "Day 6", ideal: 0, remaining: 0 },
];

export default function BurndownChart() {
  return (
    <div className="chart-container">
      <h2>Sprint Burndown Chart</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="ideal"
            name="Ideal Progress"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />

          <Line
            type="monotone"
            dataKey="remaining"
            name="Actual Remaining Points"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
