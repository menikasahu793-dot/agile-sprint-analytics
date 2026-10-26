
export default function VelocityCard({ summary }) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total Story Points</h3>
        <p>{summary.totalPoints}</p>
      </div>

      <div className="stat-card">
        <h3>Completed Points</h3>
        <p>{summary.completedPoints}</p>
      </div>

      <div className="stat-card">
        <h3>Remaining Points</h3>
        <p>{summary.remainingPoints}</p>
      </div>

      <div className="stat-card">
        <h3>Sprint Velocity</h3>
        <p>{summary.velocity}</p>
      </div>
    </div>
  );
}
