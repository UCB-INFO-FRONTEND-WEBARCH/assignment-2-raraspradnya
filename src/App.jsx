import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'

// Example component structure
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false
    }
  ]);
  
  const addTask = (taskText) => {
    // Add new task to state
  };
  
  const toggleTask = (id) => {
    // Toggle task completion
  };
  
  const deleteTask = (id) => {
    // Remove task from state
  };
  
  return (
    <div className="app">
      <TaskCounter tasks={tasks} />
      {/* <TaskForm onAddTask={addTask} /> */}
      <TaskList
        tasks={tasks} 
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App
