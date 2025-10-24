function Sidebar(){
    return (
        <section id="stats">
            <ul>
                <li>
                    <img src="/src/assets/inbox_icon.png" alt="Inbox" />
                    <span className="task_type">Inbox</span>
                    <span className="task_counter">5</span>
                </li>
                <li>
                    <img src="/src/assets/calendar_icon.png" alt="Today" />
                    <span className="task_type">Today</span>
                    <span className="task_counter">5</span>
                </li>
                <li>
                    <img src="/src/assets/upcoming_icon.png" alt="Upcoming" />
                    <span className="task_type">Upcoming</span>
                </li>
            </ul>
        </section>
    )
}

export default Sidebar