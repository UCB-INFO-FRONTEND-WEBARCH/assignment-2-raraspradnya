function TaskFilter({filter, handleFilterClick}) {

  return (
    <section id="task-filter">
        <button className={`task-filter-button`} filter-status={`${filter === 'all' ? 'active' : 'inactive'}`} onClick={() => handleFilterClick('all')}>All</button>
        <button className={`task-filter-button`} filter-status={`${filter === 'active' ? 'active' : 'inactive'}`} onClick={() => handleFilterClick('active')}>Active</button>
        <button className={`task-filter-button`} filter-status={`${filter === 'completed' ? 'active' : 'inactive'}`} onClick={() => handleFilterClick('completed')}>Completed</button>
    </section>
  )
}

export default TaskFilter