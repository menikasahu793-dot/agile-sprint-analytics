
import SprintAnalytics from "./SprintAnalytics";

const demoTasks = [
  { id: 1, title: "Login", storyPoints: 5, status: "Done" },
  { id: 2, title: "Sprint Board", storyPoints: 8, status: "Done" },
  { id: 3, title: "Task Filters", storyPoints: 3, status: "In Progress" },
  { id: 4, title: "Dashboard", storyPoints: 4, status: "To Do" },
];

function App() {
  return <SprintAnalytics tasks={demoTasks} />;
}

export default App;
