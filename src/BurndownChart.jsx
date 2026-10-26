
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

const sprintLength = 6;

export default function BurndownChart({ tasks = [] }) {
  const totalPoints = tasks.reduce(
    (sum, task) => sum + (Number(task.storyPoints) || 0),
    0
  );

  const remainingPoints = tasks.reduce(
    (sum, task) =>
      sum +
      (task.status === "Done"
        ? 0
        : Number(task.storyPoints) || 0),
    0
  );

  const completedPoints = totalPoints - remainingPoints;

  // Demo history: replace with real daily records when available.
  const dailyRemaining = [
    totalPoints,
    18,
    15,
    12,
    9,
    remainingPoints,
  ];

  const chartData = Array.from({ length: sprintLength }, (_, index) => ({
    day: `Day ${index + 1}`,
    ideal: Math.round(
      totalPoints - (totalPoints / (sprintLength - 1)) * index
    ),
    actual: dailyRemaining[index],
  }));

  return (
    <div className="chart-container">
      <h2>Sprint Burndown Chart</h2>

      <p>
        Total: {totalPoints} points | Completed: {completedPoints} points |
        Remaining: {remainingPoints} points
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis
            domain={[0, Math.max(totalPoints, 1)]}
            allowDecimals={false}
          />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="ideal"
            name="Ideal Remaining Points"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />

          <Line
            type="monotone"
            dataKey="actual"
            name="Actual Remaining Points (Demo)"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
