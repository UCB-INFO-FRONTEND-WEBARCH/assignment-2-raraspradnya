import TaskItem from './TaskItem'

function TaskList({tasks, onDelete, onToggle}){
    return (
        <section id="task-list">
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                ))}
            </ul>
        </section>
    )
}

export default TaskList