function Searchbar(){
    return (
        <section id="searchbar">
            <button id="searchbar">
                <img src="/src/assets/menu_icon.png" alt="Menu" />
            </button>
            <label id="search_container"> 
                <img id="search_icon" src="/src/assets/search_icon.png" alt="search" />
                <input type="text" id="search_bar" placeholder="Quick Find"/>
            </label>
        </section>
    )
}

export default Searchbar