import { FaTimes } from 'react-icons/fa'

function TaskItem({task, onDelete, onToggle}){

    return (
        <li>
            <div className='task-container'>
                <input type="checkbox" className="task-item" name={`${task.id}`} id={`${task.id}`} task-status={`${task.completed ? 'completed' : 'active'}`} onChange={() => onToggle(task.id)}/>
                <label htmlFor={`${task.id}`} task-status={`${task.completed ? 'completed' : 'active'}`}>{task.text}</label>
            </div>
            <button className='close' onClick={() => onDelete(task.id)}>
                <FaTimes color='#7e7d79'/>
            </button>
        </li>
    )
}

export default TaskItem