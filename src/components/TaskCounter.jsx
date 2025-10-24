import Searchbar from './Searchbar'

function TaskCounter(){
    return (
        <header>
            <Searchbar />
            <section id="task_counter">
                <img src="/src/assets/check_icon.png" alt="Task Counter" />
                <span>30/5</span> 
            </section>
        </header>
    )
}

export default TaskCounter