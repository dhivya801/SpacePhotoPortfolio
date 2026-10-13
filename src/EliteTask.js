import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ title: '', completed: false });
  const [tasks, setTasks] = useState([]);
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleChange = (e) => {
    setForm({ title: e.target.value, 
        completed: false });
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: form.title, completed: false }]);
    setForm({ title: '', completed: false });
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const confirmDelete = () => {
    setTasks(tasks.filter((task) => task.id !== deleteId));
    setDeleteId(null);
  };

  const displayedTasks = showCompletedOnly
    ? tasks.filter((task) => task.completed)
    : tasks;

  const themeStyle = {
    backgroundColor: darkTheme ? '#222' : '#fff',
    color: darkTheme ? '#fff' : '#000',
    padding: '20px',
    minHeight: '100vh',
  };

  return (
    <div style={themeStyle}>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        Toggle  ({darkTheme ? "☀️" : "🌙"})
      </button>

      <h2>How to use this app</h2>
      <button onClick={() => setShowHelp(!showHelp)}>
        {showHelp ? 'Hide' : 'Show'} How to use this app
      </button>
      {showHelp && (
        <p>1. Add a task using the form. 2. Mark tasks completed or pending. 3. Filter completed tasks. 4. Delete tasks with confirmation.</p>
      )}
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={form.title}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>

      <div>
        <p>Total Tasks: {tasks.length}</p>
        <button onClick={() => setShowCompletedOnly(!showCompletedOnly)}>
          {showCompletedOnly ? 'Show All Tasks' : 'Show Only Completed Tasks'}
        </button>
      </div>

      <ul>
        {displayedTasks.map((task) => (
          <li key={task.id} style={{ margin: '10px 0' }}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </span>{' '}
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Mark Pending' : 'Mark Completed'}
            </button>{' '}
            <button onClick={() => setDeleteId(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {deleteId && (
        <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
          <p>Are you sure you want to delete this task?</p>
          <button onClick={confirmDelete}>Yes, Delete</button>
          <button onClick={() => setDeleteId(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;
{/*
  import React, { useState } from "react";

function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      padding: "30px"
    }}>
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={() => setDark(!dark)}>
        Change Theme
      </button>
    </div>
  );
}

export default Theme;
import React, { useState } from "react";

function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        What is React?
      </button>

      {open && (
        <p>React is a JavaScript library for building UI.</p>
      )}
    </div>
  );
}

export default Accordion;
import React, { useState } from "react";

function ModalBox() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button onClick={() => setModal(true)}>
        Open Modal
      </button>

      {modal && (
        <div>
          <h2>Hello!</h2>
          <p>This is a modal box.</p>

          <button onClick={() => setModal(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ModalBox;

import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hello " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
import React, { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component loaded");
  }, []);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default Example;
  
  */}