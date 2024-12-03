import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

interface Task {
  id: number;
  title: string;
  memo: string;
}

const BACKEND_ORIGIN = import.meta.env.VITE_BACKEND_ORIGIN;

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_ORIGIN}/api/tasks/`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </>
  );
}

export default App;
