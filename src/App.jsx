import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'
import Searchbar from './components/Searchbar'
import Sidebar from './components/Sidebar'
import TaskFilter from './components/TaskFilter'

// Example component structure
function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      text: "Learn React",
      completed: false
    }
  ]);

  const taskCount = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed === true )
  const completedCount = completedTasks.length;
  
  const addTask = (newTask) => {
    // Add new task to state
    newTask.id = uuidv4()
    setTasks([newTask, ...tasks])
  };
  
  const toggleTask = (id) => {
    // Toggle task completion
    const newTasks = tasks.map(task =>
      task.id === id && task.completed === false ? { ...task, completed : true } : 
      task.id === id && task.completed === true ? { ...task, completed : false } : 
      task
    );
    setTasks(newTasks);
  };
  
  const deleteTask = (id) => {
    // Remove task from state
    if(window.confirm('Are you sure you want to delete?')){
      setTasks(tasks.filter((task) => task.id != id))
    }
  };

  const [filter, setFilter] = useState('all'); // all, active, completed

  // Derived state - computed from existing state
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  const handleFilterClick = (filter) => {
    console.log(filter);
    console.log(tasks);
    setFilter(filter)
  }

  return (
    <div className="app">
      <header>
        <Searchbar />
        <TaskCounter taskCount={taskCount} completedCount={completedCount} />
      </header>
      <main>
        <Sidebar />
        <section id="task_main">
          <h1>Inbox</h1>
          <TaskForm onAddTask={addTask}/>
          <TaskFilter filter={filter} handleFilterClick={handleFilterClick}/>
          <TaskList
            tasks={filteredTasks} 
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>
      </main>
    </div>
  );
}

export default App
