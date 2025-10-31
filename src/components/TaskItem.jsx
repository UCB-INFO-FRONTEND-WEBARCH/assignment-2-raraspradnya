import { FaTimes } from 'react-icons/fa'

function TaskItem({item, onDelete, onToggle}){

    return (
        <li>
            <div className='task-container'>
                <input type="checkbox" className="task-item" name={`${item.id}`} id={`${item.id}`} task-status={`${item.completed ? 'completed' : 'active'}`} onClick={() => onToggle(item.id)}/>
                <label htmlFor={`${item.id}`} task-status={`${item.completed ? 'completed' : 'active'}`}>{item.text}</label>
            </div>
            <button className='close' onClick={() => onDelete(item.id)}>
                <FaTimes color='#7e7d79'/>
            </button>
        </li>
    )
}

export default TaskItem