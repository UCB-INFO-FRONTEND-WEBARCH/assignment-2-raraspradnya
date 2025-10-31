import TaskItem from './TaskItem'

function TaskList({tasks, onDelete, onToggle}){
    return (
        <section id="task-list">
            <ul>
                {tasks.map((item) => (
                    <TaskItem key={item.id} item={item} onDelete={onDelete} onToggle={onToggle}/>
                ))}
            </ul>
        </section>
    )
}

export default TaskList