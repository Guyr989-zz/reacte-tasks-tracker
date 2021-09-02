import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8000/api/tasks");
    const data = await res.json();
    console.log(data);
    return data;
  };
  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const onDelete = async (id) => {
    await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.message);
      });

    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="App Tracker" />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? <Tasks onDelete={onDelete} toggleComplete={toggleComplete} tasks={tasks} /> : "No tasks to show"}
    </div>
  );
}

export default App;
