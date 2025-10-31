function TaskFilter({filter, handleFilterClick}) {

  return (
    <section id="task-filter">
        <button className={`task-filter-button ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>All</button>
        <button className={`task-filter-button ${filter === 'active' ? 'active' : ''}`} onClick={() => handleFilterClick('active')}>Active</button>
        <button className={`task-filter-button ${filter === 'completed' ? 'active' : ''}`} onClick={() => handleFilterClick('completed')}>Completed</button>
    </section>
  )
}

export default TaskFilter