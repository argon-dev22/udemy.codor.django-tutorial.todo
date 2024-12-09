import { useEffect, useState } from "react";
import axios from "axios";

import Task from "../components/Task";
import { Task as TaskType } from "../types/Task";

const BACKEND_ORIGIN = import.meta.env.VITE_BACKEND_ORIGIN;

function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_ORIGIN}/api/tasks/`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} />
      ))}
    </div>
  );
}

export default Home;
