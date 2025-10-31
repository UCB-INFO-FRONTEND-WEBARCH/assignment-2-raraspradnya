import { useState } from "react"

function TaskForm({onAddTask}){
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length > 0){
            const newTask ={
                completed: false,
                text
            }
            onAddTask(newTask);
            setText('');
        }
    }

    return (
        <form id="task-form" onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" onChange={handleTextChange} placeholder='Create a new task' id="task-input" value={text}></input>
                <button type="submit" id="task-submit" className={`${text === '' ? 'disabled' : 'active'}`}>Add</button>
            </div>
        </form>
    )
}

export default TaskForm