import imgs from "./assets/images/img";

const App = () => {
  return (
    <div className="App">
      <div className="menu">
        <span className="menu_section">
          <div className="menu_logo">
            <h3><b>Menu</b></h3> 
          </div>
          <div className="menu_burger">
            <img src={imgs.menu} alt="burger" width={25}/>
          </div>
        </span>
        <div className="search">
          <input type="text" placeholder="search"/>
        </div>
        <h5>TASKS</h5>
        <div className="tasks_list">
          <button className="tasks_today">Today</button>
          <button className="tasks_sticky">Sticky Wall</button>
        </div>
        <h5>LISTS</h5>
        <div className="lists_list">
          <button className="list">Work</button>
          <button className="add_list">Add New List</button>
        </div>
      </div>
      <div className="wall">
        <div className="wall_header">
          <h1>
            <b>Work</b>
          </h1>
          <div className="counter">
            3
          </div>
        </div>
        <div className="tasks">
          <button className="add_task">Add New Task</button>
          <div className="filters">
            <button>name</button>
            <button>completed</button>
          </div>
          <ul>
            <li>
              <div className="info_task">
                <input type="checkbox"/>
                task 1
              </div>
              <button className="delete_btn">
                Delete
              </button>
            </li>
            <li>
              <div className="info_task">
                <input type="checkbox"/>
                task 2
              </div>
              <button className="delete_btn">
                Delete
              </button>
            </li>
            <li>
              <div className="info_task">
                <input type="checkbox"/>
                task 3
              </div>
              <button className="delete_btn">
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
