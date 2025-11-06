function TaskCounter({taskCount, completedCount}){
    return (
        <section id="task-counter">
            <img src="/src/assets/check_icon.png" alt="Task Counter" />
            <span>{`${taskCount}`}/{`${completedCount}`}</span> 
        </section>
    )
}

export default TaskCounter