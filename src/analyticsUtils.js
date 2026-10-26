
export function getSprintSummary(tasks) {
  const totalPoints = tasks.reduce(
    (sum, task) => sum + (Number(task.storyPoints) || 0),
    0
  );

  const completedTasks = tasks.filter(
    (task) => task.status === "Done"
  );

  const completedPoints = completedTasks.reduce(
    (sum, task) => sum + (Number(task.storyPoints) || 0),
    0
  );

  return {
    totalPoints,
    completedPoints,
    remainingPoints: totalPoints - completedPoints,
    velocity: completedPoints,
  };
}
