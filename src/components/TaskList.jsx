import Sidebar from './Sidebar'
import TaskItem from './TaskItem'
const dummy ={id: 2, text: "Learn Abc", completed: 'false' }; 

function TaskList({tasks}){
    return (
        <main>
            <Sidebar />
            <section id="task_list">
                <h1>Inbox</h1>
                <ul>
                   {tasks.map((item) => (
                        <TaskItem key={item.id} item={item} />
                   ))}
                </ul>
            </section>
        </main>
    )
}

export default TaskList