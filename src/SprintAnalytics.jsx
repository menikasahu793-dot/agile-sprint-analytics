
import { getSprintSummary } from "./analyticsUtils";
import BurndownChart from "./BurndownChart";
import VelocityCard from "./VelocityCard";
import "./analytics.css";

export default function SprintAnalytics({ tasks = [] }) {
  const summary = getSprintSummary(tasks);

  return (
    <main className="analytics-page">
      <h1>Sprint Analytics Dashboard</h1>

      <p className="analytics-subtitle">
        Track sprint progress and team velocity
      </p>

      <VelocityCard summary={summary} />

      <BurndownChart tasks={tasks} />
    </main>
  );
}
