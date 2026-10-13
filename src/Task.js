import React, { useEffect, useState } from "react";

function App() {
  // User details
  const [user, setUser] = useState({
    name: "Loading...",
    email: "loading@gmail.com"
  });

  // Tasks
  const [tasks, setTasks] = useState([
    { id: 1, name: "Complete Assignment", priority: "High", completed: false },
    { id: 2, name: "Attend Meeting", priority: "Medium", completed: true }
  ]);

  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dark, setDark] = useState(false);

  // Fetch user when page loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser({
          name: data.name,
          email: data.email
        });
      });
  }, []);

  // Add Task
  const addTask = () => {
    if (taskName === "") {
      alert("Enter task name");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      priority: priority,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  // Complete Task
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: true }
          : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Counters
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = tasks.filter(
    (task) => !task.completed
  ).length;

  // Priority color
  const getColor = (priority) => {
    if (priority === "High") {
      return "red";
    } else if (priority === "Medium") {
      return "orange";
    } else {
      return "green";
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: dark ? "#23272f" : "#dac6c6",
        color: dark ? "white" : "black"
      }}
    >

      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1>Task Management Dashboard</h1>

        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "10px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Profile */}
      <div
        style={{
          background: dark ? "#333" : "white",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px"
        }}
      >
        <h2>Welcome, {user.name}! 👋</h2>
        <p>Email: {user.email}</p>
      </div>

      {/* Task Count */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <div style={boxStyle}>
          <h3>Total</h3>
          <h2>{total}</h2>
        </div>

        <div style={boxStyle}>
          <h3>Completed</h3>
          <h2>{completed}</h2>
        </div>

        <div style={boxStyle}>
          <h3>Pending</h3>
          <h2>{pending}</h2>
        </div>
      </div>

      {/* Add Task */}
      <div
        style={{
          background: dark ? "#333" : "white",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px"
        }}
      >
        <h2>Add New Task</h2>

        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px"
          }}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px"
          }}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          onClick={addTask}
          style={{
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div
        style={{
          background: dark ? "#333" : "white",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px"
        }}
      >
        <h2>My Tasks</h2>

        {tasks.map((task) => (

          <div
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              marginTop: "10px",
              border: "1px solid gray",
              borderRadius: "8px"
            }}
          >

            <div>
              <h3
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none"
                }}
              >
                {task.name}
              </h3>

              <span
                style={{
                  color: getColor(task.priority),
                  fontWeight: "bold"
                }}
              >
                {task.priority}
              </span>
            </div>

            <div>

              {!task.completed && (
                <button
                  onClick={() => completeTask(task.id)}
                  style={{
                    marginRight: "10px",
                    padding: "8px",
                    background: "green",
                    color: "white",
                    border: "none"
                  }}
                >
                  Complete
                </button>
              )}

              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  padding: "8px",
                  background: "red",
                  color: "white",
                  border: "none"
                }}
              >
                Delete
              </button>

            </div>

          </div>

        ))}
      </div>

    </div>
  );
}

// Common style
const boxStyle = {
  background: "white",
  color: "black",
  padding: "20px",
  width: "150px",
  textAlign: "center",
  borderRadius: "10px"
};

export default App; 