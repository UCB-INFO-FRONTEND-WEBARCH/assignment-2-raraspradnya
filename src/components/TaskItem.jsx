function TaskItem({item}){
    return (
        <li>
            <input type="checkbox" className="task_item" name={`${item.id}`} id={`${item.id}`} task-status={`${item.completed ? 'completed' : 'active'}`}/>
            <label htmlFor={`${item.id}`}>{item.text}</label>
        </li>
    )
}

export default TaskItem