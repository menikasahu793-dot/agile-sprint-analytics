
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

export default function BurndownChart({ tasks = [] }) {
  const totalPoints = tasks.reduce((sum, task) => {
    return sum + (Number(task.storyPoints) || 0);
  }, 0);

  const completedPoints = tasks.reduce((sum, task) => {
    if (task.status === "Done") {
      return sum + (Number(task.storyPoints) || 0);
    }
    return sum;
  }, 0);

  const remainingPoints = totalPoints - completedPoints;
  console.log("Tasks received:", tasks);
console.log("Chart values:", {
  totalPoints,
  completedPoints,
  remainingPoints,
});

  const chartData = [
    {
      status: "Total Points",
      ideal: totalPoints,
      actual: totalPoints,
    },
    {
      status: "Completed",
      ideal: totalPoints,
      actual: completedPoints,
    },
    {
      status: "Remaining",
      ideal: 0,
      actual: remainingPoints,
    },
  ];

  return (
    <div className="chart-container">
      <h2>Sprint Progress Chart</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="status" />

          <YAxis domain={[0, 20]} allowDecimals={false} />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="ideal"
            name="Reference Points"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />

          <Line
            type="monotone"
            dataKey="actual"
            name="Actual Story Points"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
