import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import TaskFilter from './components/TaskFilter'
import Searchbar from './components/Searchbar'
import Sidebar from './components/Sidebar'
import EmptyMessage from './components/EmptyMessage'

// Example component structure
function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      text: "Learn React",
      completed: false
    }
  ]);
  const [filter, setFilter] = useState('all'); // all, active, completed


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

  const taskCount = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed === true )
  const completedCount = completedTasks.length;

  // Derived state - computed from existing state
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  const handleFilterClick = (filter) => {
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
          {tasks.length === 0 ? <EmptyMessage /> : 
            <TaskList
              tasks={filteredTasks} 
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          }
        </section>
      </main>
    </div>
  );
}

export default App
